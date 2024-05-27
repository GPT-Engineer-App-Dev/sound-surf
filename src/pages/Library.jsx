import { useEffect, useState } from "react";
import { Box, Container, Flex, Text, VStack, HStack, Link, Image, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaHome, FaMusic, FaBook, FaUser } from "react-icons/fa";

const Library = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const storedPlaylists = JSON.parse(localStorage.getItem("playlists")) || [];
    setPlaylists(storedPlaylists);
  }, []);

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <NavLink to="/" exact>
            <HStack>
              <FaHome />
              <Text>Home</Text>
            </HStack>
          </NavLink>
          <NavLink to="/browse">
            <HStack>
              <FaMusic />
              <Text>Browse</Text>
            </HStack>
          </NavLink>
          <NavLink to="/library">
            <HStack>
              <FaBook />
              <Text>Library</Text>
            </HStack>
          </NavLink>
        </HStack>
        <NavLink to="/profile">
          <HStack>
            <FaUser />
            <Text>Profile</Text>
          </HStack>
        </NavLink>
      </Flex>

      {/* Main Section */}
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8}>
          <Text fontSize="3xl" fontWeight="bold">Your Playlists</Text>
          <Button as={NavLink} to="/create-playlist" colorScheme="blue">Create New Playlist</Button>
          <Flex wrap="wrap" justifyContent="space-around">
            {playlists.map((playlist, index) => (
              <Box key={index} bg="gray.700" color="white" p={4} borderRadius="md" width="200px" textAlign="center">
                <Image src="https://via.placeholder.com/150" alt="Playlist Cover" mb={4} borderRadius="md" />
                <Text>{playlist.name}</Text>
                <Text fontSize="sm">{playlist.description}</Text>
              </Box>
            ))}
          </Flex>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.900" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between">
            <HStack spacing={8}>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/terms">Terms of Service</Link>
            </HStack>
            <Text>&copy; 2023 Music Streaming Service</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Library;