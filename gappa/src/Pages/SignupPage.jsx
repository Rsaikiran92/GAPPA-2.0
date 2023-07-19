import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation here
    if (name === '' || email === '' || password === '') {
      setResponse('Please fill in all fields.');
    } else {
      // Submit form data to server or perform further actions
      setResponse(`Thank you, ${name}! Your signup was successful.`);
    }
  };

  return (
    <Box
      p={4}
      maxW="md"
      mx="auto"
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading as="h1" mb={6} textAlign="center">
        Sign Up
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </FormControl>
        <FormControl id="email" isRequired mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password" isRequired mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          mb={4}
          isFullWidth
          _hover={{ opacity: '0.8' }}
        >
          Sign Up
        </Button>
      </form>
      {response && (
        <Alert
          status={response.includes('successful') ? 'success' : 'error'}
          borderRadius="md"
          mb={4}
        >
          <AlertIcon />
          {response}
        </Alert>
      )}
    </Box>
  );
};

export default SignupPage;

