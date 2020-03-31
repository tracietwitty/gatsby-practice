const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  //extract slugs for blogpost urls:
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    // add the new field onto the node:
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
