// Define the interface for the items

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid, { GridProps } from '@mui/material/Grid'
import { useEffect, useState } from 'react'
import AdminUpdate from './AdminUpdate'
import AdminDelete from './AdminDelete'
import { keyframes } from '@emotion/react'

// Styled Grid component
const StyledGrid1 = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    paddingTop: '0 !important'
  },
  '& .MuiCardContent-root': {
    padding: theme.spacing(3, 4.75),
    [theme.breakpoints.down('md')]: {
      paddingTop: 0
    }
  }
}))

// Styled Grid component
const StyledGrid2 = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    paddingLeft: '0 !important'
  },
  [theme.breakpoints.down('md')]: {
    order: -1
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  height: '11rem',
  borderRadius: theme.shape.borderRadius
}))

interface Item {
  id: number
  name: string
  operation_time: string
  location: string
  latitude: number
  longitude: number
  description: string
  imgCover: string
}

const CardEdit = () => {
  const [tourismData, setTourismData] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/Tourism/read/fetchTourism')
      const data = await response.json()
      setTourismData(data)
    }

    const interval = setInterval(fetchData, 1000)

    return () => clearInterval(interval)
  }, [])

  console.log('tourismData:', tourismData)

  return (
    <>
      <Grid container spacing={2}>
        {tourismData.map((item, index: number) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              className='mitr-light'
              sx={{
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 0 20px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Grid container spacing={6}>
                <StyledGrid1 item xs={12} md={6} lg={7}>
                  <CardContent>
                    <Typography variant='h6' sx={{ marginBottom: 2 }}>
                      {item.name}
                    </Typography>
                    <Box sx={{ mb: 4.75, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}></Box>
                    <Typography variant='body2' className='mitr-light'>
                      Description : {item.description.substring(0, 150)} ...
                    </Typography>
                    <Typography variant='body2' className='mitr-light' sx={{ marginBottom: 1 }}>
                      Operation :{item.operation_time}
                    </Typography>
                    <Typography variant='body2' className='mitr-light' sx={{ marginBottom: 1 }}>
                      Location :{item.location}
                    </Typography>
                    <Typography variant='body2' className='mitr-light' sx={{ marginBottom: 1 }}>
                      Latitude :{item.latitude}
                    </Typography>
                    <Typography variant='body2' className='mitr-light' sx={{ marginBottom: 1 }}>
                      Longitude :{item.longitude}
                    </Typography>
                  </CardContent>
                  <CardActions className='card-action-dense' sx={{ width: '100%' }}>
                    <AdminUpdate id={item.id}>
                      <Button>
                        <span className='mitr-light'>Edit</span>
                      </Button>
                    </AdminUpdate>
                    <AdminDelete id={item.id}>
                      <Button>Delete</Button>
                    </AdminDelete>
                  </CardActions>
                </StyledGrid1>
                <StyledGrid2 item xs={12} md={6} lg={5}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Img sx={{ height: '14.5625rem' }} alt={item.name} src={item.imgCover} />
                  </CardContent>
                </StyledGrid2>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default CardEdit
