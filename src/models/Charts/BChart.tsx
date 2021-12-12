import { FC, Fragment, useEffect, useState } from "react";
import { Col, Grid, Table, Tabs, Text, useMantineTheme } from "@mantine/core";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Prism } from "@mantine/prism";
import InvalidInput from "../../components/Errors/InvalidInput";
import ChartsInput from "./ChartsInput";

type Data = object[];
interface Values {
  data: object[] | null;
  error: string | null;
}

const initialData: Data = [
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

const BChart: FC = () => {
  const theme = useMantineTheme();
  const [values, setValues] = useState<Values>({ data: initialData, error: null });
  const [mappedDataKeys, setMappedDataKeys] = useState<any[]>([]);

  const getInputValue = (data: object[] | null, error: null | string): void => {
    if (error && !data) setValues({ data, error });
    else setValues({ data, error });
  };

  useEffect(() => {
    // console.log(values);
    if (values.data) {
      let length = Object.keys(values.data[0]).length;
      const tempMap: any[] = [];

      for (let key in values.data[0]) {
        if (key !== "name") {
          tempMap.push(<Bar dataKey={key} fill={theme.colors.blue[length]} />);
          length--;
        }
      }
      setMappedDataKeys(tempMap);
    }
  }, [theme.colors.blue, values.data]);

  return (
    <Fragment>
      <Grid sx={{ height: "100%" }}>
        <Col span={8} sx={{ position: "relative" }}>
          {values.error && <InvalidInput errorMessage={values.error} />}
          {!values.error && (
            <ResponsiveContainer width="100%" height="100%" maxHeight={450}>
              <BarChart
                data={values.data ? values.data : undefined}
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
              <ChartsInput callback={getInputValue} />
            </Tabs.Tab>
          </Tabs>
        </Col>
      </Grid>
    </Fragment>
  );
};

export default BChart;
