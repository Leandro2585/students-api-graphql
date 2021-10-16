import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    loadStudents(name: String, email: String, cpf: String): [Student]
  }

  type Student {
    id: String
    name: String
    email: String
    cpf: String
  }
`