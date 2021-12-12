import { ChangeEvent, FC, Fragment, useEffect, useState } from "react";
import { Grid, Col, useMantineTheme, Select } from "@mantine/core";
import { AreaChart as AChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import InvalidInput from "../../components/Errors/InvalidInput";
import ChartsInput from "./ChartsInput";
import { CurveType } from "recharts/types/shape/Curve";
import { SelectDataItem } from "@mantine/core/lib/components/Select/types";

type Data = object[];
interface Values {
  data: object[] | null;
  error: string | null;
}

const initialData: Data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const types: SelectDataItem[] = [
  { value: "basis", label: "Basis" },
  { value: "basisClosed", label: "Basis Closed" },
  { value: "basisOpen", label: "Basis Open" },
  { value: "linear", label: "Linear" },
  { value: "linearClosed", label: "Linear Closed" },
  { value: "natural", label: "Natural" },
  { value: "monotoneX", label: "Monotone X" },
  { value: "monotoneY", label: "Monotone Y" },
  { value: "monotone", label: "Monotone" },
  { value: "step", label: "Step" },
  { value: "stepBefore", label: "Step Before" },
  { value: "stepAfter", label: "Step After" },
];

// type CurveType = "monotone"

const AreaChart: FC = () => {
  const theme = useMantineTheme();
  const [type, setType] = useState<CurveType>("monotone");
  const [values, setValues] = useState<Values>({ data: initialData, error: null });
  const [mappedDataKeys, setMappedDataKeys] = useState<any[]>([]);

  useEffect(() => {
    if (!values.error && values.data) {
      let length = Object.keys(values.data[0]).length;
      const tempMap: any[] = [];

      for (let key in values.data[0]) {
        if (key !== "name") {
          tempMap.push(
            <Area
              type={type}
              dataKey={key}
              stackId="1"
              stroke={theme.colors.blue[length]}
              fill={theme.colors.blue[length - 1]}
            />
          );
          length--;
        }
      }
      setMappedDataKeys(tempMap);
    }
  }, [theme.colors.blue, values, type]);

  return (
    <Fragment>
      <Grid>
        <Col span={8} sx={{ position: "relative" }}>
          <Grid className="area-type-selector">
            <Col span={8}></Col>
            <Col span={4}>
              <Select
                label="Area Type"
                placeholder="Pick one"
                value={type.toString()}
                onChange={(value: any) => setType(value)}
                data={types}
                className="mar-r-3"
              />
            </Col>
          </Grid>
          {values.error && <InvalidInput errorMessage={values.error} />}
          {!values.error && (
            <ResponsiveContainer width="100%" height="100%" maxHeight={390}>
              <AChart
                data={values.data ? values.data : initialData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {mappedDataKeys}
              </AChart>
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

export default AreaChart;
