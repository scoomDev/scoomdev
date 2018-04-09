import { Subject } from 'rxjs/Subject';
import { Work } from './../interfaces/work';

export class WorkService {

    worksSubject = new Subject<Work[]>();

    private works: Work[] = [
        {
          id: 0,
          title: 'Altissia - P1 OCS',
          subtitle: 'Créer et déployez un site en ligne',
          context: 'Début de formation OpenclassRooms, création du premier site web.',
          description: `Le but de ce projet était de promouvoir les activités culturelles d'une ville de notre choix.
                        Ici, mon choix s'est porté sur la ville d'Altissia du jeu vidéo Final Fantasy XV.
                        La page d'accueil devait être essentiellement graphique, je devais y prévoir une page
                        présentant les actualités de la ville, une page d'information, une page contenant un tableau des différentes
                        activités du mois en cours ainsi qu'une page de contact. Pour cela, il fallait définir et présenter un plan de
                        site ainsi que les solutions techniques appropriées en fonction des différents navigateurs, présenter une
                        charte graphique et mettre en place une politique de diffusion. Le site a été produit avec le CMS Wordpress et
                        les templates ont été personnalisés avec PHP et CSS.`,
          info: null,
          link: 'http://scoomarts.fr/altissia',
          skills: [
            { name: 'wordpress', doc: 'https://codex.wordpress.org/fr:Accueil' },
            { name: 'PHP', doc: 'http://php.net/manual/fr/intro-whatis.php' },
            { name: 'CSS', doc: 'https://developer.mozilla.org/fr/docs/Web/CSS' }
          ],
          image: 'altissia-bd.jpg',
          imageHD: 'altissia-hd.jpg'
        },
        {
          id: 1,
          title: 'Forteroche - P3 OCS',
          subtitle: 'Créer un blog pour un écrivain',
          context: 'Programmation orientée objet et micro-fromaework.',
          description: `On introduit la POO avec PHP et les micro-framework avec Silex de SensioLabs. Ici, il s'agit de créer une
                        application de blog simple en PHP à l'aide de Silex. J'ai mis en place une interface frontend pour la lecture
                        des billets et une interface backend pour administrer les billets de blog. Nous y retrouvons donc tous les éléments
                        d'un CRUD (Create, Read, Update, Delete). Un système de commentaires est également implémenté, avec la possibilité
                        pour les lecteurs de signaler des commentaires considérés comme indésirable. Pour la partie administration, un
                        système d'authentification protège son accès et une interface WYSIWYG basée sur TinyMCE, permet au client la
                        rédaction de ses billets. La partie design a été mise en place à l'aide du framework Materialize.`,
          info: null,
          link: 'http://forteroche.scoomdev.eu/',
          skills: [
            { name: 'Silex', doc: 'https://silex.symfony.com/doc/2.0/' },
            { name: 'PHP', doc: 'http://php.net/manual/fr/intro-whatis.php' },
            { name: 'MySQL', doc: 'https://dev.mysql.com/doc' },
            { name: 'HTML', doc: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
            { name: 'CSS', doc: 'https://developer.mozilla.org/fr/docs/Web/CSS' }
          ],
          image: 'forteroche-bd.jpg',
          imageHD: 'forteroche-hd.jpg'
        },
        {
          id: 2,
          title: 'Zhato V1 - le blog JV',
          subtitle: 'Créer un blog jeux-vidéo',
          context: 'Portage du projet Forteroche fait en Silex sur un projet de blog en Symfony.',
          description: `Le but était ici de reprendre le même type de blog créé lors du projet 3 de la formation
                        OpenclassRooms et de le porter sur la technologie Symfony. J'ai fait ce blog avant tout pour m'entrainer
                        sur cette technologie, il est cependant aujourd'hui en ligne, actif et administré par un client. Ce projet reprend
                        les concepts de CRUD et, tout comme le projet 3, le design est réalisé via Materialize.`,
          info: 'Une version 2 sera bientôt en développement et utilisera Symfony 4 et Angular.',
          link: 'https://zhato.fr/',
          skills: [
            { name: 'Symfony', doc: 'https://symfony.com/doc/current/index.html' },
            { name: 'PHP', doc: 'http://php.net/manual/fr/intro-whatis.php' },
            { name: 'MySQL', doc: 'https://dev.mysql.com/doc' },
            { name: 'HTML', doc: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
            { name: 'CSS', doc: 'https://developer.mozilla.org/fr/docs/Web/CSS' }
          ],
          image: 'zhato-bd.jpg',
          imageHD: 'zhato-hd.jpg'
        },
        {
          id: 3,
          title: 'Louvre - P4 OCS',
          subtitle: 'Développer un back-end',
          context: 'Créer un nouveau système de réservation et de gestion des tickets en ligne.',
          description: `Le but de ce projet était de proposer au client fictif (le Louvre),
                        un nouveau système de billetterie en ligne afin de diminuer les longues files d'attente et
                        de tirer parti de l'usage des smartphones. L'interface devait donc être accessible sur tout type d'écran,
                        l'objectif étant de permettre l'achat de billets rapidement. Il fallait donc respecter un cahier des charges
                        précis et utiliser la technologie Symfony pour développer cette application. Pour le design, j'ai fait usage
                        du framework Bootstrap de Twitter et pour les paiements, j'ai utilisé l'outil Stripe.`,
          info: null,
          link: 'http://projet-4.alwaysdata.net',
          skills: [
            { name: 'Symfony', doc: 'https://symfony.com/doc/current/index.html' },
            { name: 'PHP', doc: 'http://php.net/manual/fr/intro-whatis.php' },
            { name: 'MySQL', doc: 'https://dev.mysql.com/doc' },
            { name: 'HTML', doc: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
            { name: 'CSS', doc: 'https://developer.mozilla.org/fr/docs/Web/CSS' }
          ],
          image: 'louvre-bd.jpg',
          imageHD: 'louvre-hd.jpg'
        },
        {
          id: 4,
          title: 'NAO - P5 OCS',
          subtitle: 'Projet en équipe',
          context: 'Application d\'observation pour les.',
          description: `Michel Dujardin (personnage fictif), passionné d'ornithologie et fondateur de l'association NAO
                        (Nos Amis les Oiseaux), souhaite créer une application participative, dans laquelle, les
                        particuliers pourraient indiquer où ils ont observé des oiseaux au cours de leurs promenades. Cette
                        application a été faite en équipe, trois développeurs et un marketeur, et utilise la technologie Symfony.
                        C'est un CRUD qui dispose donc d'un front et backend. Elle propose une base de données TAXREF qui répertorie
                        toutes les espèces d'oiseaux connues, la géolocalisation pour l'affichage des observations sur Google Maps
                        et un système d'authentification, qui protège l'accès aux pages selon le rôle de chaque utilisateur.`,
          info: `Sur ce projet, je me suis occupé du design, du frontend et du développement de quelques fonctionnalités, comme la
                galerie photos et quelques éléments liés à Google Maps.`,
          link: 'https://teamp5.alwaysdata.net',
          skills: [
            { name: 'Symfony', doc: 'https://symfony.com/doc/current/index.html' },
            { name: 'PHP', doc: 'http://php.net/manual/fr/intro-whatis.php' },
            { name: 'MySQL', doc: 'https://dev.mysql.com/doc' },
            { name: 'HTML', doc: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
            { name: 'CSS', doc: 'https://developer.mozilla.org/fr/docs/Web/CSS' }
          ],
          image: 'nao-bd.jpg',
          imageHD: 'nao-hd.jpg'
        },
        {
          id: 5,
          title: 'Meetlight V0.1 - P6 OCS',
          subtitle: 'Trouve ta lumière',
          context: `Contribuer à son écosystème !`,
          description: `Le but ici était de proposer un projet personnel qui répond à un besoin.
                        Passionné par la photographie et ayant déjà rencontré certaines problématiques dans la création de projets
                        photos (liées à la recherche de collaborateurs par exemple), c'était le meilleur
                        moment pour tenter d'y répondre. C'est là qu'est né Meetlight. Meetlight permet à un utilisateur inscrit
                        et connecté, de trouver autour de chez lui ou partout en France, un talent de la photographie et de lui
                        proposer une collaboration. L'objectif de Meetlight : devenir LE réseau social de la photographie
                        et ainsi permettre aux utilisateurs de se rencontrer et de collaborer.`,
          info: `Une version 0.2 sera prochainement développée en Symfony 4 et Angular. Aucun design n'est pour l'instant présent,
                 je vais travailler avec un UX Designer.`,
          link: 'http://scoomdev.alwaysdata.net/login',
          skills: [
            { name: 'Symfony', doc: 'https://symfony.com/doc/current/index.html' },
            { name: 'PHP', doc: 'http://php.net/manual/fr/intro-whatis.php' },
            { name: 'MySQL', doc: 'https://dev.mysql.com/doc' },
            { name: 'HTML', doc: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
            { name: 'CSS', doc: 'https://developer.mozilla.org/fr/docs/Web/CSS' }
          ],
          image: 'meetlight-bd.jpg',
          imageHD: 'meetlight-hd.jpg'
        }
      ];

      getWorkById(id: number) {
          const work = this.works.find(element => element.id === id);
          return work;
      }

      emitWorkSubject() {
          this.worksSubject.next(this.works.slice());
      }
}
