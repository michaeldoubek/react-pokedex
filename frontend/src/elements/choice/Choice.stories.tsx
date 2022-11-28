import { useState } from "react";
import { Choice } from "./index";

export default {
  title: "Choice",
  component: Choice,
};

const defaultOptions = [
  {
    value: "green",
    label: "Green",
  },
  {
    value: "purple",
    label: "Purple",
  },
  {
    value: "red",
    label: "Red",
  },
];

export function Default() {
  const [value, setValue] = useState<string | null>(null);

  return <Choice value={value} onChange={setValue} options={defaultOptions} />;
}

const numericOptions = [
  {
    value: 1,
    label: "Green",
  },
  {
    value: 2,
    label: "Purple",
  },
  {
    value: 3,
    label: "Red",
  },
];
export function NumericValue() {
  const [value, setValue] = useState<number | null>(null);

  return <Choice value={value} onChange={setValue} options={numericOptions} />;
}
