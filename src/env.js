export const api = process.env.NODE_ENV === 'production'
  ? 'https://graphql-example-server.herokuapp.com/'
  : 'http://localhost:4000'
