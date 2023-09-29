import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import {CardBody,Stack,Card,Heading,CardFooter,CardHeader,Text,Button, Flex,Avatar,Box,IconButton,Image  } from '@chakra-ui/react'
import {BiLike,BiShare} from 'react-icons/bi'
import Errorcomp from './Errorcomp'

const Exchange = () => {

  const [exchanges,setexchanges] = useState([]);
  const [error,seterror] = useState(false);

  useEffect( () => {
  const fetchexchanges = async () => {  
    try {
      const {data} = await axios.get(`${server}/exchanges`);
      console.log(data);
      setexchanges(data);
    } catch (error) {
      console.log(error);
      seterror(true);
    }
 
  }
  fetchexchanges(); 
  }, []);

if(error) return <Errorcomp/>;
  return ( 
    <Stack direction={'row'} wrap={'wrap'} alignItems={'center'} justifyContent={'center'} >

{
  exchanges.map((i)=>(
   <ExchangeCard name={i.name} img={i.image} url ={i.url} year={i.year_established} country ={i.country} />
  ))
}


  </Stack>
  )
}

const ExchangeCard = ({name,img,url,year,country})=>(
  <Card maxW='sm'  css={
    
    {
      "&":{transform:"scale(.9)",},
      "&:hover":{transform:"scale(1)",}
  }
  }>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src={img} />
        <Box>
          <Heading size='sm'>{name}</Heading>
          <Text>Year Established : {year}</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
    
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
    <b>
      Country :
      </b> 
      {" "}
        {country}
    </Text>
  </CardBody>
  <Image
    objectFit='fill'
    src={img}
    alt='Chakra UI'
    w="100%"
    
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost' leftIcon={<BiLike/>}>
      Like
    </Button>
    <a href={url} target={'_blank'} rel="noreferrer">
    <Button flex='1' variant='ghost' leftIcon={<BiShare />} >
      Register
    </Button>
    </a>
  </CardFooter>
</Card>
)

export default Exchange
