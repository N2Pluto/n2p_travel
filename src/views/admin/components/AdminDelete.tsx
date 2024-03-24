import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Grid, { GridProps } from '@mui/material/Grid'

interface AdminDeleteProps {
  id: number
}

const AdminDelete: React.FC<AdminDeleteProps> = ({ id }) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = async () => {
    const response = await fetch(`/api/Tourism/delete/${id}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    console.log(data)
    handleClose()
  }

  return (
    <>
      <Grid>
        <Button variant='outlined' onClick={handleClickOpen} className='mitr-light'>
          Delete
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
          className='mitr-light'
        >
          <DialogTitle id='alert-dialog-title' className='mitr-light'>{'Delete Data?'}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description' className='mitr-light'>You want to delete this data?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleDelete} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  )
}

export default AdminDelete
