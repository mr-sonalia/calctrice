import { FC } from "react";
import CustomCard from "./CustomCard";
import cards from "./cardData";
import { Text, Col, Grid, useMantineTheme } from "@mantine/core";

import classes from "./Card.module.scss";

const CardsContainer: FC = () => {
  const theme = useMantineTheme();

  const mappedCards = cards.map((card) => (
    <Col span={4} key={card.key}>
      <CustomCard {...card} />
    </Col>
  ));

  return (
    <div className={classes["cards__container"]}>
      <Text size="xl" weight={600} className={`mar-b-2`}>
        Our Products
      </Text>
      <Grid grow style={{ background: theme.colors.gray[0], padding: "10px", borderRadius: "4px" }}>
        {mappedCards}
      </Grid>
    </div>
  );
};

export default CardsContainer;
