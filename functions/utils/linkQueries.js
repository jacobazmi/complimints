const GET_MINTS = `
query {
    allMints {
        data {
            name
            message
            _id
            seen
            heart
            archived
        }
    }
}`;

const CREATE_MINT = `
mutation($name: String!, $message: String!,)`;
