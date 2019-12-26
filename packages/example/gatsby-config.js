module.exports = {
  siteMetadata: {
    title: 'Amy outten - Massage Therapy',
    description: 'Message therapy by Amy outten',
    keywords: 'message,spa,relax,renew',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Amy outten - Massage Therapy',
        short_name: 'Amy Outten',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl: 'https://github.com/scottywalters/amyoutten',
          subDirectory: '/packages/example',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
    },
  ],
};
