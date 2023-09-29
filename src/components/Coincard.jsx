import React from 'react'
import {CardBody,Card,Heading,CardFooter,CardHeader,Text,Button, Flex,Avatar,Box,IconButton,Image  } from '@chakra-ui/react'
import {BiLike,BiShare} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Coincard = ({name,img,url,price,id}) => {
  return (

    <Link to={`/coin/${id}`}>
    <Card maxW='sm'  css={
        
        {
          "&":{transform:"scale(.9)",}
          
        }
    }>
      <CardHeader>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Segun Adebayo' src={img} />
            <Box>
              <Heading size='sm'>{name}</Heading>
           <Text>Current Price : {price}</Text>
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
          </Link>
  )
}

export default Coincard
