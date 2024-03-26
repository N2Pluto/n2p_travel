import Layout from '@/components/Layout'

import { NextPage } from 'next'
import ContactSection from './components/contact'
import HeroContact from './components/hero'


export const Contact: NextPage = () => {
  return (
    <Layout>
        <HeroContact />
    </Layout>
  )
}
