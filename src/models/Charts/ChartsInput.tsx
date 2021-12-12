import { FC, FormEvent, Fragment, useRef } from "react";
import { Table, Tabs, Button, Text, Textarea } from "@mantine/core";
import { Prism } from "@mantine/prism";

interface Props {
  // ref: string;
  callback?: (data: object[] | null, error: null | string) => void;
  setValues: (values: { data: object[] | null; error: null | string }) => void;
}

const sampleInput: string = `{
  "name": "John Doe", 
  "income": 1000,
  "expenditure": 877
},
{
  "name": "Max Miller", 
  "income": 800,
  "expenditure": 700
},
{
  "name": "Jacob Lee", 
  "income": 100,
  "expenditure": 50
},
{
  "name": "Laurel", 
  "income": 2000,
  "expenditure": 1600
}
`;

const ChartsInput: FC<Props> = ({ callback, setValues }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();
    try {
      const value = inputRef.current!.value;

      if (value.length > 0) {
        const data = JSON.parse(`[ ${inputRef.current!.value} ]`);
        setValues({ data, error: null });
        console.log(data);
        return;
      }
      throw new Error("error");
    } catch (error) {
      setValues({ data: null, error: new Error("Oops! Seems like input value(s) is/are incorrect :(").message });
    }
  };

  return (
    <Fragment>
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
          <form className="barchart__form" style={{ display: "grid", gap: "20px" }} onSubmit={submitHandler}>
            <Textarea description="Make sure to check: How to use" autosize minRows={13} maxRows={13} ref={inputRef} />
            <Button type="submit" variant="light">
              Get Data
            </Button>
          </form>
        </Tabs.Tab>
      </Tabs>
    </Fragment>
  );
};

export default ChartsInput;
