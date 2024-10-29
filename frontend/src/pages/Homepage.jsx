import React, { useEffect } from 'react'
import { Container, VStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SimpleGrid } from '@chakra-ui/react'
import { useProductStore } from '../store/product.js';
import  ProductCard  from '../components/ProductCard.jsx';

const Homepage = () => {

  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
      <Container maxW='container.x1' py={12}>
        <VStack spacing={8}>
          <Text
            bg='#979797'
            bgClip='text'
            fontSize={{ base: "22", sm:"28"}}
            textAlign={"center"}
            fontWeight='extrabold'
          >
            Current Products
          </Text>

          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3
            }}
            spacing={10}
            w={"full"}
          >  
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>


          {products.length === 0 && (
              <Text fontSize = 'x1' textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
              No products found 😞{" "}
              <Link to={"/create"}>
                <Text as={"span"} color={'blue.500'} _hover={{textDecoration: "underline"}} > 
                  Create a product
                </Text>
              </Link>
            </Text>
          )}


        </VStack>
      </Container>
  )
}

export default Homepage
