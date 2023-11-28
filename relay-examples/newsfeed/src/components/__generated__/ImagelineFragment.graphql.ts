/**
 * @generated SignedSource<<e7737c16564a017c4d57ac2c6d98569a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ImagelineFragment$data = {
  readonly url: string;
  readonly " $fragmentType": "ImagelineFragment";
};
export type ImagelineFragment$key = {
  readonly " $data"?: ImagelineFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ImagelineFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImagelineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "Image",
  "abstractKey": null
};

(node as any).hash = "0d1ff4159d73e2778281b5fbb3b19238";

export default node;
