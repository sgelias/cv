export type Locale = 'en-us' | 'pt-br'

const translations = {
  'en-us': {
    header: {
      subtitle: 'curriculum vitae',
      toggleTheme: 'Toggle theme',
      pdf: 'PDF',
      langSwitch: 'PT',
    },
    contact: {
      orgGithub: 'Organization GitHub',
      personalGithub: 'Personal GitHub',
    },
    summaries: {
      title: 'My Summaries',
      inMicrobiology: 'In Microbiology',
      inBioinformatics: 'And in Bioinformatics',
    },
    titration: {
      title: 'Titration',
      phd: 'PhD in Microbiology',
      master: 'Master in Fungi, Algae and Plant Biology',
      bachelor: 'Bachelor in Biological Sciences',
      institution: 'Institution',
      degree: 'Degree',
      year: 'Year',
      phdInstitution: 'University of Brasília (UnB)',
      phdDegree: 'PhD in Microbiology',
      phdYear: '2017',
      masterInstitution: 'Federal University of Santa Catarina (UFSC)',
      masterDegree: 'Master in Fungi, Algae and Plant Biology',
      masterYear: '2015',
      bachelorInstitution: 'University of the Extreme South of Santa Catarina (UNESC)',
      bachelorDegree: 'Bachelor in Biological Sciences',
      bachelorYear: '2011',
    },
    publications: {
      title: 'Publications in Journals',
      lifeSciences: 'Life Sciences and Bioinformatics',
      healthSciences: 'Health Sciences',
    },
    publicTools: {
      title: 'Public Domain Software',
      tools: {
        myceliumGateway: 'An open and free API Gateway, designed to operate in modern, multi-tenant, and API-oriented environments. The project prioritizes architectural clarity, security, and extensibility, maintaining an explicit separation between technical concerns and organizational aspects of the project.',
        myceliumWebapp: 'The official web interface of Mycelium API Gateway, designed to allow rapid implementation of access policies to the API Gateway endpoints, without the need for additional implementation.',
        blutilsCli: 'A command line interface designed to be a Blast Wrapper, used to improve their execution performance and implements an exclusive consensus algorithm to improve the interpretation of the results.',
        blutilsUi: 'A web interface designed to visualize the results of the Blutils CLI. It is designed to be used in the browser, without the need for additional implementation.',
        classeq: 'A biological sequence classifier designed to perform the biological sequences placement into a predefined phylogeny. It is designed as a web friendly application, with a focus on usability.',
      },
    },
    privateSoftwares: {
      title: 'Private Software Registrations',
      year: 'Year',
      titleCol: 'Title',
      kind: 'Kind (Language)',
      application: 'Application',
    },
  },
  'pt-br': {
    header: {
      subtitle: 'currículo vitae',
      toggleTheme: 'Alternar tema',
      pdf: 'PDF',
      langSwitch: 'EN',
    },
    contact: {
      orgGithub: 'GitHub da Organização',
      personalGithub: 'GitHub Pessoal',
    },
    summaries: {
      title: 'Meus Resumos',
      inMicrobiology: 'Em Microbiologia',
      inBioinformatics: 'E em Bioinformática',
    },
    titration: {
      title: 'Titulação',
      phd: 'Doutorado em Microbiologia',
      master: 'Mestrado em Biologia de Fungos, Algas e Plantas',
      bachelor: 'Bacharelado em Ciências Biológicas',
      institution: 'Instituição',
      degree: 'Grau',
      year: 'Ano',
      phdInstitution: 'Universidade de Brasília (UnB)',
      phdDegree: 'Doutorado em Microbiologia',
      phdYear: '2017',
      masterInstitution: 'Universidade Federal de Santa Catarina (UFSC)',
      masterDegree: 'Mestrado em Biologia de Fungos, Algas e Plantas',
      masterYear: '2015',
      bachelorInstitution: 'Universidade do Extremo Sul Catarinense (UNESC)',
      bachelorDegree: 'Bacharelado em Ciências Biológicas',
      bachelorYear: '2011',
    },
    publications: {
      title: 'Publicações em Periódicos',
      lifeSciences: 'Ciências da Vida e Bioinformática',
      healthSciences: 'Ciências da Saúde',
    },
    publicTools: {
      title: 'Software de Domínio Público',
      tools: {
        myceliumGateway: 'Um API Gateway aberto e gratuito, projetado para operar em ambientes modernos, multi-tenant e orientados a APIs. O projeto prioriza clareza arquitetural, segurança e extensibilidade, mantendo uma separação explícita entre as preocupações técnicas e os aspectos organizacionais do projeto.',
        myceliumWebapp: 'A interface web oficial do Mycelium API Gateway, projetada para permitir a implementação ágil de políticas de acesso aos endpoints do API Gateway, sem a necessidade de implementação adicional.',
        blutilsCli: 'Uma interface de linha de comando desenvolvida como um Blast Wrapper, utilizada para melhorar o desempenho de execução e que implementa um algoritmo de consenso exclusivo para aprimorar a interpretação dos resultados.',
        blutilsUi: 'Uma interface web desenvolvida para visualizar os resultados do Blutils CLI. Projetada para uso no navegador, sem necessidade de implementação adicional.',
        classeq: 'Um classificador de sequências biológicas desenvolvido para realizar o posicionamento de sequências biológicas em uma filogenia pré-definida. Projetado como uma aplicação web-friendly, com foco em usabilidade.',
      },
    },
    privateSoftwares: {
      title: 'Registros de Software Privado',
      year: 'Ano',
      titleCol: 'Título',
      kind: 'Tipo (Linguagem)',
      application: 'Registro',
    },
  },
} as const

export default translations
