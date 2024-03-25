import { Grid } from '@mui/material'
import Cardimg from './img'
import CardText from './text'

const Hero = () => {
  return (
    <Grid container spacing={2} sx={{pt:40}}>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <CardText />
      </Grid>
      <Grid item xs={4}>
        <Cardimg />
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}

export default Hero
