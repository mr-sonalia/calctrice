import { FC } from "react";
import { Text } from "@mantine/core";

const Unsubmitted: FC = () => {
  return (
    <Text
      size="xl"
      weight={600}
      color="gray"
      className="feature__instruction"
      align="center"
      sx={{
        width: "fit-content",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      Enter some values to see the result!
    </Text>
  );
};

export default Unsubmitted;
