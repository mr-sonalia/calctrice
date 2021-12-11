import { FC, FormEvent, Fragment, useEffect, useRef, useState } from "react";
import { Button, Col, Grid, Table, Tabs, Text, Textarea, useMantineTheme } from "@mantine/core";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Prism } from "@mantine/prism";
import InvalidInput from "../../components/Errors/InvalidInput";

type Data = object[];

const data: Data = [
  {
    name: "John Doe",
    income: 1000,
    expenditure: 877,
  },
  {
    name: "Max Miller",
    income: -1200,
    expenditure: 800,
  },
];
const sampleInput: string = `{
  "name": "John Doe", 
  "income": 1000,
  "expenditure": 877
},
{
  "name": "Max Miller", 
  "income": -1200,
  "expenditure": 800
}
`;

type Values = object[];

const BChart: FC = () => {
  const theme = useMantineTheme();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [values, setValues] = useState<Values>(data);
  const [error, setError] = useState<string | null>(null);
  const [mappedDataKeys, setMappedDataKeys] = useState<any[]>([]);

  const getInputValue = (event: FormEvent): void => {
    event.preventDefault();
    try {
      const parsedData = JSON.parse(`[${inputRef.current!.value}]`);
      setValues(parsedData);
      setError(null);
    } catch (err) {
      setError("Oops! Seems like input value is incorrect :(");
    }
  };

  useEffect(() => {
    console.log(values);
    let length = Object.keys(values[0]).length;
    const tempMap: any[] = [];

    for (let key in values[0]) {
      if (key !== "name") {
        tempMap.push(<Bar dataKey={key} fill={theme.colors.blue[length]} />);
        length--;
      }
    }
    setMappedDataKeys(tempMap);
  }, [values]);

  return (
    <Fragment>
      <Grid sx={{ height: "100%" }}>
        <Col span={8} sx={{ position: "relative" }}>
          {error && <InvalidInput errorMessage={error} />}
          {!error && (
            <ResponsiveContainer width="100%" height="100%" maxHeight={450}>
              <BarChart
                data={values}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend style={{ marginTop: "20px" }} />
                {mappedDataKeys}
                {/* <Bar dataKey="income" fill={theme.colors.blue[6]} /> */}
                {/* <Bar dataKey="expenditure" fill={theme.colors.blue[7]} /> */}
              </BarChart>
            </ResponsiveContainer>
          )}
        </Col>
        <Col span={4}>
          <Tabs tabPadding="md" grow>
            <Tabs.Tab label="How to use">
              <Text size="lg" weight={600} className="feature__instruction">
                Input Format
              </Text>
              <Prism language="javascript" copyLabel="Copy Sample">
                {sampleInput}
              </Prism>
              <Table striped>
                <thead>
                  <tr>
                    <th rowSpan={2}>Prop</th>
                    <th rowSpan={2}>Value</th>
                    <th rowSpan={2}>Required ?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>"name"</td>
                    <td>"John Doe"</td>
                    <td>true</td>
                  </tr>
                  <tr>
                    <td>"field"</td>
                    <td>Number</td>
                    <td>Atleast 1</td>
                  </tr>
                </tbody>
              </Table>
            </Tabs.Tab>
            <Tabs.Tab label="Chart Data Input">
              <form className="barchart__form" style={{ display: "grid", gap: "20px" }} onSubmit={getInputValue}>
                <Textarea
                  description="Make sure to check: How to use"
                  autosize
                  minRows={13}
                  maxRows={13}
                  ref={inputRef}
                />
                <Button type="submit" variant="light">
                  Get Data
                </Button>
              </form>
            </Tabs.Tab>
          </Tabs>
        </Col>
      </Grid>
    </Fragment>
  );
};

export default BChart;
