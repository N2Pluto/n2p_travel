import React, { useState, useEffect } from 'react';
import { Grid, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const ContactSection: React.FC = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch('/api/Contact/Read/fetchCT');
        if (!response.ok) {
          throw new Error('Failed to fetch contact data');
        }
        const data = await response.json();
        setContactData(data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContactData();
  }, []);

  return (
    <>
      <div className='bg-main flex flex-col justify-center items-center py-24 select-none cursor-pointer relative'>
        <Container>

          <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
            {contactData.map((contact, index) => (
              <Grid item xs={8} key={index} style={{ margin: 'auto' }}>
                <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 200, height: 200, objectFit: 'cover' }} // Set photo size to 500x500 pixels
                    image={contact.image} // Assuming your contact data contains an imageUrl field
                    alt={`Contact ${index}`}
                  />
                  <CardContent sx={{ flex: '1' }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {contact.firstname} : {contact.lastname} {/* Assuming your contact data contains a name field */}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    <FacebookIcon /> : {contact.facebook} {/* Assuming your contact data contains a phone field */}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    <InstagramIcon /> : {contact.instagram} {/* Assuming your contact data contains a phone field */}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    <LocalPhoneIcon /> : {contact.phone} {/* Assuming your contact data contains a phone field */}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ContactSection;
