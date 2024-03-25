import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import CarouselDefault from './dssf'
import MuiCarousel from './dssf'


interface TourismData {
  img1: string
  name: string
  description: string
  id: number
  operation_time: string
  location: string
  latitude: number
  longitude: number
  created_at: string
  imgCover: string
  imgDetail: string
}

const CardRecommend = () => {
  const [tourism, setTourism] = useState<TourismData[]>([])

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
        <MuiCarousel />
    </Grid>
  )
}

export default CardRecommend