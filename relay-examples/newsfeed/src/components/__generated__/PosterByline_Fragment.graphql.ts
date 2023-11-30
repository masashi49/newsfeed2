/**
 * @generated SignedSource<<43f9cb988ed047937f0419b8a5261cf3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PosterByline_Fragment$data = {
  readonly joined: string | null;
  readonly name: string | null;
  readonly profilePicture: {
    readonly " $fragmentSpreads": FragmentRefs<"Image_Fragment">;
  } | null;
  readonly " $fragmentType": "PosterByline_Fragment";
};
export type PosterByline_Fragment$key = {
  readonly " $data"?: PosterByline_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PosterByline_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PosterByline_Fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Image_Fragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "joined",
      "storageKey": null
    }
  ],
  "type": "Actor",
  "abstractKey": "__isActor"
};

(node as any).hash = "c771fa74488eec4d1c8ddb3cefa38a3a";

export default node;
