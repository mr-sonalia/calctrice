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
        width: "100%",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      Enter some values to see the result!
    </Text>
  );
};

export default Unsubmitted;
