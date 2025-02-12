---
title: "Set up GraphQL PPX"
metaTitle: "GraphQL PPX setup | ReScript React Apollo Tutorial"
metaDescription: "You will learn how to configure GraphQL PPX"
---

import GithubLink from "../src/GithubLink.js";

In our previous step we successfully configured Apollo. Next, we need to setup GraphQL PPX to start making GraphQL queries.

graphql-ppx automatically generate types for our GraphQL queries based on GraphQL schema and provides building blocks for GraphQL clients.

### GraphQL PPX Installation

Let's install graphql-ppx:

```
npm install @reasonml-community/graphql-ppx
```

Next, let's add ppx-flags and update bs-dependencies in your bsconfig.json:

<GithubLink link="https://github.com/hasura/learn-graphql/blob/master/tutorials/frontend/rescript-react-apollo/app-final/bsconfig.json" text="bsconfig.json" />

```json
{
  ...
-  "bs-dependencies": ["@rescript/react", "rescript-apollo-client"],
+  "bs-dependencies": ["@rescript/react", "rescript-apollo-client", "@reasonml-community/graphql-ppx"],
+  "ppx-flags": ["@reasonml-community/graphql-ppx/ppx"]
}

```

Next, let's add Apollo Client configuration for graphql-ppx

```json
{
   ...
   "ppx-flags": ["@reasonml-community/graphql-ppx/ppx"],
+  "graphql": {
+    "apolloMode": true,
+    "extendMutation": "ApolloClient.GraphQL_PPX.ExtendMutation",
+    "extendQuery": "ApolloClient.GraphQL_PPX.ExtendQuery",
+    "extendSubscription": "ApolloClient.GraphQL_PPX.ExtendSubscription",
+    "templateTagReturnType": "ApolloClient.GraphQL_PPX.templateTagReturnType",
+    "templateTagImport": "gql",
+    "templateTagLocation": "@apollo/client"
+  }
}

```

### Get GraphQL Schema

`graphql-ppx` needs your graphql schema to be available in the form of a `graphql_schema.json` file.

We can get it by running the command

```bash
npx get-graphql-schema ENDPOINT_URL -j > graphql_schema.json
```

In our case, ENDPOINT_URL is https://hasura.io/learn/graphql.
Since our graphql endpoint is authenticated we also need pass Authorization header

```bash
npx get-graphql-schema https://hasura.io/learn/graphql --header "Authorization=Bearer tokenId" -j > graphql_schema.json
```

You can find tokenId in `Request Headers` section of https://hasura.io/learn/graphql/graphiql, after logging in.

`graphql_schema.json` generated by above command should be placed in the root folder of the project.
<GithubLink link="https://github.com/hasura/learn-graphql/blob/master/tutorials/frontend/rescript-react-apollo/app-final/graphql_schema.json" text="graphql_schema.json" />

Now we are ready to start making GraphQL queries.
