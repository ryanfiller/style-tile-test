module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				// One convention is to place your Netlify CMS customization code in a
				// `src/cms` directory.
				// modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
    {
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content/`,
			},
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {

      }
    }
  ],
}
