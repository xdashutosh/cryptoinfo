import { Box, Stack, VStack,Text, Heading, HStack, Input, Button ,Image} from '@chakra-ui/react'
import {BiLogoFacebook,BiLogoInstagram,BiLogoTwitter,BiLogoLinkedin,BiLogoWhatsapp,BiLogoReddit,BiSolidSend} from 'react-icons/bi';
import React from 'react'
import mainimg from '../assests/btc.png'

const Home = () => {
  return (
    <Stack w={'full'} h={'100%'}>

<Box w={'full'} h={'80vh'} bg={'blackAlpha.800'}  >
  <Stack alignItems={'center'} justifyContent={'center'} h={'full'} >
<Image src={mainimg} w={'full'}  animation h={'full'} objectFit={'contain'}    style={{
  animation: "updown 4s infinite , glow 1s infinite alternate",

}}/>
<style>
  {
  `
  @keyframes updown {
    0%,100% {
       transform: translateY(0)
      
    }
    50%{
       transform: translateY(-30px)
      
      
    }
  }

  }

  `
  }
</style>
<Heading textColor={'white'} letterSpacing={'wider'} mt={'-20'}>Crypto Info</Heading>
  </Stack>
</Box>
<Stack w={'full'}  alignItems={'stretch'} justifyContent={'space-evenly'} spacing={['8','16']} direction={['column','row']}>
<VStack>
  <VStack>
    <HStack  spacing={'4'}>
      <Heading>ℂℝ𝕐ℙ𝕋𝕆.𝕚𝕟𝕗𝕠</Heading>
  <Text fontSize={'l'} fontWeight={'bold'} letterSpacing={'wider'}>Social Links</Text>
    </HStack>
  <HStack  spacing={'4'}>
 <a href='https://facebook.com' >
   <BiLogoFacebook color='green' size={'25'}/>
  </a>
  <BiLogoInstagram color='green' size={'25'}/>
  <BiLogoLinkedin color='green' size={'25'}/>
  <BiLogoReddit color='green' size={'25'}/>
  <BiLogoWhatsapp color='green' size={'25'}/>
  <BiLogoTwitter color='green' size={'25'}/>
  </HStack>
  </VStack>
</VStack>
<VStack>
<HStack mb={'4'}>
<Input border={'none'} borderBottom={'2px solid'} borderRadius={'none'} focusBorderColor={'white'} placeholder='Email us' />
<Button borderRightRadius={'full'} ><BiSolidSend size={'full'} color='green'/></Button>
</HStack>
<Text mb={'4'}>@rights reserved <b> ASHUTOSH CHAUDHARY </b></Text>
</VStack>
</Stack>
    </Stack>
  )
}

export default Home
