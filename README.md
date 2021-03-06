# www-lechoixdescouleurs
Site internet de Le choix des couleurs.

# Ajouter/éditer/supprimer du contenu sur le site
## Sommaire
1. [Faire un commit sur Github](#faire-un-commit-sur-github)
2. [Organisation des fichiers](#organisation-des-fichiers)
   1. [_config.yml](#1-_configyml)
   2. [Les fichiers .md](#2-les-fichiers-md)
   3. [Les composants _includes](#3-les-composants-_includes)
   4. [Le dossier images](#4-le-dossier-images)
3. [Écrire en Markdown](#écrire-en-markdown)
4. [Règles d'écriture spécifiques](#règles-décriture-spécifiques)
5. [TIPS : comment ajouter une évaluation annuelle ?](#tips--comment-ajouter-une-évaluation-annuelle-)

## Faire un commit sur Github
1. Sélectionner le fichier à modifier ;
2. Cliquer sur l'icone de crayon pour éditer ce dernier ;
3. Faire les modifications souhaitées ;
4. Dans le panneau **Commit changes** situé en bas de la page, écrire un titre qui explique brièvement les modifications apportées ;
5. Cliquer sur le bouton **Commit changes** pour mettre en production les modifications.
6. Attendre quelques secondes, puis recharger la page du site pour voir ces modifications apparaître ! 

## Organisation des fichiers
Depuis le répertoire de base, il y a 4 différents éléments sur lesquels on peut agir :
1. **_config.yml ➞** Les informations de base du site (titre, descriptions, coordonnées…) ;
2. **Les fichiers .md ➞** Les pages du site ;
3. **Les composants du dossier "_includes" ➞** Les éléments récurrents du site (menu, coordonnées, footer…) ;
4. **Le dossier "images" ➞** Les images (.pdf compris) qui sont sur le site.

### 1. _config.yml
Il est possible d'éditer les informations suivantes :
- **title ➞** C'est le titre du site _➞ utilisé pour le référencement_ ;
- **description ➞** C'est la description du site _➞ utilisé pour le référencement_ ;
- **email/linkedin/phone ➞** Les coordonées de contact _➞ utilisés pour les liens dans le footer et la page contact_ .

### 2. Les fichiers .md
Il est possible d'ajouter, d'éditer ou de supprimer les fichiers .md, chaque fichier .md correspond à une page du site.
Un fichier .md comporte deux sections :
1. **identification ➞** C'est ce qui permet au code de comprendre quel est le rôle de la page et où la positionner.
Cette partie se trouve en haut du document. Elle commence et se termine aves les caractères "---".
Il est possible d'éditer les informations suivantes :
    - **category** _➞ indiquer "Nos formations" pour faire apparaître la page dans la partie "Nos formations" du menu du site_ ;
    - **navigation**
      - _➞ indiquer "menu" pour faire apparaître la page dans le menu du site._ ;
      - _➞ indiquer "footer" pour faire apparaître la page dans le bas de page du site._ ;
    - **order ➞** L'ordre de la page dans le menu du site (par rapport aux autres pages) ;
    - **title ➞** Le titre de la page _➞ utilisé pour le référencement_ ;
    - **liens formations** _➞ indiquer "oui" pour faire apparaître la liste des formations dans cette page_ ;

>Les identifiants **category** et **navigation** sont incompatibles. Pour une page qui présente un formation, il sera utilisé **category : Nos formations**, pour toute autre page du site qui doit apparaître dans le menu ou dans le bas de page il sera utilisé **navigation**.

2. **contenu ➞** C'est le contenu du site qui va apparaître sur la page. Pour écrire le contenu, il faut utiliser la syntaxe **[Markdown](#écrire-en-markdown)** et les **[Règles d'écriture](#règles-décriture-spécifiques)** expliqués ci-dessous.

### 3. Les composants _includes
Dans ce dossier, les fichiers sont écrits en Html. Mieux vaut ne pas s'avanturer dans la modification sans être sûr de ce que l'on fait. Cependant, dans le fichier footer.html, il y a deux éléments qui peuvent être modifiés facilement :
- la balise h4 qui est le titre de la section
  ```html
  </h4>Notre mission : accompagner les transformations</h4>
  ```
- la balise p qui est le contenu
  ```html
  </p>Contenu du bas de page.</p>
  ```

### 4. Le dossier images
Toutes les images qui sont sur le site doivent se trouver dans ce dossier. Il est important de bien ranger ses images ! Pour ce faire on peut créer des dossiers, des sous-dossiers, etc. Voici la marche à suivre pour importer de nouvelles images :
1. Se rendre dans le dossier souhaité pour la destination de l'image ;
2. Une fois dans le bon dossier, on clique sur le bouton **Upload files** pour importer un ou plusieurs fichiers (.jpg, .png, .pdf…) ;
3. Valider le commit ;
4. Dans une page, importer une image en écrivant :
```html
![Nom de l'image](/images/nom-du-dossier/nom-du-fichier.extension)
--
exemple pour le logo APRIL.jpg, écrire :
![Logo April](/images/references/APRIL.jpg)
```
_Attention aux majuscules et éviter de mettre des espaces et des accents dans les noms des fichiers !_

## Écrire en Markdown
Rien de plus simple ! C'est très bien expliqué sur ce site : https://guides.github.com/features/mastering-markdown/#syntax

## Règles d'écriture spécifiques
- Les titres de la page d'accueil (index.md) doivent être écrit avec un header de niveau 2 (ou moins 3, 4, 5 ou 6) :
  ```html
  ## Titre pour la page d'accueil
  ```
- Les titres des autres pages doivent être écrit avec un header de niveau 3 (ou moins 4, 5 ou 6) :
  ```html
  ### Titre pour toutes les autres pages
  ```

## TIPS : comment ajouter une évaluation annuelle ?
_Pour l'évaluation annuelle de 2017 par exemple._
1. Se rendre dans le répertoire **/images/evaluations** ;
2. Déposer la nouvelle évaluation annuelle **evaluation-2017.pdf** dans le dossier ;
3. Se rendre dans le fichier **nos-references.md** ;
4. En dessous du titre **Nos évaluations annuelles** insérer une nouvelle ligne dans la liste :
  ```html
  ### Nos évaluations annuelles
  - [Évaluation de l'année 2016](/images/evaluations/evaluation-2016.pdf)
  - [Évaluation de l'année 2017](/images/evaluations/evaluation-2017.pdf)
  ```
 5. Et voilà c'est fini !
