import { Subject } from 'rxjs/Subject';
import { Work } from './../interfaces/work';

export class WorkService {

    worksSubject = new Subject<Work[]>();

    private works: Work[] = [
        {
          id: 0,
          title: 'Altissia - P1 OCS',
          subtitle: 'Un bon vieux sous-titre',
          context: 'Contexte du projet, concepte de base.',
          description: '<p>Premier projet de la formation OpenClassRooms<p><p>Blablablab blabla blavszf sdg<p>',
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
          subtitle: 'Un bon vieux sous-titre',
          context: 'Contexte du projet, concepte de base.',
          description: 'Troisième projet de la formation OpenClassRooms',
          link: 'http://forteroche.scoomdev.eu/',
          skills: [
            { name: 'PHP', doc: 'http://php.net/manual/fr/intro-whatis.php' },
            { name: 'Silex', doc: 'https://silex.symfony.com/doc/2.0/' },
            { name: 'HTML', doc: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
            { name: 'CSS', doc: 'https://developer.mozilla.org/fr/docs/Web/CSS' }
          ],
          image: 'forteroche-bd.jpg',
          imageHD: 'forteroche-hd.jpg'
        },
        {
          id: 2,
          title: 'Louvre - P4 OCS',
          subtitle: 'Un bon vieux sous-titre',
          context: 'Contexte du projet, concepte de base.',
          description: 'Quatrième projet de la formation OpenClassRooms',
          link: 'http://projet-4.alwaysdata.net',
          skills: [
            { name: 'PHP', doc: 'http://php.net/manual/fr/intro-whatis.php' },
            { name: 'Symfony', doc: 'https://symfony.com/doc/current/index.html' },
            { name: 'HTML', doc: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
            { name: 'CSS', doc: 'https://developer.mozilla.org/fr/docs/Web/CSS' }
          ],
          image: 'louvre-bd.jpg',
          imageHD: 'louvre-hd.jpg'
        },
        {
          id: 3,
          title: 'NAO - P5 OCS',
          subtitle: 'Un bon vieux sous-titre',
          context: 'Contexte du projet, concepte de base.',
          description: 'Cinquième projet de la formation OpenClassRooms',
          link: 'https://teamp5.alwaysdata.net',
          skills: [
            { name: 'PHP', doc: 'http://php.net/manual/fr/intro-whatis.php' },
            { name: 'Symfony', doc: 'https://symfony.com/doc/current/index.html' },
            { name: 'HTML', doc: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
            { name: 'CSS', doc: 'https://developer.mozilla.org/fr/docs/Web/CSS' }
          ],
          image: 'nao-bd.jpg',
          imageHD: 'nao-hd.jpg'
        },
        {
          id: 4,
          title: 'Meetlight - P6 OCS',
          subtitle: 'Un bon vieux sous-titre',
          context: 'Contexte du projet, concepte de base.',
          description: 'Sixième projet de la formation OpenClassRooms',
          link: 'http://scoomdev.alwaysdata.net/login',
          skills: [
            { name: 'PHP', doc: 'http://php.net/manual/fr/intro-whatis.php' },
            { name: 'Symfony', doc: 'https://symfony.com/doc/current/index.html' },
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
