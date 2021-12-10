import { FC } from "react";
import { Text } from "@mantine/core";

interface Props {
  errorMessage: string | null;
}

const InvalidInput: FC<Props> = ({ errorMessage }) => {
  return (
    <Text
      size="xl"
      weight={600}
      color="red"
      className="feature__instruction"
      align="center"
      sx={{
        width: "100%",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      {errorMessage}
    </Text>
  );
};

export default InvalidInput;
