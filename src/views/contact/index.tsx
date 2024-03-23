import Layout from '@/components/Layout'

import { NextPage } from 'next'
import ContactSection from './components/contact'


export const Contact: NextPage = () => {
  return (
    <Layout>
        <ContactSection />
    </Layout>
  )
}
