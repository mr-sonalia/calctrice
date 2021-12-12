import { Container } from "@mantine/core";
import { FC } from "react";

interface Props {
  title: string;
}

const FeatureWrapper: FC<Props> = ({ title, children }) => {
  return (
    <Container size="lg">
      <h2 className={`feature__headline`}>{title}</h2>
      <main className={`feature__body`} style={{ padding: "30px 0px" }}>
        {children}
      </main>
    </Container>
  );
};

export default FeatureWrapper;
