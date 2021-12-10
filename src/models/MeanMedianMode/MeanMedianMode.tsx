import { FC, FormEvent, useRef, useState } from "react";
import { Text, Highlight, Grid, Col, Button, TextInput, useMantineTheme, Table } from "@mantine/core";
import { Calculator } from "./MeanMedianModeModel";
import FeatureWrapper from "../../components/Wrapper/FeatureWrapper";
import InvalidInput from "../../components/Errors/InvalidInput";
import Unsubmitted from "../../components/Errors/Unsubmitted";

type Result = {
  mean: string;
  median: string;
  mode: string;
  range: number;
  count: number;
  sortedDataset: string;
  minMax: number[];
};

const MeanMedianMode: FC = () => {
  const theme = useMantineTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [results, setResults] = useState<string | Result>("empty");
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  const inputChangeHandler = () => {
    if (inputRef.current!.value) setSubmitDisabled(false);
    else setSubmitDisabled(true);
  };

  const getResults = (event: FormEvent): void => {
    event.preventDefault();

    const values = inputRef.current!.value;
    const result = new Calculator(values).getBasicResult();

    if (typeof result !== "undefined") {
      setResults(() => result);
    }
  };

  return (
    <FeatureWrapper title="Mean, Median, Mode">
      <Grid>
        <Col span={6} sx={{ borderRight: `1px solid`, borderColor: theme.colors.gray[4], padding: "0px 40px" }}>
          <section className="feature__section mar-b-4">
            <form className="values__form" onSubmit={getResults}>
              {/* <Input placeholder="1, 2, 3, 4, 5, 5, 4" size="md" ref={inputRef} /> */}
              <TextInput
                required
                label="Set of values"
                placeholder="1, 2, 3, 4, 5, 5, 4"
                size="md"
                ref={inputRef}
                onChange={inputChangeHandler}
              />
              <Button variant="light" size="md" type="submit" disabled={submitDisabled}>
                Get Results
              </Button>
            </form>
          </section>
          <section className="feature__section mar-b-4">
            <Text size="lg" weight={600} className="feature__instruction">
              How to use:
            </Text>
            <Text color="green" weight={600} className="mar-t-1">
              Valid Formats
            </Text>
            <ul>
              <li>
                <Highlight highlightColor="gray" highlight="1, 2, 3, 4, 5, 5, 4">
                  &nbsp;&#123; 1, 2, 3, 4, 5, 5, 4 &#125;
                </Highlight>
              </li>
              <li>
                <Highlight highlightColor="gray" highlight="11.4 ,2.6, 23, 44.6, 5.7, -11.93">
                  &nbsp;&#123; 11.4 ,2.6, 23, 44.6, 5.7, -11.93 &#125;
                </Highlight>
              </li>
            </ul>
            <Text color="red" weight={600} className="mar-t-1">
              Invalid Formats
            </Text>
            <ul>
              <li>
                <Highlight highlightColor="gray" highlight=",, 1, 2">
                  &nbsp;&#123;,, 1, 2&#125;
                </Highlight>
              </li>
              <li>
                <Highlight highlightColor="gray" highlight="a,1, cd, c, 22, *, $">
                  &nbsp;&#123; a,1, cd, c, 22, *, $ &#125;
                </Highlight>
              </li>
            </ul>
            <Text size="lg" weight={600} className="feature__instruction mar-t-2">
              Make sure values are comma separated numbers.
            </Text>
          </section>
        </Col>
        <Col span={6} sx={{ position: "relative", padding: "0px 40px" }}>
          <div className="feature__section">
            {results === "empty" && <Unsubmitted />}
            {typeof results !== "object" && results !== "empty" && <InvalidInput errorMessage={results} />}
            {typeof results !== "string" && (
              <Table striped>
                <thead>
                  <tr>
                    <th rowSpan={2}>
                      <Text size="lg" weight={600} className="feature__instruction">
                        Result:
                      </Text>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Text weight={500}>Mean</Text>
                    </td>
                    <td>{results?.mean}</td>
                  </tr>
                  <tr>
                    <td>
                      <Text weight={500}>Median</Text>
                    </td>
                    <td>{results?.median}</td>
                  </tr>
                  <tr>
                    <td>
                      <Text weight={500}>Mode(s)</Text>
                    </td>
                    <td>{results?.mode}</td>
                  </tr>
                  <tr>
                    <td>
                      <Text weight={500}>Count</Text>
                    </td>
                    <td>{results?.count}</td>
                  </tr>
                  <tr>
                    <td>
                      <Text weight={500}>Range</Text>
                    </td>
                    <td>{results?.range}</td>
                  </tr>
                  <tr>
                    <td>
                      <Text weight={500}>[Min, Max]</Text>
                    </td>
                    <td>[{results?.minMax.join(", ")}]</td>
                  </tr>
                  <tr>
                    <td>
                      <Text weight={500}>Sorted Dataset</Text>
                    </td>
                    <td>[{results?.sortedDataset}]</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </div>
        </Col>
      </Grid>
    </FeatureWrapper>
  );
};

export default MeanMedianMode;
