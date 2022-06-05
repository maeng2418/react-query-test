import { ThreeDots } from "react-loader-spinner";
import { useMutation, useQueryClient } from "react-query";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Flex,
  Link as StyledLink,
  Text,
} from "rebass/styled-components";
import { removeBook } from "../api";

export const BookItem = ({ id, title, author }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("books");
  };

  return (
    <Flex key={id} p={3} width="100%" alignItems="center">
      <StyledLink as={RouterLink} to={`/update-book/${id}`} mr="auto">
        {title}
      </StyledLink>
      <Text>{author}</Text>
      <Button onClick={remove} ml="5">
        {isLoading ? (
          <ThreeDots type="ThreeDots" color="#fff" height={10} />
        ) : (
          "Remove"
        )}
      </Button>
    </Flex>
  );
};
