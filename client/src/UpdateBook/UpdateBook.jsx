import { ThreeDots } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Heading } from "rebass/styled-components";
import { useFetchBook } from "../hooks/useFetchBook";
import { useUpdateBook } from "../hooks/useUpdateBook";
import { BookForm, Container } from "../shared";

export const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading, isError } = useFetchBook(id);
  const { mutateAsync, isLoading: isMutating } = useUpdateBook();

  const onFormSubmit = async (formData) => {
    await mutateAsync({ ...formData, id });
    navigate("/");
  };

  if (isLoading) {
    return (
      <Container>
        <Flex data-testid="loader" py="5" justifyContent="center">
          <ThreeDots type="ThreeDots" color="#cccccc" height={30} />
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          Error: {error.message}
        </Flex>
      </Container>
    );
  }

  return (
    <Container>
      <Box
        sx={{
          py: 3,
        }}
      >
        <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
        <BookForm
          defaultValues={data}
          onFormSubmit={onFormSubmit}
          isLoading={isMutating}
        />
      </Box>
    </Container>
  );
};
