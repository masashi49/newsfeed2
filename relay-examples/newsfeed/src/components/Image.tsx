import * as React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import type { Image_Fragment$key } from "./__generated__/Image_Fragment.graphql";

type Props = {
  image: Image_Fragment$key;
  width: number;
  height: number;
  className?: string;
};

export default function Image({
  image,
  width,
  height,
  className,
}: Props): React.ReactElement {
  const data = useFragment(fragment, image);
  const { url, altText } = data;

  if (image == null) {
    return null;
  }
  return (
    <img
      key={url}
      src={url}
      alt={altText}
      width={width}
      height={height}
      className={className}
    />
  );
}

const fragment = graphql`
  fragment Image_Fragment on Image
  @argumentDefinitions(
    width: { type: "Int", defaultValue: null }
    height: { type: "Int", defaultValue: null }
  ) {
    url(width: $width, height: $height)
    altText
  }
`;
