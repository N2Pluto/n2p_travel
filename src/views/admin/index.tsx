import Layout from '@/components/Layout'

import { NextPage } from 'next'
import AdminRead from './components/AdminRead'
import Grid from '@mui/material/Grid'
import AdminInsert from './components/AdminInsert'

import { Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CardAdmin from './components/Cardadmin'
import CardEdit from './components/AdminRead'
import Link from 'next/link'

export const Admin: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CardAdmin />
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Link href='/'>
                <span className='mitr-light'>หน้าแรก</span>
              </Link>

              <ExpandMoreIcon style={{ transform: 'rotate(270deg)' }} />
              <span className='mitr-light'>admin เมนู</span>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <Typography variant='h4' className='mitr-semibold'>
                Admin management
              </Typography>
            </Grid>

            <Grid container spacing={3} sx={{ pt: 3 ,pb: 5}}>
              <AdminInsert />
            </Grid>
            <Grid container spacing={3} sx={{ pt: 3 }}>
            <CardEdit />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

    </Layout>
  )
}
