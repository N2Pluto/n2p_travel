import Layout from '@/components/Layout'

import { NextPage } from 'next'
import HeroSection from './components/HeroSection'

export const HomePage: NextPage = () => {
  return (
    <Layout>
        <HeroSection/>
    </Layout>
  )
}
