import Card from './Card';
import {HStack} from '../stack';
import {Text} from '../text';

export default {
  title: 'Card',
  component: Card,
};

export function Default() {
  return (
    <Card header={<Text variant="title">Card header</Text>}>
      <HStack align="center">
        <Text variant="subtitle">Card body</Text>
      </HStack>
    </Card>
  );
}

export function NoHeader() {
  return (
    <Card>
      <HStack align="center">
        <Text variant="subtitle">Card body</Text>
      </HStack>
    </Card>
  );
}
