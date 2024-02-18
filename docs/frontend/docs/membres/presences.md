---
prev: false
---

<script setup>
import RoleLevelComponent from '../../../components/RoleLevelComponent.vue'
</script>

# Gestion des présences <RoleLevelComponent level="badger" />

![](./images/presence.png)

- Présences externes (section orange)
- Présences des membres du club
  - Affichage en rouge si le dernier tir contrôlé date de plus de 12 mois.

## Connexion en mode badgeuse/pointeuse
Afin de simplifier la gestion des mots de passe, il existe un compte spécifique pour le pc accessible à tout le monde et qui sert au pointage (appelé ici badgeuse).

Il s'agit d'une connexion sans mot de passe.

Pour ajouter cette connexion rapide, il faut:

1. Se connecter en mode admin depuis l'ordinateur qui servira de pointeuse.
2. Se rendre dans `Administration > Configuration globale`
3. Glisser et déposer dans la barre d'addresse du navigateur le bouton jaune `Gestion de présence`
4. Se déconnecter
5. Et voila, en cliquant maintenant dans le nouveau favoris, la connexion sera automatiquement faite sur le compte `badger`

![](./images/badgeuse.png)
