import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface TourismData {
  img: string
  name: string
  description: string
}
const CardImgTop = () => {
  const router = useRouter()
  const [tourism, setTourism] = useState<TourismData[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/Tourism/read/fetchTourism')
      const data = await response.json()
      setTourism(data)
    }
    fetchData()
  }, [])

  console.log('tourism:', tourism)

  const handleButtonClick = (id: string) => {
    router.push(`/TourismDetails/${id}`)
  }

  return (
    <>
      {tourism.map((item, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <Card>
            <CardMedia sx={{ height: '14.5625rem' }} image={item.img1} />
            <CardContent>
              <Typography variant='h6' className='mitr-light' sx={{ marginBottom: 2 }}>
                {item.name}
              </Typography>
              <Typography variant='body2' className='mitr-light'>
                {item.description.substring(0, 300)} ...
              </Typography>
            </CardContent>
            <CardActions className='card-action-dense' sx={{ width: '100%' }}>
              <Button onClick={() => handleButtonClick(item.id)}>Detail</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default CardImgTop
