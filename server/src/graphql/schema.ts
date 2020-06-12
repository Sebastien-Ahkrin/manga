const schema = `
  type Episode {
    name: String!
    grade: String!
    code: String!
    id: String!
  }

  input CreationInput {
    name: String!
    grade: Int!
    code: String!
  }

  type Query {
    get(id: String!): Episode!
    getAll: [Episode]!
  }

  type Mutation {
    set(name: String, grade: Int, code: String): Episode!
    update(id: String!, episode: CreationInput!): Episode!
    delete(id: String!): Episode!
  }
`

export default schema