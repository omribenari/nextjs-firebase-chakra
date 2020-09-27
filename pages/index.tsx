import React from 'react';
import Head from 'next/head';
import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/core';

const Home: React.FC = () => {
  return (
    <Flex direction="column" justify="space-between" w="100%" h="100%">
      <Flex
        h="100%"
        direction="column"
        align="center"
        justify="center"
        bg="blue"
      >
        <Head>
          <title>com-vote.com</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Stack spacing={3}>
          <Heading as="h1">Welcome to com-vote.com</Heading>
          <Text fontSize="xl">Voting system for communities</Text>
        </Stack>
      </Flex>
      <Flex w="100%" direction="column" align="center" justify="center">
        <Box w="100%">
          <Divider w="100%" />
        </Box>
        <footer>Developed by Omri Ben Ari</footer>
      </Flex>
    </Flex>
  );
};

export default Home;
