---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Narvik - Backend"
  text: "Gestion des données"
  tagline: Obligatoire au fonctionnement du projet
  actions:
    - theme: brand
      text: Démarrer
      link: ./docs/installation/01.prerequis
    - theme: alt
      text: Participer au développement
      link: ./dev/participer
    - theme: alt
      text: GitHub
      link: https://github.com/froozeify/narvik-back
      target: _blank

features:
  - title: Symfony / API Platform
    details: Basé sur le framework API Platform.
  - title: Faible consomation de RAM
    details: 
        Le projet est fait pour tourner sur un Raspberry Pi.<br/>
        Fonctionne avec 500 Mo de RAM.
  - title: Authentification OAuth
    details: Utilisé avec un Refresh Token afin de permettre à l'utilisateur de rester connecté sans avoir à se reconnecter manuellement.
---
