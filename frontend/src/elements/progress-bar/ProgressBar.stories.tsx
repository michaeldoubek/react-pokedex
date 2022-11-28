import { ProgressBar } from "./index";

export default {
  title: "ProgressBar",
  component: ProgressBar,
};

export function Purple() {
  return <ProgressBar color="purple" label="CP" value={800} />;
}

export function Green() {
  return <ProgressBar color="green" label="HP" value={800} />;
}
