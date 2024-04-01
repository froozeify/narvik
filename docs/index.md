---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Narvik"
  text: "Logiciel de gestion pour club de tir"
  tagline: "Webapp composée d'un backend et d'un frontend"
  actions:
    - theme: brand
      text: Backend (gestion des données)
      link: /backend/index
    - theme: brand
      text: Frontend (interface utilisateur)
      link: /frontend/index
    - theme: alt
      text: Github
      link: https://github.com/froozeify/narvik
      target: _blank

features:
  - title: Gestion des présences
    icon: 📋
    details: Enregistrement des présences extérieurs (club secondaire, découverte, initiation).
  - title: Import manuel depuis Itac
    icon: 📝
    details: >
        - Membres<br/>
        - Membres club secondaire
  - title: Import depuis Cerbère
    icon: 📝
    details: Récupération de l'historique de présence enregistré dans Cerbère.
  - title: Statistiques club
    icon: 📊
    details: >
      - Jours ouverts <br/>
      - Présences (membres + externes) <br/>
      - Activités <br/>
      - Membres (global + individuelle)
  - title: Statistiques individuelle
    icon: 📈
    details: >
      - Dernier tir de contrôle<br/>
      - Présences <br/>
      - Activités
  - title: Export en CSV
    icon: 📁
    details: >
      - Export des présences <br/>
      - Export des activités - A venir

---

