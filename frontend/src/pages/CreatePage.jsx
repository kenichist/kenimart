import { Box, Heading, Container, useColorModeValue, VStack, Button , Input, useToast} from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [NewProduct, setNewProduct] = useState ({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast()

  const {createProduct} = useProductStore()

  const handleAddProduct = async () => {
    const {success,message}= await createProduct(NewProduct)
    if(!success) {
      toast({
        title:"Error",
        description: message,
        status:"error",
        isClosable: true
      });
    } else {
      toast({
        title:"Success",
        description: message,
        status:"success",
        isClosable: true
      });
    }
    setNewProduct({ name: "", price: "", image: ""});
  }


  return <Container maxW={"container.sm"}>
    <VStack
    spacing={8}
    >
      <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8} > 
        Create new Product
      </Heading>

      <Box
        w={"full"} bg={useColorModeValue("white","gray.800")}  
          p={6} rounded={"lg"} shadow={"md"}
      >
        <VStack spacing={4}>
        <Input
          placeholder ='Product Name'
          name = 'name'
          value = {NewProduct.name}
          onChange = {(e) => setNewProduct({ ...NewProduct, name: e.target.value })}
        />

        <Input
          placeholder ='Price'
          name = 'name'
          value = {NewProduct.price}
          onChange = {(e) => setNewProduct({ ...NewProduct, price: e.target.value })}
        />

        <Input
          placeholder ='Image URL'
          name = 'name'
          value = {NewProduct.image}
          onChange = {(e) => setNewProduct({ ...NewProduct, image: e.target.value })}
        />

      <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
        Add Product
      </Button>

        </VStack>
      </Box>

    </VStack>
  </Container>
};

export default CreatePage
