import type { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: 'Mike Cruz',
  title: 'Motion Design e Graphic Design',
  imageUrl: 'https://i.postimg.cc/cHWbWsn4/1755110570321-1.png',
  contact: {
    phone: '(11) 98106-6799',
    email: 'mikewosnik@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mikewosnik/',
  },
  address: 'Rua das Palmeiras, 584\nSanto André, SP',
  about: 'Com mais de 11 anos de experiência, sou um profissional criativo e versátil, apaixonado por branding e pela criação de conteúdo visual dinâmico. Minha jornada me permitiu desenvolver uma habilidade apurada em transformar conceitos abstratos e ideias em projetos de alto impacto visual. Sou movido por desafios e pela busca constante de novas técnicas, incluindo a aplicação de inteligência artificial no processo criativo para otimizar e inovar. Tenho um perfil proativo e colaborativo, sempre focado em superar expectativas e entregar resultados que conectem marcas e pessoas de forma autêntica.',
  education: [
    {
      institution: 'ESPM',
      year: 2018,
      degree: 'Bacharelado em Comunicação Social',
    },
    {
      institution: 'NYFA',
      year: 2018,
      degree: '2 Day Interactive Media Workshop',
      description: 'With Hollywood Visual Effects Professional Craig Caton-Largent'
    },
  ],
  experience: [
    {
      company: 'Brasil Ideias',
      period: '2014-2019',
      role: 'Designer Gráfico, Edição de vídeos e animação',
    },
     {
      company: 'Show Podcast (Podcast gamer)',
      period: '2021 - 2021',
      role: 'Gestão de equipe, captação de patrocínios, alinhamento de comunicação com patrocinadores',
    },
    {
      company: 'Bob Burnquist Holdings',
      period: '2021 - ATUAL',
      role: 'Gerenciamento de redes sociais, edição de vídeos, motion graphics, criação de artes gráficas e apresentações',
    },
    {
      company: 'Cemporcentoskate',
      period: '2020 - ATUAL',
      role: 'Designer Gráfico e Motion Graphics',
    },
  ],
  skills: [
    { name: 'After Effects', category: 'adobe' },
    { name: 'Photoshop', category: 'adobe' },
    { name: 'Illustrator', category: 'adobe' },
    { name: 'InDesign', category: 'adobe' },
    { name: 'Character Animator', category: 'adobe' },
    { name: 'Edição de Vídeo', category: 'video' },
    { name: 'Filmmaker', category: 'video' },
    { name: 'Redes Sociais', category: 'video' },
    { name: 'Marketing', category: 'strategy' },
    { name: 'Storytelling', category: 'strategy' },
    { name: 'Estratégia', category: 'strategy' },
    { name: 'Inteligência Artificial', category: 'strategy' },
  ],
  affinities: [
    { name: 'CS2', affinity: 100 },
    { name: 'Futebol', affinity: 80 },
    { name: 'R6', affinity: 0 },
    { name: 'Porsche Cup', affinity: 0 },
    { name: 'Valorant', affinity: 50 },
    { name: 'LOL', affinity: 10 },
    { name: 'Skate', affinity: 100 },
  ],
  instagramPosts: [
    {
      id: 1,
      url: 'https://www.instagram.com/reel/DKu6hCMv3W3/',
      imageUrl: 'https://i.postimg.cc/wBmwWHzZ/bbjkkds.png',
      tags: ['Edição de Vídeo', 'Reel']
    },
    {
      id: 2,
      url: 'https://www.instagram.com/reel/DOWHPBojaHe/',
      imageUrl: 'https://i.postimg.cc/sgtBJCwW/Sem-Titulo-2.png',
      tags: ['Motion Graphics', 'Animação', 'IA']
    },
    {
      id: 4,
      url: 'https://www.instagram.com/p/C4L4tAYJ88a/',
      imageUrl: 'https://i.postimg.cc/V6ymTYCj/monstga.png',
      tags: ['Edição de Vídeo', 'Motion Graphics']
    },
    {
      id: 6,
      url: 'https://www.instagram.com/p/DQzaYC7EZWu/',
      imageUrl: 'https://i.postimg.cc/L8zqv07B/bb-bb2.png',
      tags: ['Edição de Vídeo', 'Reel']
    }
  ]
};