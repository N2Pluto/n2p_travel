import Layout from '@/components/Layout'

import { NextPage } from 'next'
import TourismSection from './components/TourismSection'

export const TourismDetails: NextPage = () => {
  return (
    <Layout>
      <TourismSection />
    </Layout>
  )
}
