// ** React Imports
import { useState } from 'react'

import Card from '@mui/material/Card'

import CardMedia from '@mui/material/CardMedia'


const CardAdmin = () => {
  // ** State
  const [collapse, setCollapse] = useState<boolean>(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }

  return (
    <Card>
      <CardMedia sx={{ height: '20.5625rem' }} image='https://r4.wallpaperflare.com/wallpaper/665/811/807/artwork-mario-character-pixel-art-pixels-pixelated-hd-wallpaper-a9f0384df17add1b5657484f10f126dd.jpg' />

    </Card>
  )
}

export default CardAdmin