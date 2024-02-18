---
next: false
---

<script setup>
import RoleLevelComponent from '../../../components/RoleLevelComponent.vue'
</script>

# Gestion membre <RoleLevelComponent level="supervisor" />

## Liste <RoleLevelComponent level="supervisor" />
La liste affiche par défaut les membres de la saison actuelle.

La recherche est appliquée sur :

- Numéro de licence
- Nom
- Prénom

![](./images/liste.png)

En cliquant sur une ligne, une fiche détaillée est retournée.

## Informations détaillées <RoleLevelComponent level="supervisor" />
![](./images/details.png)

Actions possibles :

- Changement du mot de passe <RoleLevelComponent level="admin" />
- Modification du rôle <RoleLevelComponent level="admin" />
- Activation/Désactivation du compte <RoleLevelComponent level="admin" />
- Affichage des statistiques de présences <RoleLevelComponent level="supervisor" />
  - 12 dernièrs mois
  - Possibilité de supprimer une présence <RoleLevelComponent level="admin" />


