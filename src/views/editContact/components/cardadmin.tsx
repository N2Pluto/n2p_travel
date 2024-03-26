// ** React Imports
import { useState } from 'react'

import Card from '@mui/material/Card'

import CardMedia from '@mui/material/CardMedia'


const CardAdminContact = () => {
  // ** State
  const [collapse, setCollapse] = useState<boolean>(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }

  return (
    <Card>
      <CardMedia sx={{ height: '20.5625rem' }} image='https://images8.alphacoders.com/110/1108468.png' />

    </Card>
  )
}

export default CardAdminContact