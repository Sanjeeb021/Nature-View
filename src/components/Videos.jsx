import { Heading, Stack, VStack, Text, Button,  } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://player.vimeo.com/progressive_redirect/playback/320725678/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=bde0f80383b8163dd6d6b259f17ce20ae276ae8d64c59b72896cbafded46f8b0',
    'https://player.vimeo.com/external/572853722.sd.mp4?s=05045aab1bb4ff11244000b3ca53e632d6ac949d&profile_id=164',
    'https://player.vimeo.com/external/572853722.sd.mp4?s=05045aab1bb4ff11244000b3ca53e632d6ac949d&profile_id=164',
    'https://player.vimeo.com/progressive_redirect/playback/570766597/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=da849497b25b99f28a6cb808852e461796607c91326b70a4f5e6f27893fcf819',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/external/533374337.hd.mp4?s=4644167a48a464528bf66a52e19eeb95d7bb1df5&profile_id=174',
    'https://player.vimeo.com/external/220312361.sd.mp4?s=861e3e90fccb4221b9baf79fd0b7d56e440f5767&profile_id=164',
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>
        <VStack alignItems={'center'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading fontStyle={'oblique'}>HUMMING BIRD</Heading>
          <Text>
            {' '}
            Hummingbirds are birds native to the Americas and comprise the
            biological family Trochilidae. With about 366 species and 113
            genera, they occur from Alaska to Tierra del Fuego, but most species
            are found in Central and South America. About 28 hummingbird species
            are listed as endangered or critically endangered, with numerous
            species declining in population.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map(( item , index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            borderRadius={'full'}
            top={'8'}
            onClick={() =>setVideoSrc(item)}
          >
            VIDEO {index+1}
          </Button>
        ))}
         {/* <Videos src="https://player.vimeo.com/external/572853722.sd.mp4?s=05045aab1bb4ff11244000b3ca53e632d6ac949d&profile_id=164" text="Butterflies (Rhopalocera) are insects that have large, often brightly coloured wings, and a conspicuous, fluttering flight. The group comprises the superfamilies Hedyloidea (moth-butterflies in the Americas) and Papilionoidea. Butterfly fossils date to the Paleocene, about 56 million years ago." /> */}
      </VStack>
    </Stack>
  );
};

export default Videos;
