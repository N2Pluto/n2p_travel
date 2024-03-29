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
import { keyframes, styled } from '@mui/system'

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const AnimatedCard = styled(Card)(({ theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  animation: `${slideIn} 0.5s ease-in-out`,
  transform: 'scale(1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)', // Added transform: scale(1.05) on hover
    boxShadow: '0 0 20px rgba(0,0,0,0.3)'
  }
}))

interface TourismData {
  img: string
  name: string
  description: string
  imgCover: string
  id: string
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
          <AnimatedCard
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              transform: 'scale(1)',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)', // Added transform: scale(1.05) on hover
                boxShadow: '0 0 20px rgba(0,0,0,0.15)'
              }
            }}
            delay={index * 0.5}
          >
            <CardMedia sx={{ height: '14.5625rem' }} image={item.imgCover} />
            <CardContent>
              <Typography variant='h6' className='mitr-light' sx={{ marginBottom: 2 }}>
                {item.name}
              </Typography>
              <Typography variant='body2' className='mitr-light'>
                {item.description.substring(0, 200)} ...
              </Typography>
            </CardContent>
            <CardActions className='card-action-dense' sx={{ width: '100%', justifyContent: 'flex-end' }}>
              <Button onClick={() => handleButtonClick(item.id)}>ดูรายละเอียดเพิ่มเติม</Button>
            </CardActions>
          </AnimatedCard>
        </Grid>
      ))}
    </>
  )
}

export default CardImgTop
