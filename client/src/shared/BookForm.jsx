import { Input, Label } from "@rebass/forms/styled-components";
import { useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";
import { Box, Button } from "rebass/styled-components";

export const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" type="text" {...register("title")} />
      </Box>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="author">Author</Label>
        <Input id="author" name="author" type="text" {...register("author")} />
      </Box>
      <Button variant="primary" mr={2} type="submit">
        {isLoading ? (
          <ThreeDots type="ThreeDots" color="#fff" height={10} />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};
