import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import {Button, HStack, Radio, RadioGroup, Stack} from '@chakra-ui/react'
import {BiRupee,BiDollar,BiEuro,BiRightArrow} from 'react-icons/bi';

import Errorcomp from './Errorcomp'
import Coincard from './Coincard'

const Coins = () => {

  const [coins,setcoins] = useState([]);
  const [error,seterror] = useState(false);
  const [page,setpage] =useState(1);
  const [currency,setcurrency] =useState('inr');
  const btns = new Array(132).fill(1);

  useEffect( () => {  
  const fetchcoins = async () => {  
    try {
      const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);  
      console.log(data);
      setcoins(data);
    } catch (error) {
      console.log(error);
      seterror(true);
    }
 
  }
  fetchcoins(); 
  }, [currency,page]);

if(error) return <Errorcomp/>;
  return ( <>

<RadioGroup  w={'-webkit-fit-content'} mt={'2'} ml={'4'} value={currency}>
  <HStack spacing={'4'}>
    <Radio value='inr' onClick={()=>setcurrency('inr')}><BiRupee/></Radio>
    <Radio value='eur' onClick={()=>setcurrency('eur')}><BiDollar/></Radio>
    <Radio value='usd'onClick={()=>setcurrency('usd')}><BiEuro/></Radio>
  </HStack>
</RadioGroup>
    <HStack w={'50% '}  mt={'5'}  overflowX={'auto'}  ml={['2','4']} >
    <style>
          {`
            ::-webkit-scrollbar {
              width: 8px;
              height:4px;
            }
            
            ::-webkit-scrollbar-thumb {
              background: #4a90e2; // Color of the scrollbar thumb
              border-radius: 4px; // Adjust the thumb's border radius
            }
          `}
        </style>
      {btns.map((eachbtn,i)=>(
        <Button p={'2'} color={'white'} bgColor={'blackAlpha.900'} onClick={()=>setpage(i+1)}>{i+1}</Button>
        ))}
     
    </HStack>
        <HStack ml={'2'}><p>Scroll Pages</p><BiRightArrow/></HStack>
    <Stack direction={'row'} wrap={'wrap'} alignItems={'center'} justifyContent={'center'} >

{
  coins.map((i)=>(
    <Coincard name={i.name} img={i.image} url ={i.url} price ={i.current_price} id={i.id}/>
    ))
}


  </Stack>
    </>
  )
}



export default Coins
