import { FC } from "react";
import { Col, Container, Grid } from "@mantine/core";
import CardsContainer from "../components/Card/CardsContainer";

const Home: FC = () => {
  return (
    <Container size="xl" fluid={true} className=" pad-t-10">
      <Grid>
        <Col span={2}></Col>
        <Col span={8}>
          <div className="headline--container">
            <h1 className="headline">
              <span className="headline__colors">C</span>
              <span className="headline__colors">A</span>
              <span className="headline__colors">L</span>
              <span className="headline__colors">C</span>
              <span className="headline__colors">T</span>
              <span className="headline__colors">R</span>
              <span className="headline__colors">I</span>
              <span className="headline__colors">C</span>
              <span className="headline__colors">E</span>
              <span className="pulse-dot">.</span>
            </h1>
            <h3 className="headline__sub">
              Making complex calculations easy,
              <br />
              for You!
            </h3>
          </div>
        </Col>
        <Col span={2}></Col>
      </Grid>
      <Grid>
        <Col span={2}></Col>
        <Col span={8}>
          <CardsContainer />
        </Col>
        <Col span={2}></Col>
      </Grid>
    </Container>
  );
};

export default Home;
