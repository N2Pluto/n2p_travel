import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'
import CardContent from './cardContact'
import ContactSection from './contact'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const HeroContact: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <CardContent />

      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <span className='mitr-light'>หน้าแรก</span>
            <ExpandMoreIcon style={{ transform: 'rotate(270deg)' }} />
            <span className='mitr-light'>ข้อมูลการติดต่อ</span>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Typography variant='h4' className='mitr-semibold'>
              ข้อมูลการติดต่อ
            </Typography>
          </Grid>
          <Grid container spacing={3} sx={{ pt: 3 }}></Grid>
          <Grid container spacing={3} sx={{ pt: 3 }}>
            <Grid item xs={12} sm={12} md={12}>
              <ContactSection />
            </Grid>
          </Grid>

        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}

export default HeroContact