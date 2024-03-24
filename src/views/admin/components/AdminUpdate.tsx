import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Grid, { GridProps } from '@mui/material/Grid'

interface AdminUpdateProps {
  id: number
}

const AdminUpdate: React.FC<AdminUpdateProps> = ({ id }) => {
  const [open, setOpen] = React.useState(false)
  const [itemData, setItemData] = useState<any>({})

  const handleClickOpen = async () => {
    const response = await fetch(`/api/Tourism/read/readByID/${id}`)
    const data = await response.json()
    setItemData(data)
    setOpen(true)
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
    const response = await fetch('/api/Tourism/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemData)
    })
    const data = await response.json()
    console.log(data)
    handleClose()
  }

  return (
    <>
      <Grid>
        <Button variant='outlined' onClick={handleClickOpen}>
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
          <DialogTitle>Edit</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Edit to this website, please enter your details here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              required
              margin='dense'
              id='id'
              name='id'
              label='ID'
              type='text'
              fullWidth
              variant='standard'
              value={itemData.id || ''}
              disabled
            />
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
              value={itemData.name || ''}
              onChange={handleInputChange}
            />
            <TextField
              required
              margin='dense'
              id='description'
              name='description'
              label='Description'
              type='text'
              fullWidth
              variant='standard'
              value={itemData.description || ''}
              onChange={handleInputChange}
            />
            <input accept='image/*' id='images' name='images' type='file' />

            <TextField
              required
              margin='dense'
              id='operation_time'
              name='operation_time'
              label='Operation Time'
              type='text'
              fullWidth
              variant='standard'
              value={itemData.operation_time || ''}
              onChange={handleInputChange}
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
              value={itemData.location || ''}
              onChange={handleInputChange}
            />
            <TextField
              required
              margin='dense'
              id='latitude'
              name='latitude'
              label='Latitude'
              type='text'
              fullWidth
              variant='standard'
              value={itemData.latitude || ''}
              onChange={handleInputChange}
            />
            <TextField
              required
              margin='dense'
              id='longitude'
              name='longitude'
              label='Longitude'
              type='text'
              fullWidth
              variant='standard'
              value={itemData.longitude || ''}
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

export default AdminUpdate
