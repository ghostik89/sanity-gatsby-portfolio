export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61c48a88338fb016505ada4d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5i2gzh4o',
                  apiId: '9fded69f-7363-4625-81aa-b6dd7da8a5c4'
                },
                {
                  buildHookId: '61c48a881a1060cad8b6d57f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ng13ovd9',
                  apiId: 'd306a292-a9ce-40b3-a566-7a0c025db215'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ghostik89/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ng13ovd9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
