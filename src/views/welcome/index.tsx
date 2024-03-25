import Layout from '@/components/Layout'

import { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import Hero from './component/hero';

export const WelcomePage: NextPage = () => {
  const router = useRouter()

  const handleButtonClick = (id: string) => {
    router.push('/home')
  }

  return (
    <Layout>
      <Hero /> 
      
    </Layout>
  )
}