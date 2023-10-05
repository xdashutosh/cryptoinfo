import React from 'react'
import {Button, HStack, Image, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiAtom } from 'react-icons/bi';
import mainimg from '../assests/btc.png'
const Header = () => {
  return (
 <HStack p={'4'}   shadow={'base'} bg={'blackAlpha.900'} alignItems={'stretch'} >
<HStack spacing={['4','16']} w={'full'}>
<Button variant={'unstyled'} color={'white'}>
  <Link to="/">Home</Link>
</Button>
<Button variant={'unstyled'} color={'white'}>
  <Link to="/exchanges">Exchange </Link>
</Button>
<Button variant={'unstyled'} color={'white'}>
  <Link to="/coins">Coins</Link>
</Button>
</HStack>
<HStack mr={['2','8']}>
 <Text textColor={'white'}>ℂℝ𝕐ℙ𝕋𝕆.𝕚𝕟𝕗𝕠</Text>
</HStack>
  
 </HStack>
  )
}

export default Header
