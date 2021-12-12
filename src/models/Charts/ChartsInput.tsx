import { FC, FormEvent, Fragment, useRef } from "react";
import { Button, Textarea } from "@mantine/core";

interface Props {
  // ref: string;
  callback: (data: object[] | null, error: null | string) => void;
}

const ChartsInput: FC<Props> = ({ callback }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();
    try {
      const data = JSON.parse(`[ ${inputRef.current!.value} ]`);
      callback(data, null);
    } catch (_) {
      callback(null, new Error("Oops! Seems like input value(s) is/are incorrect :(").message);
    } finally {
    }
  };

  return (
    <Fragment>
      <form className="barchart__form" style={{ display: "grid", gap: "20px" }} onSubmit={submitHandler}>
        <Textarea description="Make sure to check: How to use" autosize minRows={13} maxRows={13} ref={inputRef} />
        <Button type="submit" variant="light">
          Get Data
        </Button>
      </form>
    </Fragment>
  );
};

export default ChartsInput;
