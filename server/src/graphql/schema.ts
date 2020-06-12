const schema = `
  type Episode {
    name: String!
    grade: String!
    code: String!
    id: String!
  }

  type Query {
    get(uuid: String): Episode
  }
`

export default schema