const config = {
  gatsby: {
    pathPrefix: "/learn/graphql/hasura-advanced",
    siteUrl: "https://hasura.io",
    gaTrackingId: "GTM-WBBW2LN",
    trailingSlash: true,
  },
  header: {
    logo: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg",
    logoLink: "https://hasura.io/learn/",
    title:
      "learn <a href='https://hasura.io/learn/'>/ graphql </a><a href='https://hasura.io/learn/graphql/hasura-advanced/introduction/'>/ hasura-advanced</a>",
    githubUrl: "https://github.com/hasura/learn-graphql",
    helpUrl: "https://discord.com/invite/hasura",
    tweetText:
      "Check out this Advanced Hasura GraphQL Backend course by @HasuraHQ https://hasura.io/learn/graphql/hasura-advanced/introduction/",
    links: [
      {
        text: "",
        link: "",
      },
    ],
    search: {
      enabled: false,
      indexName: "learn-hasura-backend-advanced",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      "/introduction/",
      "/migrations-metadata/",
      "/performance/",
      "/security/",
      "/reliability/",
      "/debugging/",
      "/what-next/",
    ],
    links: [
      {
        text: "Hasura Docs",
        link: "https://hasura.io/docs/latest/graphql/core/index.html",
      },
      {
        text: "GraphQL API",
        link: "https://hasura.io/graphql/",
      },
    ],
  },
  siteMetadata: {
    title: "Hasura Advanced Backend Course",
    description:
      "A concise and powerful tutorial that covers advanced concepts of developing and maintaining GraphQL backends in production using Hasura Cloud",
    ogImage:
      "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/twitter-card-hasura-advanced.png",
    docsLocation:
      "https://github.com/hasura/learn-graphql/tree/master/tutorials/backend/hasura-advanced/tutorial-site/content",
    favicon:
      "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/hasura-favicon.png",
  },
};

module.exports = config;
