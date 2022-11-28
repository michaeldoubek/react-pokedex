import {Text} from '../text';
import {ReactNode} from 'react';
import {isNilOrEmpty} from 'ramda-adjunct';
import {Show} from '../show';
import {css} from '@emotion/css';
import {Icon} from '../icon';
import {Box} from '../box';
import {HStack, VStack} from '../stack';

type StateProps<Data> = {
  isLoading?: boolean;
  error?: string;
  isEmpty?: boolean;
  emptyMessage?: string;
  data?: Data | null;
  children: (data: Data) => ReactNode;
};

function State<Data>(props: StateProps<Data>) {
  if (props.error) return <Error error={props.error} />;
  if (props.isLoading === true) return <Loading />;
  if (props.isEmpty === true || isNilOrEmpty(props.data))
    return <Empty message={props.emptyMessage} />;

  return <>{props.children(props.data as Data)}</>;
}

const Loading = () => (
  <CenteredContainer>
    <Spinner />
    <Text variant="subtitle">Loading</Text>
  </CenteredContainer>
);
const Error = (props: {error: string}) => (
  <CenteredContainer>
    <Text variant="subtitle">Error</Text>
    <Text variant="body">{props.error}</Text>
  </CenteredContainer>
);
const Empty = (props: {message?: string}) => (
  <CenteredContainer>
    <Text variant="subtitle">No data</Text>
    <Show when={props?.message !== undefined}>
      <Text variant="body">{props.message as string}</Text>
    </Show>
  </CenteredContainer>
);

const Spinner = () => (
  <div
    className={css`
      animation-name: spin;
      animation-duration: 1000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}
  >
    <Icon icon="spinner" color="green" size={8} />
  </div>
);

const CenteredContainer = (props: {children: ReactNode}) => (
  <Box height="100vh">
    <VStack justify="center">
      <HStack justify="center">
        <VStack align="center">{props.children}</VStack>
      </HStack>
    </VStack>
  </Box>
);

export default State;
