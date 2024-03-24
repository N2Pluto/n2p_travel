import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'

interface TourismData {
    images: string;
    name: string;
    description: string;
}
const CardImgTop = () => {
     const [tourism, setTourism] = useState<TourismData[]>([])

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/api/Tourism/read/fetchTourism')
          const data = await response.json()
          setTourism(data)
        }
     
        const interval = setInterval(fetchData, 10000)
     
        return () => clearInterval(interval)
      }, [])

  console.log('tourism:', tourism)

  return (
    <>
      {tourism.map((item, index) => (
         <Grid item xs={12} sm={6} md={6} key={index}>
            <Card >
          <CardMedia sx={{ height: '14.5625rem' }} image={item.images} />
          <CardContent>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              {item.name}
            </Typography>
            <Typography variant='body2'>
              {item.description}
            </Typography>
          </CardContent>
        </Card>
         </Grid>
        
      ))}
    </>
  )
}

export default CardImgTop