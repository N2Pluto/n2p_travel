import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Grid, { GridProps } from '@mui/material/Grid'

const AdminInsert: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const formJson = Object.fromEntries((formData as any).entries())
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
  }

  return (
    <>
      <Grid className='mitr-light'>
        <Button variant='outlined' onClick={handleClickOpen} className='mitr-light'>
          INSERT
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
              type='text'
              fullWidth
              variant='standard'
              className='mitr-light'
            />
            <TextField
              required
              margin='dense'
              id='img'
              name='img'
              label='images'
              type='text'
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
              type='text'
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
              type='text'
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
    </>
  )
}

export default AdminInsert
