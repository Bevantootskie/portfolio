import { Button, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'

import { useAuth } from '../lib/auth'
export default function Home() {

  const auth = useAuth()



  return (

    <Container>
      <Center flexDirection='column' justifyItems='center'>

        <Heading>Main Content</Heading>

        <div>
          <Text>Current User: {auth.user?.email}</Text>
        </div>
        {(!auth.user) ? <Button backgroundColor={'blue.400'} onClick={(e) => auth.signinWithGithub()}>Signin</Button> : <Button bg={'blueviolet'} onClick={() => auth.signout()}>Sign Out</Button>}

      </Center>
    </Container>
  )
}