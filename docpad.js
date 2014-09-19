module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "II JASI",
      description: "II Jornada Acadêmica de Sistemas de Informação",
      date: "De 20 a 23 de Outubro de 2014",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "CESNORS/UFSM",
      address: "Linha 7 de Setembro",
      city: "Frederico Westphalen",
      state: "Rio Grande do Sul"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    /*callToAction: {
        text: "Register now!",
        link: "http://eventick.com.br"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/braziljs/conf-boilerplate"
    },*/

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/"
      //googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      //'speakers',
      'schedule',
      //'sponsors',
      //'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Speakers",
      schedule: "Agenda",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule20: [
      {
        name: "",
        photo: "themes/yellow-swan/img/palestra.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Sr. Valmor Prevedello (Prevedello Sistemas)",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Palestra",
          description: "O Mercado de Trabalho na Área de Tecnologia da Informação na Região de Frederico Westphalen",
          location: "Auditório do CAFW",
          time: "19h00"
        }
      }
    ],

    schedule21: [
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/painel.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Painel",
          description: "O Mercado de Trabalho na Área de Tecnologia da Informação na Região de Frederico Westphalen. Painelistas: Braian Jacomelli Piovesan, Daniel Prediger, Maik Basso, Maik Frizon, Marcelo Garbin, Péricles Guimarães Fortes e Tiago Tomazoni.",
          location: "Auditório do CAFW",
          time: "19h00"
        }
      }
    ],

    schedule22: [
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/mongo.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Mauro André Murari (Sistemas de Informação - UFSM/FW)",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Minicurso",
          description: "MongoDB",
          location: "Laboratório de Software - Bloco 06",
          time: "19h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/corel.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Talliny Dalla Nora (Sistemas de Informação - UFSM/FW)",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Minicurso",
          description: "CorelDraw",
          location: "Laboratório de Hardware - Bloco 06",
          time: "19h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/testes.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Juliano Prettz (Sistemas de Informação - UFSM/FW)",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Minicurso",
          description: "Testes de Software",
          location: "Laboratório 5 - Prédio Central",
          time: "19h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/latex.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Dra. Rosane Beatriz Oliveira Severo (DTecInf - UFSM/FW)",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Minicurso",
          description: "Latex Usando MDT/UFSM",
          location: "Laboratório 4 - Prédio Central",
          time: "19h00"
        }
      }
    ],

    schedule23: [
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/python.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Iulisloi Zacarias e Paulo Henrique Vianna (Núcleo de Informática - UFSM/FW)",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Minicurso",
          description: "Python/Django",
          location: "Laboratório de Software - Bloco 06",
          time: "19h00"
        }
      },
      {
        name: "",
        photo: "themes/yellow-swan/img/html5.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Maik Basso (Sistemas de Informação - UFSM/FW)",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Minicurso",
          description: "Desenvolvimento Web com HTML, CSS e JavaScript",
          location: "Laboratório 04 - Prédio Central",
          time: "19h00"
        }
      },
      {
        name: "",
        photo: "themes/yellow-swan/img/phonegap.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Aluísio de Ávila, Gabriel Camara Mandeli (Sistemas de Informação - UFSM/FW) e Ezequiel Prezotto (Sistemas para Internet - CAFW/UFSM)",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Minicurso",
          description: "PhoneGap - Desenvolvimento de Aplicativos Móveis com HTML, CSS e JavaScript",
          location: "Laboratório de Hardware - Bloco 06",
          time: "19h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};