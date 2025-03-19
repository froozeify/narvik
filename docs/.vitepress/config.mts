import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation Narvik",
  description: "Plateforme de gestion pour club",
  lang: 'fr',
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.ico' } ]
  ],
  themeConfig: {
    siteTitle: 'Narvik',
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo-nk.png',
      dark: '/logo-nk-white.png'
    },

    outline: {
      label: 'Dans cette page'
    },

    docFooter: {
      prev: 'Précédent',
      next: 'Suivant'
    },

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Guide', link: '/guide/index' },
      { text: 'Documentation site', link: '/frontend/index' }
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
              link: '/frontend/docs/import/cerbere'
            },
            {
              text: 'Narvik - présences',
              link: '/frontend/docs/import/narvik-presences'
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
        },
        {
          text: 'Installation',
          collapsed: true,
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
