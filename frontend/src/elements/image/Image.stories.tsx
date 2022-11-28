import Image from "./Image";

export default {
  title: "Image",
  component: Image,
};

export function Default() {
  return (
    <Image source="https://img.pokemondb.net/artwork/bulbasaur.jpg" alt="Alt" />
  );
}
