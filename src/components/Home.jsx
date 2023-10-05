import { Box, Stack, VStack,Text, Heading, HStack, Input, Button ,Image} from '@chakra-ui/react'
import {BiLogoFacebook,BiLogoInstagram,BiLogoTwitter,BiLogoLinkedin,BiLogoWhatsapp,BiLogoReddit,BiSolidSend} from 'react-icons/bi';
import React from 'react'
import mainimg from '../assests/logo192.png'

const Home = () => {
  return (
    <Stack w={'full'} h={'100%'}>

<Box w={'full'} h={'80vh'} bg={'blackAlpha.800'}  >
  <Stack alignItems={'center'} justifyContent={'center'} h={'full'} >
<Image src={mainimg} w={['60vw','25vw']}  animation h={['60vw','25vw']} borderRadius={'full'}  style={{
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
  @keyframes glow {
    0% {
      box-shadow:0 0 5px rgba(255,255,255,0.7)
    }
    100%{
      box-shadow:0 0 20px rgba(255,255,255,0.9)
      
      
    }
  }

  `
  }
</style>
<Heading textColor={'white'} letterSpacing={'wider'}>Crypto Info</Heading>
  </Stack>
</Box>
<Stack w={'full'}  alignItems={'stretch'} justifyContent={'space-evenly'} spacing={['8','16']} direction={['column','row']}>
<VStack>
  <VStack>
    <HStack  spacing={'4'}>
      <Heading>CRYPTO.info</Heading>
  <Text fontSize={'l'} fontWeight={'bold'} letterSpacing={'wider'}>Social Links</Text>
    </HStack>
  <HStack  spacing={'4'}>
 <a href='https://facebook.com' >
   <BiLogoFacebook color='green'/>
  </a>
  <BiLogoInstagram color='green'/>
  <BiLogoLinkedin color='green'/>
  <BiLogoReddit color='green'/>
  <BiLogoWhatsapp color='green'/>
  <BiLogoTwitter color='green'/>
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
