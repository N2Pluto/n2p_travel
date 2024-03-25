import { CardMedia } from '@mui/material'
import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box, Grid } from '@mui/material'
import Card from '@mui/material/Card'

const CardRecommend: React.FC = () => {
  const [tourism, setTourism] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/Tourism/read/fetchTourism')
      const data = await response.json()
      setTourism(data)
    }
    fetchData()
  }, [])

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Carousel>
        {tourism.map((item, index) => (
          <CardMedia key={index} sx={{ height: '30.5625rem' }} image={item.imgCover}></CardMedia>
        ))}
      </Carousel>
    </Grid>
  )
}

export default CardRecommend
