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
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface TourismData {
  id: number
  name: string
  description: string
  operation_time: string
  location: string
  latitude: string
  longitude: string
  created_at: string
  img1: string
  img2: string
  img3: string
}

const CardDetails: React.FC = () => {
  const [tourism, setTourism] = useState<TourismData | null>(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/Tourism/read/readByID/${id}`)
      const data = await response.json()
      setTourism(data)
    }
    fetchData()
    console.log('id:', id)
  }, [id])

  console.log('tourism:', tourism)

  return (
    <>
      {tourism && (
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <Carousel>
              <div>
                <img src={tourism.img1} />
              </div>
              <div>
                <img src={tourism.img2} />
              </div>
              <div>
                <img src={tourism.img3} />
              </div>
            </Carousel>
            <CardContent>
              <Typography variant='h6' className='mitr-light' sx={{ marginBottom: 2 }}>
                {tourism.name}
              </Typography>
              <Typography variant='body2' className='mitr-light'>
                {tourism.description}
              </Typography>
              <Typography variant='body2' className='mitr-light'>
                {tourism.operation_time}
              </Typography>
              <Typography variant='body2' className='mitr-light'>
                {tourism.location}
              </Typography>
              <Typography variant='body2' className='mitr-light'>
                {tourism.latitude}
              </Typography>
              <Typography variant='body2' className='mitr-light'>
                {tourism.longitude}
              </Typography>
              <Typography variant='body2' className='mitr-light'>
                {tourism.created_at}
              </Typography>
            </CardContent>
            <CardActions className='card-action-dense' sx={{ width: '100%' }}>
              <Button>Detail</Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  )
}

export default CardDetails
