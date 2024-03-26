// ** React Imports
import { useState } from 'react'

import Card from '@mui/material/Card'

import CardMedia from '@mui/material/CardMedia'


const CardContent = () => {
  // ** State
  const [collapse, setCollapse] = useState<boolean>(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }

  return (
    <Card>
      <CardMedia sx={{ height: '20.5625rem' }} image='https://images.alphacoders.com/113/1130469.png' />

    </Card>
  )
}

export default CardContent