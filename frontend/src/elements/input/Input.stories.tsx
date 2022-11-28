import Input from "./Input";
import { useState } from "react";
import { compose } from "ramda";
import { action } from "@storybook/addon-actions";

export default {
  title: "Input",
  component: Input,
};

export function Default() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Input
      placeholder="Placeholder"
      value={value}
      onChange={compose(action("onChange"), setValue)}
    />
  );
}
