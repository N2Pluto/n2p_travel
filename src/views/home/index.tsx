import Layout from '@/components/Layout'

import { NextPage } from 'next'
import HeroSection from './page/HeroSection'

export const HomePage: NextPage = () => {
  return (
    <Layout>
        <HeroSection/>
    </Layout>
  )
}
