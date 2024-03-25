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
                let images = []
                if (tourism.imgDetail) {
                  images = tourism.imgDetail.split(',').map((imgUrl, index) => (
                    <div key={index}>
                      <img src={imgUrl} />
                    </div>
                  ))
                }

                return images
              })()}
            </Carousel>
            <CardContent>
              <Typography variant='h6' className='mitr-light' sx={{ marginBottom: 2 }}>
                ชื่อ : {tourism.name}
              </Typography>
              <Typography variant='body2' className='mitr-light'>
                คำอธิบาย : {tourism.description}
              </Typography>
              <Typography variant='body2' className='mitr-light'>
                เวลาเปิด-ปิด : {tourism.operation_time}
              </Typography>
              <Typography variant='body2' className='mitr-light'>
                ตำแหน่งที่อยู่ : {tourism.location}
              </Typography>

              <iframe
                src={`http://maps.google.com/maps?q=${tourism.latitude},${tourism.longitude}&z=16&output=embed`}
                height='300'
                width='1000'
              ></iframe>
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
