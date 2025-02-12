---
title: "Create todos - mutation"
metaTitle: "Mutation to create todos | ReScript React Apollo Tutorial"
metaDescription: "GraphQL Mutation to create new personal todos. Try the mutation in GraphiQL, passing the Authorization token to get authenticated results."
---

In this part of the tutorial, you will learn how to create new todos by using GraphQL Mutations.

Let's define a graphql mutation to perform insert into todos.

```graphql
mutation ($todo: String!, $isPublic: Boolean!) {
  insert_todos(objects: [{ title: $todo, is_public: $isPublic }]) {
    affected_rows
    returning {
      id
      title
      created_at
      is_completed
    }
  }
}
```

You will also need to pass in the values for the variables.

[Try](https://hasura.io/learn/graphql/graphiql) this mutation in GraphiQL against the application database to see what the response looks like.

Let's now integrate this graphql mutation into our react app.
