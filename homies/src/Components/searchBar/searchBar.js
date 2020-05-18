import React from 'react'
import { Stack, Input, Button, Flex, Select } from '@chakra-ui/core';


function SearchBar(){
        return(
            <Stack pt="20vh" pl="5px">
          <Flex spacing={0} pl="3vw">
          <Select  name='term' size="lg" w="550px" isFullWidth='false' placeholder="Search services">
  <option value="transport">Transport and Moving</option>
  <option value="health">Health and Beauty</option>
  <option value="garden">Garden and Outdoor</option>
  <option value="homehelp">Home Help</option>
  <option value="multimedia">Multimedia</option>
</Select>
  <Input   name='location' placeholder="Where" size="lg" w="550px" isFullWidth='false'/>
  </Flex>
  <Flex justify="center">
  <Button icon="search" bg="navyblue.500" color="whity.100" justify="center" mt='5vh'  w="300px" >
      Search</Button>
      </Flex>
        </Stack>
        )
    
}

export default SearchBar