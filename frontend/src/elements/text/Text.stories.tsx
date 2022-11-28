import Text from "./Text";

export default {
  title: "Text",
  component: Text,
};

export function Title() {
  return <Text variant="title">Lorem ipsum dolor sit amet</Text>;
}

export function Subtitle() {
  return <Text variant="subtitle">Lorem ipsum dolor sit amet</Text>;
}

export function Body() {
  return <Text variant="body">Lorem ipsum dolor sit amet</Text>;
}
