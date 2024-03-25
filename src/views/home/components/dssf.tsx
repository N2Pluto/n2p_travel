import { CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const MuiCarousel: React.FC = () => {
    const [tourism, setTourism] = useState([])

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('/api/Tourism/read/fetchTourism')
          const data = await response.json()
          setTourism(data)
        }
        fetchData()
      }, [])

      const images = tourism.map((item) => item.imgCover);

  return (
    <Carousel
      sx={{ '& .MuiButtonBase-root': { outline: 'none' } }}
      animation="slide"
      autoPlay={true}
      interval={3000}
      indicators={true}
      navButtonsAlwaysVisible={true}
    >
      {images.map((image, index) => (
        <CardMedia key={index} sx={{ height: '25.5625rem' }} image={image}></CardMedia>
      ))}
    </Carousel>
  );
};

export default MuiCarousel;