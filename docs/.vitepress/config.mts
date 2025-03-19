import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Narvik",
  description: "S de gestion pour club",
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.ico' } ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo-narvik-white--cropped.png',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Guide', link: '/guide/index' },
      { text: 'Backend', link: '/backend/index' },
      { text: 'Frontend', link: '/frontend/index' }
    ],

    sidebar: {
      '/guide/': [

      ],
      '/backend/': [
        {
          text: 'Installation',
          items: [
            {
              text: 'Prérequis',
              link: '/backend/docs/installation/01.prerequis'
            },
            {
              text: 'Docker (recommandée)',
              link: '/backend/docs/installation/02.docker'
            },
            {
              text: 'Manuelle',
              link: '/backend/docs/installation/02.manuelle'
            },
            {
              text: 'Post-installation',
              link: '/backend/docs/installation/03.post-installation'
            }
          ]
        },
        {
          text: 'Import des données',
          items: [
            {
              text: 'Itac',
              link: '/backend/docs/import/itac'
            },
            {
              text: 'Cerbère',
              link: '/backend/docs/import/cerbère'
            },
            {
              text: 'Narvik',
              link: '/backend/docs/import/narvik'
            },
          ]
        },
        {
          text: 'Développement',
          collapsed: true,
          items: [
            {
              text: 'Participer au développement',
              link: '/backend/dev/participer'
            }
          ]
        }
      ],
      '/frontend/': [
        {
          text: 'Installation',
          items: [
            {
              text: 'Prérequis',
              link: '/frontend/docs/installation/01.prerequis'
            },
            {
              text: 'Docker (recommandée)',
              link: '/frontend/docs/installation/02.docker'
            },
            {
              text: 'Manuelle',
              link: '/frontend/docs/installation/02.manuelle'
            }
          ]
        },
        {
          text: 'Premiers pas',
          items: [
            {
              text: 'Club',
              link: '/frontend/premiers-pas/club'
            },
            {
              text: 'Utilisateur',
              link: '/frontend/premiers-pas/utilisateur'
            }
          ]
        },
        {
          text: 'Import des données',
          collapsed: true,
          items: [
            {
              text: 'Itac',
              link: '/frontend/docs/import/itac'
            },
            {
              text: 'Cerbère',
              link: '/frontend/docs/import/cerbère'
            },
            {
              text: 'Narvik',
              link: '/frontend/docs/import/narvik'
            },
          ]
        },
        {
          text: 'Membres',
          collapsed: true,
          items: [
            {
              text: 'Gestion des présences',
              link: '/frontend/docs/membres/presences'
            },
            {
              text: 'Administration',
              link: '/frontend/docs/membres/administration'
            },
          ]
        },
        {
          text: 'Activités',
          collapsed: true,
          items: [
            {
              text: 'Administration',
              link: '/frontend/docs/activites/administration'
            },
          ]
        },
        {
          text: 'Point de vente',
          collapsed: true,
          items: [
            {
              text: 'Inventaire',
              link: '/frontend/docs/pos/inventaire'
            },
            {
              text: 'Ventes',
              link: '/frontend/docs/pos/ventes'
            },
          ]
        },
        {
          text: 'Développement',
          collapsed: true,
          items: [
            {
              text: 'Participer au développement',
              link: '/frontend/dev/participer'
            }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/froozeify/narvik' }
    ],

    footer: {
      message: '<a href="https://about.narvik.app" target="_blank">À propos de Narvik.</a>',
      copyright: '© 2024 - 2025. Tous droits réservés'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
