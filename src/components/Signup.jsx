import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Signup = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'13'}
          >
            <Heading fontStyle={'italic'} >NATURE VIEW</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />
  
            <Input
              placeholder={' First Name'}
              type={'text'}
              required
              focusBorderColor={'purple.500'}
              fontFamily={'cursive'}
            />
            <Input
              placeholder={' Last Name'}
              type={'text'}
              required
              focusBorderColor={'purple.500'}
              fontFamily={'cursive'}
            />
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
              fontFamily={'cursive'}
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'purple.500'}
              fontFamily={'cursive'}
            />
  
            <Button colorScheme={'purple'} type={'submit'} >
              Sign Up
            </Button>
  
            <Text textAlign={'right'}>
              Already Signed Up?{' '}
              <Button variant={'link'} colorScheme={'blue'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;