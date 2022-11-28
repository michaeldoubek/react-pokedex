import {ReactNode} from 'react';
import {Helmet} from 'react-helmet';

type PageProps = {
  title: string;
  children: ReactNode;
};

function Page(props: PageProps) {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>

      {props.children}
    </div>
  );
}

export default Page;
