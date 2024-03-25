import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { JSX, ReactChild, useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

interface TourismData {
  id: number
  name: string
  description: string
  operation_time: string
  location: string
  latitude: number
  longitude: number
  created_at: string
  imgCover: string
  imgDetail: string
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
    const interval = setInterval(fetchData, 1000)

    return () => clearInterval(interval)
  }, [id])

  console.log('tourism:', tourism)
  console.log('tourism.latitude value:', tourism?.latitude)
  console.log('tourism.latitude type:', typeof tourism?.latitude)
  console.log('tourism.longitude value:', tourism?.longitude)
  console.log('tourism.longitude type:', typeof tourism?.longitude)

  return (
    <>
      {tourism && (
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <Carousel>
              {(() => {
                let images: JSX.Element[] | ReactChild[] | undefined = []
                if (tourism.imgDetail) {
                  images = tourism.imgDetail
                    .split(',')
                    .map((imgUrl, index) => (
                      <CardMedia key={index} sx={{ height: '50.5625rem' }} image={imgUrl}></CardMedia>
                    ))
                }

                return images
              })()}
            </Carousel>
            <CardContent>
              <Typography variant='h6' className='mitr-medium' sx={{ marginBottom: 2 }}>
                ชื่อ : {tourism.name}
              </Typography>
              <Typography variant='body2' className='mitr-light' sx={{ pb: 2 }}>
                <span className='mitr-medium'> คำอธิบาย : </span>
                {tourism.description}
              </Typography>
              <Typography variant='body2' className='mitr-light' sx={{ pb: 2 }}>
                <span className='mitr-medium'> เวลาเปิด-ปิด : </span>
                {tourism.operation_time}
              </Typography>
              <Typography variant='body2' className='mitr-light' sx={{ pb: 2 }}>
                <span className='mitr-medium'> ตำแหน่งที่อยู่ : </span>
                {tourism.location}
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h6' className='mitr-light' sx={{ pb: 2, pt: 3 }}>
                  <span className='mitr-medium'> แผนที่ </span>
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <iframe
                  src={`http://maps.google.com/maps?q=${tourism.latitude},${tourism.longitude}&z=16&output=embed`}
                  height='300'
                  width='1000'
                ></iframe>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      )}
    </>
  )
}

export default CardDetails
