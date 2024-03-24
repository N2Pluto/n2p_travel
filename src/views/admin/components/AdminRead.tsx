

import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid, { GridProps } from '@mui/material/Grid'
import AdminDelete from './AdminDelete'
import { ClassNames } from '@emotion/react'
import AdminUpdate from './AdminUpdate'

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

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  height: '100%'
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  height: '11rem',
  borderRadius: theme.shape.borderRadius
}))

interface TourismItem {
  id: number;
  name: string;
  location: string;
  operation_time: string;
  img: string;
}
interface AdminUpdateProps {
  children: React.ReactNode;
}

const AdminRead: React.FC = () => {
const [tourismData, setTourismData] = useState<TourismItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/Tourism/read/fetchTourism')
      const data = await response.json()
      setTourismData(data)
    }

    fetchData()
  }, [])

  return (
    <div >
      <Grid container spacing={2}>
        {tourismData.map((item, index: number) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <StyledCard>
              <Card>
                <Grid container spacing={6}>
                  <StyledGrid1 item xs={12} md={6} lg={7}>
                    <CardContent>
                      <Typography variant='h6' className='mitr-light' sx={{ marginBottom: 2 }}>
                        {item.name}
                      </Typography>
                      <Box sx={{ mb: 4.75, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Rating readOnly value={5} name='read-only' sx={{ marginRight: 2 }} />
                        <Typography variant='body2' className='mitr-light'>5 Star | 98 reviews</Typography>
                      </Box>
                      <Typography variant='body2'className='mitr-light' sx={{ marginBottom: 4 }}>
                        {item.location}
                      </Typography>
                      <Typography variant='body2'className='mitr-light' sx={{ marginBottom: 4 }}>
                        {item.operation_time}
                      </Typography>
                    </CardContent>
                    <CardActions className='card-action-dense' sx={{ width: '100%' }}>
                      <AdminUpdate id={item.id}>
                        <Button>
                          <span className='mitr-light'>Edit</span></Button>
                      </AdminUpdate>
                      <AdminDelete id={item.id}>
                        <Button>Delete</Button>
                      </AdminDelete>
                    </CardActions>
                  </StyledGrid1>
                  <StyledGrid2 item xs={12} md={6} lg={5}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Img alt={item.name} src={item.img} />
                    </CardContent>
                  </StyledGrid2>
                </Grid>
              </Card>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default AdminRead
