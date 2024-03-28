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
import { PhotoCamera } from '@mui/icons-material'
import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

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

interface AdminUpdateProps {
  id: number
}

const ContactUpdate: React.FC<AdminUpdateProps> = ({ id }) => {
  const [open, setOpen] = React.useState(false)
  const [itemData, setItemData] = useState<any>({})
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const [uploadingProfile, setUploadingProfile] = React.useState(false)
  const [imgProfileUrl, setImgProfileUrl] = useState({})

  const handleProfileDelete = async () => {
    if (profileImage) {
      const filePath = `public/${profileImage.name}`
      const { error } = await supabase.storage.from('image').remove([filePath])
      if (error) {
        console.error('Error deleting profile image: ', error.message)
      } else {
        console.log('Profile image deleted successfully')
        setProfileImage(null)
      }
    }
  }

  const handleProfileUploadClick = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (files && files.length !== 0) {
      setProfileImage(null) // Remove the existing image
      setProfileImage(files[0])

      // Upload file to Supabase
      const timestamp = Date.now()
      const filePath = `public/${timestamp}_${files[0].name}`
      setUploadingProfile(true)
      const { error } = await supabase.storage.from('image').upload(filePath, files[0])
      if (error) {
        console.error('Error uploading profile image: ', error.message)
      } else {
        console.log('Profile image uploaded successfully')
        setUploadingProfile(false) // Hide the Backdrop
        const { data, error: urlError } = await supabase.storage.from('image').getPublicUrl(filePath)
        if (urlError) {
          console.error('Error getting public URL: ', urlError.message)
        } else {
          const { publicUrl } = data
          setImgProfileUrl(prevState => ({ ...prevState, image: publicUrl }))
          console.log('Profile image URL:', publicUrl)
        }
      }
    }
  }

  const handleClickOpen = async () => {
    const response = await fetch(`/api/Contact/Read/readByID/${id}`)
    const data = await response.json()
    setItemData(data)
    setOpen(true)

    const imageUrl = data.image
    if (imageUrl) {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const file = new File([blob], 'profileImage', { type: blob.type })
      setProfileImage(file)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemData({
      ...itemData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    let formJson = Object.fromEntries((formData as any).entries())

    formJson = {
      ...formJson,
      id: itemData.id,
      image: imgProfileUrl.image // Add this line
    }

    console.log(formJson)
    const response = await fetch('/api/Contact/Update/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formJson)
    })
    const data = await response.json()
    console.log(data)
    handleClose()
  }

  return (
    <>
      <Grid>
        <Button onClick={handleClickOpen} className='mitr-light'>
          Edit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: handleSubmit
          }}
        >
          <DialogTitle className='mitr-light'>Edit</DialogTitle>
          <DialogContent>
            <DialogContentText className='mitr-light'>
              To Edit to this website, please enter your details here. We will send updates occasionally.
            </DialogContentText>

            <Grid container direction='row' justifyContent='center' alignItems='center' style={{ minHeight: '10vh' }}>
              <input
                accept='image/png, image/jpeg , image/JPG, image/jpg, image/JPEG, image/PNG'
                style={{ display: 'none' }}
                id='profile-button-file'
                type='file'
                onChange={handleProfileUploadClick}
              />
              <label htmlFor='profile-button-file'>
                <Button component='span' startIcon={<PhotoCamera />}>
                  Upload Profile Image
                </Button>
              </label>
              <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={uploadingProfile}>
                <CircularProgress color='inherit' />
              </Backdrop>
            </Grid>

            {profileImage && (
              <Grid container justifyContent='center' alignItems='center'>
                <Grid item xs={4}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={URL.createObjectURL(profileImage)}
                      alt='Profile'
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                </Grid>
              </Grid>
            )}

            <TextField
              autoFocus
              required
              margin='dense'
              id='firstname'
              name='firstname'
              label='Firstname'
              type='text'
              fullWidth
              variant='standard'
              value={itemData.firstname || ''}
              onChange={handleInputChange}
            />
            <TextField
              required
              margin='dense'
              id='lastname'
              name='lastname'
              label='Lastname'
              type='text'
              fullWidth
              variant='standard'
              value={itemData.lastname || ''}
              onChange={handleInputChange}
            />
            <TextField
              required
              margin='dense'
              id='instagram'
              name='instagram'
              label='Instagram'
              type='text'
              fullWidth
              variant='standard'
              value={itemData.instagram || ''}
              onChange={handleInputChange}
            />

            <TextField
              required
              margin='dense'
              id='facebook'
              name='facebook'
              label='Facebook'
              type='text'
              fullWidth
              variant='standard'
              value={itemData.facebook || ''}
              onChange={handleInputChange}
            />
            <TextField
              required
              margin='dense'
              id='phone'
              name='phone'
              label='Phone'
              type='text'
              fullWidth
              variant='standard'
              value={itemData.phone || ''}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit'>Submit</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  )
}

export default ContactUpdate
