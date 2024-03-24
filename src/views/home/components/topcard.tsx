// ** React Imports
import { useState } from 'react'

import Card from '@mui/material/Card'

import CardMedia from '@mui/material/CardMedia'


const CardTop = () => {
  // ** State
  const [collapse, setCollapse] = useState<boolean>(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }

  return (
    <Card>
      <CardMedia sx={{ height: '20.5625rem' }} image='https://r4.wallpaperflare.com/wallpaper/568/805/139/nature-pixel-art-pixels-mountains-wallpaper-b37e94bcd290d7ac61c2e36dee853848.jpg' />

    </Card>
  )
}

export default CardTop