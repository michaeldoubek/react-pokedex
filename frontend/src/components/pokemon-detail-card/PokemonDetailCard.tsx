import {
  Box,
  Card,
  HStack,
  IconButton,
  Image,
  ProgressBar,
  Sound,
  Text,
  VStack,
} from '../../elements';
import {join} from 'ramda';

type PokemonDetailCardProps = {
  name: string;
  types: string[];
  imageSource: string;
  soundSource: string;
  isFavorite: boolean;
  onFavorite: () => void;
  onUnFavorite: () => void;
  heightMin: string;
  heightMax: string;
  weightMin: string;
  weightMax: string;
  cp: number;
  hp: number;
};

function PokemonDetailCard(props: PokemonDetailCardProps) {
  return (
    <Box padding={6}>
      <Card
        header={
          <VStack spacing={2}>
            <Box height="50vh">
              <Image
                source={props.imageSource}
                alt={`Image of ${props.name}`}
              />
            </Box>
            <Sound source={props.soundSource} iconSize={6} />
          </VStack>
        }
      >
        <HStack justify="space-between" align="center">
          <div>
            <Text variant="title">{props.name}</Text>
            <Text variant="body">{join(',', props.types)}</Text>
          </div>

          <IconButton
            onClick={props.isFavorite ? props.onUnFavorite : props.onFavorite}
            icon={props.isFavorite ? 'heart/filled' : 'heart/outline'}
            size={8}
            color="red"
          />
        </HStack>

        <ProgressBar color="purple" label="CP" value={props.cp} />
        <ProgressBar color="green" label="HP" value={props.hp} />

        <HStack justify="space-between">
          <Box flex={1}>
            <Card>
              <VStack align="center" justify="center">
                <Text variant="subtitle">Weight</Text>
                <Text variant="body">
                  {`${props.weightMin} - ${props.weightMax}`}
                </Text>
              </VStack>
            </Card>
          </Box>
          <Box flex={1}>
            <Card>
              <VStack align="center" justify="center">
                <Text variant="subtitle">Height</Text>
                <Text variant="body">
                  {`${props.heightMin} - ${props.heightMax}`}
                </Text>
              </VStack>
            </Card>
          </Box>
        </HStack>
      </Card>
    </Box>
  );
}

export default PokemonDetailCard;
