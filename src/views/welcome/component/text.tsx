import { Button, Typography } from '@mui/material'
import Link from 'next/link'

const CardText = () => {
  return (
    <div className='max-w-2xl mb-8'>
      <Typography variant='h2' className='mitr-semibold' sx={{ pb: 2 }}>
        {' '}
        Free Landing Page Template for startups
      </Typography>

      <Typography
        className='mitr-light py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300'
        sx={{ pb: 2 }}
      >
        Nextly is a free landing page & marketing website template for startups and indie projects. Its built with
        Next.js & TailwindCSS. And its completely open-source.
      </Typography>

      <Link href='/home'>
        <Button
          variant='outlined'
          className='mitr-semibold'
          sx={{
            color: '#D573FF',
            backgroundColor: '#D573FF',
            borderColor: '#D573FF', // Add this line to set the border color
            '&:hover': {
              color: '#FFFFFF',
              backgroundColor: '#B460E8',
              borderColor: '#B460E8' // Add this line to set the hover border color
            }
          }}
        >
          Go Home
        </Button>
      </Link>
    </div>
  )
}

export default CardText
