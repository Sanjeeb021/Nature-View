import { Button, Container, HStack, Input, VStack, border } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxH={'container.xl'}h={'100vh'}p={'16'}>
        <VStack  color={'blue'} h={'full'} justifyContent={'center'}>
         <AiOutlineCloudUpload size={'10vmax'} />

        <form>
            <HStack>
                <Input required 
                type= {'file'} 
                css= {{
                    '&::file-selector-button':{
                        border:'none',
                        width: 'calc(100% + 36px)',
                        height: '100%',
                        marginLeft: '-10px',
                        color: "blue",
                        backgroundColor : 'white' ,
                        cursor: 'pointer',


                     },
                     }} />
               <Button colorScheme={'blue'} type={'Submit'} borderRadius={'full'}> Upload</Button> 
            </HStack>
        </form> 

        </VStack>
    </Container>

  );
   
    
  
};

export default Upload;