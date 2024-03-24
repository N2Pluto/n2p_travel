// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useEffect, useState } from 'react'

const CardImgTop = () => {
    const [tourism, setTourism] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetch('/api/Tourism/read/fetchTourism').then(res => res.json())
        setTourism(data)
      } catch (error) {
        console.error('Error fetching dormitory building data:', error)
      }
    }
    fetchData()
  }, [])

  console.log('tourism:', tourism)

  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image='/images/cards/glass-house.png' />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Influencing The Influencer
        </Typography>
        <Typography variant='body2'>
          Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister
          predicts Cancun will draw as many visitors in 2006 as it did two years ago.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop
