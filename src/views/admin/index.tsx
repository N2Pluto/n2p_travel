import Layout from '@/components/Layout'

import { NextPage } from 'next'
import AdminRead from './components/AdminRead'
import Grid from '@mui/material/Grid'
import AdminInsert from './components/AdminInsert'

export const Admin: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} lg={12}>
          <AdminInsert />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AdminRead />
        </Grid>
      </Grid>
    </Layout>
  )
}
