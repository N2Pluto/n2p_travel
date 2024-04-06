import { Button, Typography, Grid } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Link from 'next/link'
import { keyframes, styled } from '@mui/system'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const AnimatedTypography = styled(Typography)(({ theme }) => ({
  animation: `${fadeIn} 2s ease-in-out forwards`
}))

const CardText = () => {
  return (
    <div>
      <Grid container style={{ height: '85vh' }}>
        <Grid item xs={12} style={{ position: 'relative', height: '100vh' }}>
          <CardMedia
            component='img'
            src='https://wallpapercave.com/wp/wp4609672.jpg'
            alt='Background Image'
            style={{
              width: '100%',
              height: '100vh',
              objectFit: 'cover',
              position: 'absolute',
              zIndex: -1
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff'
            }}
          >
            <AnimatedTypography variant='h1' className='mitr-semibold' sx={{ pt: 5, letterSpacing: '0.05em' }}>
              Phuket
            </AnimatedTypography>

            <div className='max-w-2xl mb-8'>
              <AnimatedTypography
                className='mitr-light py-5 text-xl leading-normal lg:text-xl xl:text-2xl'
                sx={{ pb: 2 }}
              >
                Top 10 Tourist Attractions
              </AnimatedTypography>

              <AnimatedTypography style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Link href='/home'>
                  <Button
                    variant='outlined'
                    className='mitr-semibold'
                    sx={{
                      color: '#FFFFFF', // White text
                      backgroundColor: 'transparent', // Transparent background
                      borderColor: '#FFFFFF', // White border
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        color: '#FFFFFF', // White text on hover
                        borderColor: '#FFFFFF', // White border on hover
                        transform: 'scale(1.25)'
                      }
                    }}
                  >
                    GO TO WEBSITE
                  </Button>
                </Link>
              </AnimatedTypography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CardText
