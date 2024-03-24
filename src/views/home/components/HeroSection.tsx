import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import CardWithCollapse from './card'
import CardTop from './topcard'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'
import CardImgTop from './card'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const HeroSection: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CardTop />
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <span className='mitr-light'>หน้าแรก</span>
            <ExpandMoreIcon style={{ transform: 'rotate(270deg)' }} />
            <span className='mitr-light'>บล็อกท่องเที่ยว</span>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Typography variant='h4' className='mitr-semibold'>
              บล็อกแนะนำ ถานที่เที่ยวภูเก็ต
            </Typography>
          </Grid>

          <Grid container spacing={2} sx={{pt:3}}>

              <CardImgTop />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}

export default HeroSection
