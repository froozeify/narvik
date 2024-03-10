---
prev: false
---


<script setup>
import RoleLevelComponent from '../../../components/RoleLevelComponent.vue'
</script>

# Import des données <RoleLevelComponent level="admin" />

## Import des membres
L'import se fait depuis un CSV généré depuis le site itac

- [Export depuis itac](#export-depuis-itac)
- [Import depuis le site](#import-depuis-le-site)

### Export depuis itac
Explication pour l'export disponible dans [la documentation du backend](/backend/docs/import/itac#export-depuis-itac)

### Import depuis le site <RoleLevelComponent level="admin" />
La page est accessible depuis le menu d'administration.

Le fichier envoyé doit obligatoirement être au format CSV.

![](./images/import-donnees/import-membre-1.png)

## Import des membres club secondaire
L'import se fait depuis un CSV généré depuis le site itac

- [Export depuis itac](#export-depuis-itac-1)
- [Import depuis le site](#import-depuis-le-site-1)

### Export depuis itac
Explication pour l'export disponible dans [la documentation du backend](/backend/docs/import/itac#export-depuis-itac-1)

### Import depuis le site <RoleLevelComponent level="admin" />
La page est accessible depuis le menu d'administration.

Le fichier envoyé doit obligatoirement être au format CSV.

Une fois l'import effectué, une migration des présences externes vers présence membres est automatiquement effectuée.

![](./images/import-donnees/import-membre-2nd-club-1.png)


## Import des photos

### Export depuis itac
Explication pour l'export disponible dans [la documentation du backend](/backend/docs/import/itac#export-depuis-itac-1)

### Import depuis le site <RoleLevelComponent level="admin" />
La page est accessible depuis le menu d'administration.

Le fichier envoyé doit obligatoirement être l'archive généré depuis itac.
