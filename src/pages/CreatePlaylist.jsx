import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreatePlaylist = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlaylist = { name, description, songs: [] };
    const playlists = JSON.parse(localStorage.getItem("playlists")) || [];
    playlists.push(newPlaylist);
    localStorage.setItem("playlists", JSON.stringify(playlists));
    navigate("/library");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Text fontSize="2xl" fontWeight="bold">Create New Playlist</Text>
        <FormControl id="name" isRequired>
          <FormLabel>Playlist Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue">Create Playlist</Button>
      </VStack>
    </Container>
  );
};

export default CreatePlaylist;