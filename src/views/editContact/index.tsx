import Layout from '@/components/Layout'

import { NextPage } from 'next'
import Grid from '@mui/material/Grid'

import { Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Link from 'next/link'
import CardAdminContact from './components/cardadmin'
import ContactUpdate from './components/contactUpdate'
import ContactRead from './components/contactRead'

export const EditContact: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <CardAdminContact />
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
                Admin Manage contact information
              </Typography>
            </Grid>

            <Grid container spacing={3} sx={{ pt: 3 ,pb: 5}}>
            </Grid>
            <Grid container spacing={3} sx={{ pt: 3 }}>
            <ContactRead />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

    </Layout>
  )
}
