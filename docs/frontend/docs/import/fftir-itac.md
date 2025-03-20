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
1. Se rendre sur le **Requêteur** : https://itac.pro/Requeteur/Requeteur.aspx
2. Utiliser le modèle `Adhérents` et cliquer sur CSV
3. Si le modèle n'existe pas :
    1. Créer un nouveau modèle `Licenciés (effectifs)`  
       ![](./images/import-donnees/export-itac-membres-1.png)
    2. Mettre tous les champs sur `Tous`
       ![](./images/import-donnees/export-itac-membres-2.png)
    3. Tout cocher dans `Licencié` et `Licence`
       ![](./images/import-donnees/export-itac-membres-3.png)
    4. Nommer le fichier `Adhérents`
    5. Cliquer sur `Sauvegarder le modèle d'extraction de données`
    6. Cliquer sur `Extraire les données au format CSV`
       L'export se télécharge automatiquement et peut prendre un peu de temps.
       ![](./images/import-donnees/export-itac-membres-4.png)

### Import depuis le site <RoleLevelComponent level="admin" />
La page est accessible depuis le menu d'administration.

Le fichier envoyé doit obligatoirement être au format CSV.

![](./images/import-donnees/import-membre-1.png)

## Import des membres club secondaire
L'import se fait depuis un CSV généré depuis le site itac

- [Export depuis itac](#export-depuis-itac-1)
- [Import depuis le site](#import-depuis-le-site-1)

### Export depuis itac
1. Se rendre sur le **Requêteur** : https://itac.pro/Requeteur/Requeteur.aspx
2. Utiliser le modèle `Adh-2nd-club` et cliquer sur CSV
3. Si le modèle n'existe pas :
    1. Créer un nouveau modèle `Cartes Club`  
       ![](./images/import-donnees/export-itac-2nd-club-1.png)
    2. Sélectionner toutes les saisons  
       ![](./images/import-donnees/export-itac-2nd-club-2.png)
    3. Cocher tout les champs  
       ![](./images/import-donnees/export-itac-2nd-club-3.png)
    4. Nommer le fichier `Adh-2nd-club`
    5. Cliquer sur `Sauvegarder le modèle d'extraction de données`
    6. Cliquer sur `Extraire les données au format CSV`
       L'export se télécharge automatiquement et peut prendre un peu de temps.
       ![](./images/import-donnees/export-itac-2nd-club-4.png)

### Import depuis le site <RoleLevelComponent level="admin" />
La page est accessible depuis le menu d'administration.

Le fichier envoyé doit obligatoirement être au format CSV.

Une fois l'import effectué, une migration des présences externes vers présence membres est automatiquement effectuée.

![](./images/import-donnees/import-membre-2nd-club-1.png)


## Import des photos

### Export depuis itac
1. Se rendre à l'adresse suivante https://itac.pro/Requeteur/ExportClub.aspx
2. Sélectionner `Export des photos`   
   ![](images/import-donnees/import-photo-1.jpg)
3. Télécharger le fichier zip fourni par itac sur le site

### Import depuis le site <RoleLevelComponent level="admin" />
La page est accessible depuis le menu d'administration.

Le fichier envoyé doit obligatoirement être l'archive généré depuis itac.
