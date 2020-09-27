import { Flex, Link, PseudoBox, Stack, useColorMode } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import UserMenu from './UserMenu';

const Nav: React.FC = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'cyan.800', dark: 'gray.600' };
  const textColor = { light: 'black', dark: 'gray.100' };
  const router = useRouter();
  return (
    <Flex
      w="100vw"
      bg={bgColor[colorMode]}
      align="center"
      color={textColor[colorMode]}
      justify="center"
      fontSize={['md', 'lg', 'xl', 'xl']}
      h="7vh"
      boxShadow="md"
      p={2}
    >
      <Flex w={['100vw', '100vw', '80vw', '80vw']} justify="space-between">
        <Stack
          spacing={8}
          color={textColor[colorMode]}
          justify="center"
          align="center"
          isInline
        >
          <PseudoBox
            position="relative"
            opacity={router.pathname !== '/' ? 0.4 : 1}
          >
            <Link href="/" color="white">
              <a>Home</a>
            </Link>
          </PseudoBox>
        </Stack>
        <UserMenu></UserMenu>
      </Flex>
    </Flex>
  );
};

export default Nav;
