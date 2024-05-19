export const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    title
    date
    content
    excerpt
    uri
    yoastSeoTitle
    yoastSeoMetaDesc
  }
`;


export const QUERY_POST_BY_URI = gql`
  ${POST_FIELDS}
  query getPostByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ...PostFields
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  ${POST_FIELDS}
  query getPosts {
    posts(first:10){
      nodes {
        ...PostFields
      }
    }
  }
`;