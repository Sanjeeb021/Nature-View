import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,useDisclosure, VStack, HStack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {

  const { isOpen ,onOpen ,onClose} =useDisclosure();

  

  return (
  <>
  <Button pos={'fixed'} top={'4'} left={'4'} colorScheme={'yellow'} p={'0'} h={'10'} w={'10'} borderRadius={'full'} zIndex={'overlay'}
  onClick={onOpen} >
    
    <BiMenuAltLeft  size={'20'}/>
  </Button>

  <Drawer isOpen={isOpen} placement= "left" onClose={onClose}>
  <DrawerOverlay />
  <DrawerContent>
    <DrawerCloseButton />
    <DrawerHeader fontFamily={'sans-serif'}>NATURE VIEW</DrawerHeader>
    <DrawerBody>
      <VStack alignItems={'center'}>
        <Button  onClick={onClose} variant={'ghost'} colorScheme='green' fontFamily={'sans-serif'}>
          <Link to={'/'}>Home</Link>
          
        </Button>
        <Button  onClick={onClose} variant={'ghost'} colorScheme='Blue' fontFamily={'sans-serif'}>
          <Link to={'/Videos'}>Videos</Link>
          
        </Button>
        <Button  onClick={onClose} variant={'ghost'} colorScheme='Blue' fontFamily={'sans-serif'}>
          <Link to={'/Videos?category=free'}>Free Videos</Link>
          
        </Button>
        <Button  onClick={onClose} variant={'ghost'} colorScheme='green' fontFamily={'sans-serif'}>
          <Link to={'/Upload'}>Upload Video</Link>
          
        </Button>
      </VStack>
      <HStack pos={'absolute'} bottom={'6'} left={'4'} justifyContent={'space-evenly'} w={'full'} >
        <Button color colorScheme='yellow' variant={'solid'} borderRadius={'full'} onClick={onClose} textColor={'yellow.100'} >
             <Link to={'/login'}>Log In</Link>
        </Button>
        <Button color colorScheme='purple' variant={'outline'} borderRadius={'full'} onClick={onClose} >
             <Link to={'/signup'}>Sign Up</Link>
        </Button>

      </HStack>
    </DrawerBody> 
 
  </DrawerContent>

  </Drawer>
  </>
  
  );
};

export default Header;