const path = require(`path`)
const slugify = require("slugify")
const queries = require("./queries")

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  const data = queries.find(x => x.name === node.internal.type)
  if (data) {
    const slug = path.join(
      "/",
      slugify(data.name, { lower: true }),
      slugify(data.slug ? data.slug(node) : node.name, { lower: true })
    )
    createNodeField({ node, name: "slug", value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  for (const { name, template, query } of queries) {
    const component = path.resolve(`src/templates/${template || name}.js`)
    const result = await graphql(query)

    if (result.errors) {
      throw result.errors
    }

    for (const { node } of result.data.root.edges) {
      createPage({
        path: node.fields.slug,
        component,
        context: node,
      })
    }
  }
}
