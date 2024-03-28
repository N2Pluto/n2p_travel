import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Grid, { GridProps } from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { PhotoCamera } from '@mui/icons-material'
import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import supabase from '@/libs/supabase'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

const AdminInsert: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState<File[]>([])
  const [uploading, setUploading] = React.useState(false)
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [uploadingCover, setUploadingCover] = React.useState(false)
  const [imgCoverUrl, setImgCoverUrl] = useState({})
  const [imgDetailUrl, setImgDetailUrl] = useState<string[]>([])
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true)
  }

  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackbarOpen(false)
  }

  const handleCoverUploadClick = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (files && files.length !== 0) {
      setCoverImage(null) // Remove the existing image
      setCoverImage(files[0])

      // Upload file to Supabase
      const filePath = `public/${files[0].name}`
      setUploadingCover(true)
      const { error } = await supabase.storage.from('image').upload(filePath, files[0])
      if (error) {
        console.error('Error uploading cover image: ', error.message)
      } else {
        console.log('Cover image uploaded successfully')
        setUploadingCover(false) // Hide the Backdrop
        const { data, error: urlError } = await supabase.storage.from('image').getPublicUrl(filePath)
        if (urlError) {
          console.error('Error getting public URL: ', urlError.message)
        } else {
          const { publicUrl } = data
          setImgCoverUrl(prevState => ({ ...prevState, imgCover: publicUrl }))
          console.log('Cover image URL:', publicUrl)
        }
      }
    }
  }

  const handleUploadClick = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    const { files } = event.target

    if (files && files.length !== 0) {
      setFileList([...fileList, files[0]])
      reader.onload = () => setPreviewImage(reader.result as string)
      reader.readAsDataURL(files[0])
      setPreviewTitle(files[0].name)

      // Upload file to Supabase
      const filePath = `public/${files[0].name}`
      setUploading(true)
      const { error } = await supabase.storage.from('image').upload(filePath, files[0])
      if (error) {
        console.error('Error uploading image: ', error.message)
      } else {
        console.log('Image uploaded successfully')
        setUploading(false) // Hide the Backdrop
        const { data, error: urlError } = await supabase.storage.from('image').getPublicUrl(filePath)
        if (urlError) {
          console.error('Error getting public URL: ', urlError.message)
        } else {
          const { publicUrl } = data
          setImgDetailUrl(prevState => [...prevState, publicUrl])
          console.log('Image Details URL:', publicUrl)
        }
      }
    }
  }

  const handleCoverDelete = async () => {
    if (coverImage) {
      // Delete file from Supabase
      const filePath = `public/${coverImage.name}`
      const { error } = await supabase.storage.from('image').remove([filePath])
      if (error) {
        console.error('Error deleting cover image: ', error.message)
      } else {
        console.log('Cover image deleted successfully')
        setCoverImage(null)
      }
    }
  }

  const handleDelete = async (index: number) => {
    const newFileList = [...fileList]
    const fileToDelete = newFileList[index]

    // Delete file from Supabase
    const filePath = `public/${fileToDelete.name}`
    const { error } = await supabase.storage.from('image').remove([filePath])
    if (error) {
      console.error('Error deleting image: ', error.message)
    } else {
      console.log('Image deleted successfully')
      newFileList.splice(index, 1)
      setFileList(newFileList)
    }
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setFileList([])
    setCoverImage(null)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    let formJson = Object.fromEntries((formData as any).entries())

    // Add imgCoverUrl and imgDetailUrl to the form data
    formJson = {
      ...formJson,
      imgCover: imgCoverUrl.imgCover,
      imgDetail: imgDetailUrl.join(',')
    }

    console.log(formJson)
    const response = await fetch('/api/Tourism/insert/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formJson)
    })
    const data = await response.json()
    console.log(data)
    handleClose()

    handleSnackbarOpen()
  }

  return (
    <>
      <Grid className='mitr-light'>
        <Button variant='outlined' onClick={handleClickOpen} className='mitr-light'>
          Insert New Data
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: handleSubmit
          }}
        >
          <DialogTitle className='mitr-light'>INSERT</DialogTitle>
          <DialogContent>
            <DialogContentText className='mitr-light'>
              To INSERT to this website, please enter your details here. We will send updates occasionally.
            </DialogContentText>

            <Grid container direction='row' justifyContent='center' alignItems='center' style={{ minHeight: '10vh' }}>
              <input
                accept='image/png, image/jpeg , image/JPG, image/jpg, image/JPEG, image/PNG'
                style={{ display: 'none' }}
                id='cover-button-file'
                type='file'
                onChange={handleCoverUploadClick}
              />
              <label htmlFor='cover-button-file'>
                <Button component='span' startIcon={<PhotoCamera />}>
                  Upload Cover Image
                </Button>
              </label>
              <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={uploadingCover}>
                <CircularProgress color='inherit' />
              </Backdrop>
            </Grid>

            {coverImage && (
              <Grid container justifyContent='center' alignItems='center'>
                <Grid item xs={4}>
                  <div style={{ position: 'relative' }}>
                    <IconButton onClick={handleCoverDelete} style={{ position: 'absolute', top: 0, right: 0 }}>
                      <Close />
                    </IconButton>
                    <img
                      src={URL.createObjectURL(coverImage)}
                      alt={coverImage.name}
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                </Grid>
              </Grid>
            )}

            <Grid container direction='row' justifyContent='center' alignItems='center' style={{ minHeight: '10vh' }}>
              <input
                accept='image/png, image/jpeg , image/JPG, image/jpg, image/JPEG, image/PNG'
                style={{ display: 'none' }}
                id='raised-button-file'
                type='file'
                onChange={handleUploadClick}
              />
              <label htmlFor='raised-button-file'>
                <Button component='span' startIcon={<PhotoCamera />}>
                  Upload Image Details
                </Button>
              </label>
              <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={uploading}>
                <CircularProgress color='inherit' />
              </Backdrop>
            </Grid>

            <Grid container direction='row' spacing={2}>
              {fileList.map((file, index) => (
                <Grid item xs={4} key={index}>
                  <div style={{ position: 'relative' }}>
                    <IconButton onClick={() => handleDelete(index)} style={{ position: 'absolute', top: 0, right: 0 }}>
                      <Close />
                    </IconButton>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>

            <TextField
              autoFocus
              required
              margin='dense'
              id='name'
              name='name'
              label='Name'
              type='text'
              fullWidth
              variant='standard'
              className='mitr-light'
            />
            <TextField
              required
              margin='dense'
              id='description'
              name='description'
              label='Description'
              multiline
              rows={4}
              fullWidth
              variant='standard'
              className='mitr-light'
            />

            <TextField
              required
              margin='dense'
              id='operation_time'
              name='operation_time'
              label='Operation Time'
              type='text'
              fullWidth
              variant='standard'
              className='mitr-light'
            />
            <TextField
              required
              margin='dense'
              id='location'
              name='location'
              label='Location'
              type='text'
              fullWidth
              variant='standard'
              className='mitr-light'
            />
            <TextField
              required
              margin='dense'
              id='latitude'
              name='latitude'
              label='Latitude'
              type='number'
              fullWidth
              variant='standard'
              className='mitr-light'
            />
            <TextField
              required
              margin='dense'
              id='longitude'
              name='longitude'
              label='Longitude'
              type='number'
              fullWidth
              variant='standard'
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit'>Submit</Button>
          </DialogActions>
        </Dialog>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity='success' variant='filled' sx={{ width: '100%' }}>
          Insert Data Successfully!
        </Alert>
      </Snackbar>
    </>
  )
}

export default AdminInsert
