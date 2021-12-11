import { Tabs } from "@mantine/core";
import { FC } from "react";
import FeatureWrapper from "../../components/Wrapper/FeatureWrapper";
import BChart from "./BChart";

const Charts: FC = () => {
  return (
    <FeatureWrapper title="Charts">
      <Tabs tabPadding="md" grow>
        <Tabs.Tab label="Area Chart">Area Chart</Tabs.Tab>
        <Tabs.Tab label="Bar Chart">
          <BChart />
        </Tabs.Tab>
        <Tabs.Tab label="Pie Chart">Pie Chart</Tabs.Tab>
        <Tabs.Tab label="Radar Chart">Radar Chart</Tabs.Tab>
        <Tabs.Tab label="Radial Bar Chart">Radial Bar Chart</Tabs.Tab>
        <Tabs.Tab label="Scatter Chart">Scatter Chart</Tabs.Tab>
        {/* <Tabs.Tab label="Gallery">Area Chart</Tabs.Tab> */}
      </Tabs>
    </FeatureWrapper>
  );
};

export default Charts;
