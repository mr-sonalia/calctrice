import { FC, useRef } from "react";
import { Container, Tabs } from "@mantine/core";
import models from "./featuresRoutes";

const Features: FC = () => {
  const tabs = models.map((feature) => (
    <Tabs.Tab key={feature.id} label={feature.label}>
      <feature.component />
    </Tabs.Tab>
  ));
  const ref = useRef(null);

  return (
    <Container size="xl" fluid={true} className="pad-t-9">
      <Tabs className="features__tab" tabPadding="xl" orientation="vertical" grow ref={ref}>
        {tabs}
      </Tabs>
    </Container>
  );
};

export default Features;
