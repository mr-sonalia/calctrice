import { Container } from "@mantine/core";
import { FC } from "react";
import classes from "./FeatureWrapper.module.scss";

interface Props {
  title: string;
}

const FeatureWrapper: FC<Props> = ({ title, children }) => {
  return (
    <Container size="lg">
      <h2 className={`${classes.feature__headline}`}>{title}</h2>
      <main className={classes.feature__body}>{children}</main>
    </Container>
  );
};

export default FeatureWrapper;
