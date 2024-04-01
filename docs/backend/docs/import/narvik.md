---
next: false
---

<script setup>
import RoleLevelComponent from '../../../components/RoleLevelComponent.vue'
</script>

# Import des données <RoleLevelComponent level="admin" />

## Import des présences <RoleLevelComponent level="admin" />
L'import se fait depuis un CSV généré depuis le site itac

- [Export](#export)
- [Import](#import)

### Export <RoleLevelComponent level="admin" />
L'export en csv est possible depuis plusieurs url :

- `<api>/member-presences.csv`
- `<api>/members/<id>/presences.csv`

### Import <RoleLevelComponent level="admin" />
L'import se fait depuis l'url suivante : `<api>/member-presences/-/from-csv`

Le fichier doit être au format CSV
