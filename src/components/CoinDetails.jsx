import React from 'react'
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { server } from '..//index';
import axios from 'axios';
import {CardBody,Card,Heading,CardFooter,Text,Button,Image ,Stack, Flex, HStack } from '@chakra-ui/react'

import { VStack } from '@chakra-ui/react';
const CoinDetails = () => {
  const [coin,setcoin] = useState([]);
  const [error,seterror] = useState(false);
  const [page,setpage] =useState(1);
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
  <VStack w={'full'} border={'2px solid'} h={'100%'} p={'16'}>
<Text fontSize={'small'}>last updated on {coin.last_updated}</Text>
<HStack >
<Image src={coin.image?.large}/>
</HStack>
  </VStack>
  )
}

export default CoinDetails
