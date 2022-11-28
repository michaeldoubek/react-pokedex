import {css} from '@emotion/css';

type ImageProps = {
  source: string;
  alt: string;
};

function Image(props: ImageProps) {
  return (
    <img
      className={css`
        width: 100%;
        height: 100%;
        object-fit: contain;
      `}
      src={props.source}
      alt={props.alt}
    />
  );
}

export default Image;
