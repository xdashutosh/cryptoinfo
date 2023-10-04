import React from 'react'
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { server } from '..//index';
import axios from 'axios';
import {Text,Image , HStack,RadioGroup,Radio, Badge, Stack, Progress, Heading } from '@chakra-ui/react'
import {BiRupee,BiDollar,BiEuro} from 'react-icons/bi';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

import { VStack } from '@chakra-ui/react';
const CoinDetails = () => {
  const [coin,setcoin] = useState([]);
  const [error,seterror] = useState(false);
  const [currency,setcurrency] =useState('inr');

const params= useParams();
  useEffect( () => {  
    const fetchcoin = async () => {  
      try {
        const {data} = await axios.get(`${server}/coins/${params.id}`);  
        console.log(data);
        console.log(params.id);
        setcoin(data);
     console.log(coin);
      
      } catch (error) {
        console.log(error);
        seterror(true);
      }
   
    }
    fetchcoin(); 
    }, [params.id]);
  
 

  return (
  <VStack w={'full'} border={'2px solid'} h={'100%'} p={'8'}>
       <RadioGroup  w={'-webkit-fit-content'} mt={'2'} ml={'4'} value={currency} colorScheme='green'>
  <HStack spacing={'4'}>
    <Radio value='inr' onClick={()=>setcurrency('inr')}><BiRupee/></Radio>
    <Radio value='eur' onClick={()=>setcurrency('eur')}><BiDollar/></Radio>
    <Radio value='usd'onClick={()=>setcurrency('usd')}><BiEuro/></Radio>
  </HStack>
</RadioGroup>
<Text fontSize={'small'} mt={'2'}   >last updated on {coin.last_updated}</Text>
<HStack  spacing={['2','8']} mt={'4'} w={['80vw','-webkit-fit-content']} >
<Image src={coin.image?.large} w={'20'} h={'20'}/>
<StatGroup>
  <Stat>
    <StatLabel><b>
    {coin.name}
      </b>
     </StatLabel>
    <StatNumber>{coin.market_data?.current_price[currency]}</StatNumber>
    <StatHelpText>
    <StatArrow type={coin.market_data?.price_change_percentage_24h > 0 ? "increase":"decrease"} />
      {coin.market_data?.price_change_percentage_24h}%
    </StatHelpText>
  </Stat>
<Badge bg={'blackAlpha.900'} color={'white'} h={'8'} w={'-webkit-fit-content'} fontSize={'larger'} m={'4'}>#{coin.market_cap_rank}</Badge>
</StatGroup>
</HStack>


<VStack w={'full'}>
<Text>Today's Growth</Text>
<Progress colorScheme='green' size='md' value={(coin.market_data?.high_24h[currency])*10/(coin.market_data?.low_24h[currency])}  w={'full'}/>
<HStack w={'full'} justifyContent={'space-between'}>
<Badge children={coin.market_data?.low_24h[currency]} fontSize={['.8em','1.5em']} colorScheme='green' />
<Badge children={'24H'} fontSize={['1em','2em']} bg={'none'} />
<Badge children={coin.market_data?.high_24h[currency]}  fontSize={['.8em','1.5em']} colorScheme='green' />
</HStack>
</VStack>

<HStack w={'full'} spacing={'8'} mt={'16'} justifyContent={'center'}>
  <VStack spacing={'8'}>
   <Heading fontSize={['md','xl']} fontFamily={'Bebas Neue'} letterSpacing={'widest '}>All Time High price:</Heading>
   <Heading fontSize={['md','xl']} fontFamily={'Bebas Neue'} letterSpacing={'widest '}>All Time low price:</Heading>
   <Heading fontSize={['md','xl']} fontFamily={'Bebas Neue'} letterSpacing={'widest '}>market capacity:</Heading>
  </VStack>
  <VStack spacing={'8'}>
   <Heading fontSize={['md','xl']}>{coin.market_data?.ath[currency]}</Heading>
   <Heading fontSize={['md','xl']}>{coin.market_data?.atl[currency]}</Heading>
   <Heading fontSize={['md','xl']}>{coin.market_data?.market_cap[currency]}</Heading>
  </VStack>
</HStack>

  </VStack>
  )
}



export default CoinDetails
