import {ReactNode} from 'react';

type ShowProps = {
  when: boolean;
  children: ReactNode;
};

function Show(props: ShowProps) {
  if (!props.when) return null;

  return <>{props.children}</>;
}

export default Show;
