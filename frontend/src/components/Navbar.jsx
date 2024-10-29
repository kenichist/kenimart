import { Button, Center, Container, Flex, HStack, useColorMode } from '@chakra-ui/react'
import { px } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
  <Container maxW={"2140px"} px={4} >
      <Flex 
      height={16}
      alignContent={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        sm: "row"
      }}
      >
        <Text
          bg='#979797'
          bgClip='text'
          alignContent={"center"}
          fontSize={{ base: "22", sm:"28"}}
          textTransform={'uppercase'}
          fontWeight='extrabold'
        >
         <Link to={"/"}>KeniMart 🛒</Link> 
        </Text>

      <HStack spacing={2} alignItems={"center"}>
        <Link to={"/create"}>
          <Button>
            <PlusSquareIcon fontSize={20} />
          </Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <IoMoon size="20" />: <LuSun size="20" />}
        </Button>
      </HStack>
      </Flex> 
    </Container>
  )
};

export default Navbar
