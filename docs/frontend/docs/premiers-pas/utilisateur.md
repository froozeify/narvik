---
next: false
---

# Installation avec docker
Il s'agit de la méthode la plus simple et rapide à faire.

L'image est disponible sur [docker hub](https://hub.docker.com/repository/docker/benoitvignal/narvik-front)

Variables d'environement :
- `NUXT_API_PARTY_ENDPOINTS_LOCAL_API_URL`
- `NUXT_SESSION_PASSWORD`


## Docker compose
Un exemple de docker-compose pour faire tourner le projet (backend + frontend) est disponbile dans [la documentation du backend](/backend/docs/installation/02.docker#docker-compose).

## Mise à jour

Pour effectuer les mises à jour, il suffit :

1. Modifier la version des images dans le `compose.yaml`
    - Seulement si en retard par rapport à la version majeure disponible sur Github)
2. `docker compose pull`
3. `docker compose stop && docker compose up -d`
