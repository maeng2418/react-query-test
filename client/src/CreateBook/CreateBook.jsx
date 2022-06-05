import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Box, Heading } from "rebass/styled-components";
import { createBook } from "../api";
import { BookForm, Container } from "../shared";

export const CreateBook = () => {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(createBook);

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data });
    navigate("/");
  };
  return (
    <Container>
      <Box
        sx={{
          py: 3,
        }}
      >
        <Heading sx={{ marginBottom: 3 }}>Create New Book</Heading>
        <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </Box>
    </Container>
  );
};
