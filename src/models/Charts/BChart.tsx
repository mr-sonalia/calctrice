import { FC, Fragment, useEffect, useState } from "react";
import { Col, Grid, useMantineTheme } from "@mantine/core";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
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

const BChart: FC = () => {
  const theme = useMantineTheme();
  const [values, setValues] = useState<Values>({ data: initialData, error: null });
  const [mappedDataKeys, setMappedDataKeys] = useState<any[]>([]);

  useEffect(() => {
    if (values.data && !values.error) {
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
  }, [theme.colors.blue, values]);

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
          <ChartsInput setValues={setValues} />
        </Col>
      </Grid>
    </Fragment>
  );
};

export default BChart;
