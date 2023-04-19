import React from 'react';
import { Box, Button, HStack, Heading, Input, Stack, VStack,Text, Icon ,Link } from '@chakra-ui/react';

import {AiOutlineSend} from 'react-icons/ai';
import { FaInstagram , FaTwitter, FaGithub , FaLinkedin } from 'react-icons/fa';


const Footer = () => {
 return(
    <Box bgColor={'blackAlpha.900'} minH={'20'} p={'1'} color={'white'}>
        <Stack direction={['column', 'row']} >
            <VStack alignItems={'stretch'} w={"full"} px={'4'}>
                <Heading size="md" textTransform={'uppercase'} >
                    SUBSCRIBE TO MY CHANNEL

                </Heading>
                <HStack
                borderBottom={'2px solid white'} py="2">
                  <Input
                  placeholder="Enter The Email Here..."
                  border={'none'}
                  borderRadius={"none"}
                  outline={'none'}
                  focusBorderColor= {"none"} />
                  <Button
                  p={0}
                  colorScheme={'yellow'}
                  variant={'ghost'}
                  borderRadius={'0 20px 20px 0'}
                  >
                      <AiOutlineSend size={20}/>
                  </Button> 
                </HStack>
            </VStack>
            <VStack w={'full'}
            borderLeft={['none','1px solid white']}
            borderRight={['none','1px solid white']}
            >
            <Heading textTransform={'uppercase'} textAlign={'center'} fontStyle={'italic'}>
              NATURE VIEW  
            </Heading>
            <Text>All rights recieved</Text>
            </VStack>
            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <HStack>
                <Button>
                 <Link href="https://www.instagram.com/_.sanjeeb._21/" isExternal>
                 <Icon as={FaInstagram} color={'red.600'} boxSize={{ md :8}}/>
                 </Link>
               </Button>
               <Button>
                 <Link href="https://twitter.com/SethySanjeeb" isExternal>
                 <Icon as={FaTwitter} color={'blue.600'} boxSize={{ md :8}}/>
                 </Link>
               </Button>
               <Button>
                 <Link href="https://github.com/Sanjeeb021" isExternal>
                 <Icon as={FaGithub} color={'black'} boxSize={{ md :8}}/>
                 </Link>
               </Button>
               <Button>
                 <Link href="https://www.instagram.com/_.sanjeeb._21/" isExternal>
                 <Icon as={FaLinkedin} color={'blue.600'} boxSize={{ md :8}}/>
                 </Link>
               </Button>
               
            </HStack>  
            </VStack>
        </Stack>
    </Box>
  );
};

export default Footer;