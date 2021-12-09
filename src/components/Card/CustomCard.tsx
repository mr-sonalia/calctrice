import { FC } from "react";
import { Card, Text, Badge, Button, Group, useMantineTheme } from "@mantine/core";
import ChevronRight from "../Icons/ChevronRight";

interface Props {
  usage: string;
  title: string;
}

// interface UsageColorMap {
//   Basic: string;
//   Intermediate: string;
// }

const CustomCard: FC<Props> = ({ usage, title }) => {
  const usageColorMap: any = {
    Basic: "green",
    Intermediate: "orange",
  };

  const theme = useMantineTheme();

  return (
    <div>
      <Card shadow="md" padding="sm">
        <Group
          position="left"
          direction="column"
          spacing="xs"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm, gap: "4px" }}
        >
          <Text weight={500}>{title}</Text>
          <Badge color={usageColorMap[usage]} variant="light">
            {usage}
          </Badge>
        </Group>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Check Now <ChevronRight color="#228be6" />
        </Button>
      </Card>
    </div>
  );
};

export default CustomCard;
