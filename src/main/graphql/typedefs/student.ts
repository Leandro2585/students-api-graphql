import { gql } from 'apollo-server'

export default gql`
  input StudentLoadInput {
    name: String
    email: String
    cpf: String
  }

  export type Query {
    loadStudents (input: StudentLoadInput): Student[]
  }

  type Student {
    id: String!
    name: String!
    email: String!
    cpf: String!
  }
`
