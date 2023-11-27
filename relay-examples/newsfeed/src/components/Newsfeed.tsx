import * as React from "react";
import Story from "./Story";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import type {NewsfeedQuery as NewsfeedQueryType} from './__generated__/NewsfeedQuery.graphql';


export default function Newsfeed() {
  const data = useLazyLoadQuery<NewsfeedQueryType> (
    NewsfeedQuery,{}
  )
  const story = data.topStory

  console.log(story)

  return (
    <div className="newsfeed">
      <Story story={story} />
    </div>
  );
}

// GraphQlをjsに埋め込むには 「graphql``」といった文字リテラルが必要。
// Relay コンパイラーはコード内でこの記述を検索し、コンパイルできるようになる。
// query NewsfeedQuery クエリの宣言。
// 
const NewsfeedQuery = graphql`
 query NewsfeedQuery{
  topStory {
    ...StoryFragment 
  }
 }
`

//topStoryの中身をStory.tsxに押し込んだ。
//NewsfeedQueryはStoryFragmentのフラグメントを探し出すことに徹する.
//StoryFragmentの中身がどうかわろうと、NewsfeedQueryには影響しない。