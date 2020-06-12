const schema = `
  type Episode {
    name: String!
    grade: String!
    code: String!
    id: String!
  }

  input Creation {
    name: String!
    grade: Int!
    code: String!
  }

  type Query {
    get(id: String!): Episode!
    getAll: [Episode]!
    set(name: String, grade: Int, code: String): Episode!
    update(id: String!, episode: Creation!): Episode!
    delete(id: String!): Episode!
  }
`

export default schema