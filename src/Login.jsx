import { Box, Image} from '@chakra-ui/react'
import React from 'react'
import InputCompo from './Input'

export default function Login() {
  return (
    <Box className='main' pos={'relative'} w={'100%'} h={'100vh'} alignItems={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'}>
      <Image w={['0',0,0,'200px']} id='mainlogo' src='https://mma.prnewswire.com/media/1560916/Wobot_ai_Logo.jpg?w=200'/>
      <Box className='mainbox' w={['100%','450px','520px']} p={'50px'} shadow={'dark-lg'} h={'-webkit-fit-content'}>
        <Image id='logo' w={'100px'} h={'50px'} m={'auto'} src='https://photos.wellfound.com/startups/i/8433712-0e4962c04003e3d4330b788e4ec2d446-medium_jpg.jpg?buster=1644950069'/>
        <h3 style={{textAlign: "center"}}><b>It's a delight to have you onboard</b></h3>
        <p style={{textAlign: "center"}}>Help us know you better<br/><span style={{marginTop:'80px'}}>(This is how we optimize Wobot as per your business needs)</span></p>
        <InputCompo/>
      </Box>
    </Box>
  )
}