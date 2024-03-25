import { Box } from '@mui/material'

const Cardimg = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100%' // You might need to adjust this based on your layout
    >
      <img
        src='https://img2.pic.in.th/pic/hero95c8792aacfe9f54.png'
        alt='Picture of the author'
        width={500}
        height={500}
      />
    </Box>
  )
}

export default Cardimg
