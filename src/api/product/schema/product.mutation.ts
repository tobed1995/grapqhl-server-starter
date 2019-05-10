import { gql } from 'apollo-server-express'

/**
 * GraphQL schema --> all mutations related to the product.
 */
const productMutation = gql`
    extend type Mutation {
        createProduct(
            topic: [ID!]
            stock: Int
            name: String!
            description: String!
            price: Int!
            categories: [ID]
            gender: Gender
            img: Upload
        ): Product!
        deleteProduct(id: ID!): Boolean!
        updateProduct(
            topic: [ID!]
            stock: Int
            id: ID!
            name: String
            description: String
            price: Int
            categories: [ID]
            gender: Gender
            img: Upload
        ): Product!
    }
`

export { productMutation }
