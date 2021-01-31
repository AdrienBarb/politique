module.exports = {
  siteMetadata: {
    title: "politique",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "7D-kEnYxkBsRkjezsWnZ6u3QAoiMuXQTvo1daaPsNn8",
        spaceId: "wqbyc2kp0ap6",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
  ],
};
