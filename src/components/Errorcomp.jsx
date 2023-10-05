import React from 'react'
import { Spinner, Stack } from '@chakra-ui/react'

const Errorcomp = () => {
  return (
      <Stack  h={'100vh'} alignItems={'center'} justify={'center'}>
      <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='green.500'
      size={'xl'}
/>
      </Stack>

  )
}

export default Errorcomp
