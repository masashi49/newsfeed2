import * as React from "react";
import Image from "./Image";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import type { PosterByline_Fragment$key } from "./__generated__/PosterByline_Fragment.graphql";

export type Props = {
  poster: PosterByline_Fragment$key;
};

export default function PosterByline({ poster }: Props): React.ReactElement {
  const data = useFragment(fragment, poster);
  const { profilePicture, name, joined } = data;

  console.log(1111);
  console.log(joined);
  console.log(22222);
  if (poster == null) {
    return null;
  }
  return (
    <div className="byline">
      <Image
        image={profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{name}</div>
    </div>
  );
}

const fragment = graphql`
  fragment PosterByline_Fragment on Actor {
    name
    profilePicture {
      ...Image_Fragment @arguments(width: 60, height: 60)
    }
    joined
  }
`;
