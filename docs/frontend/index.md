---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Narvik - Frontend"
  text: "Interface utilisateur"
  actions:
    - theme: brand
      text: Mise en route club
      link: ./premiers-pas/club
    - theme: brand
      text: Guide utilisateur
      link: ./premiers-pas/utilisateur
    - theme: alt
      text: Installation
      link: ./docs/installation/01.prerequis
    - theme: alt
      text: Participer au développement
      link: ./dev/participer
    - theme: alt
      text: GitHub
      link: https://github.com/froozeify/narvik-front
      target: _blank

features:
  - title: Enregistrement des présences des membres
    details: Possiblité d'enregistrer les présences extérieurs (club secondaire, découverte, initiation).
  - title: Profil utilistateur
    details:
        Affichage des présences sur les 12 derniers mois. <br/>
        Date du dernier tir de contrôle.
  - title: Interface d'administration
    details: Interface d'administration avec statistiques sur l'utilisation des postes et la présences.
  - title: Vente
    details: >
      - Catégorisation <br/>
      - Gestion des moyens de paiements <br/>
      - Historique par vente <br/>
      - Historique par produit
  - title: Inventaire
    details:  >
      - Catégorisation <br/>
      - Historique du prix d'achat et de vente <br/>
      - Alerte stock bas
---
