import React, { useState, useEffect } from 'react'
import { Grid, CardMedia, IconButton } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { keyframes, styled } from '@mui/system'

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const SlideInCard = styled(Card)(({ theme, delay }) => ({
  animation: `${slideIn} 0.5s ease-out ${delay}s forwards`,
  transformOrigin: 'left',
  opacity: 0
}))

const ContactSection: React.FC = () => {
  const [contactData, setContactData] = useState([])

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch('/api/Contact/Read/fetchCT')
        if (!response.ok) {
          throw new Error('Failed to fetch contact data')
        }
        const data = await response.json()
        setContactData(data)
      } catch (error) {
        console.error('Error fetching contact data:', error)
      }
    }
    fetchContactData()
  }, [])

  return (
    <>
      <div className='bg-gradient-to-b from-indigo-500 to-purple-500 flex flex-col justify-center items-center py-24 select-none cursor-pointer relative'>
        <Container>
          <Grid container spacing={4} justifyContent='center' alignItems='stretch'>
            {contactData.map((contact, index) => (
              <Grid item xs={12} sm={3} key={index} style={{ margin: 'auto' }}>
                <SlideInCard
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)'
                    },
                    flexGrow: 1 // Add this line
                  }}
                  delay={index * 0.5}
                >
                  <CardMedia
                    component='img'
                    sx={{ width: 300, height: 250, objectFit: 'cover' }}
                    image={contact.image}
                    alt={`Contact ${index}`}
                  />
                  <CardContent
                    sx={{
                      flex: '1',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      paddingLeft: '1em'
                    }}
                  >
                    <Typography
                      variant='h6'
                      component='h2'
                      gutterBottom
                      sx={{
                        fontSize: '1.1rem' // ปรับขนาดตัวอักษรให้เหมาะสมกับ h6
                      }}
                    >
                      {contact.firstname} {contact.lastname} {/* Assuming your contact data contains a name field */}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      <FacebookIcon /> : {contact.facebook} {/* Assuming your contact data contains a phone field */}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      <InstagramIcon /> : {contact.instagram} {/* Assuming your contact data contains a phone field */}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      <LocalPhoneIcon /> : {contact.phone} {/* Assuming your contact data contains a phone field */}
                    </Typography>
                  </CardContent>
                </SlideInCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default ContactSection
