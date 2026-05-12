const CONFIG = {
  github: {
    username: 'lisachandra',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Open Source Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: true,
          projects: [
            'lisachandra/lisachandra',
            'lisachandra/lisachandra.github.io',
          ],
        },
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Ferocity In Silence',
          description:
            'Open-world horror FPS with a deep story and intense PvE/PvP action.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.roblox.com/games/9161557310/Ferocity-In-Silence',
        },
        {
          title: "Music Pads",
          description:
            "A music game where you can create, perform, and share your own tracks or remix songs from others.",
          imageUrl:
            "https://i.imgur.com/e3u5uUx.png",
          link: "https://www.roblox.com/games/8109104504/Music-Pads",
        },
        {
          title: "Rocket Powered Blox Cars",
          description:
            "A car soccer game based on Rocket League.",
          imageUrl:
            "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
          link: "https://www.roblox.com/games/96406189576385/Rocket-Powered-Blox-Cars",
        },
      ],
    },
  },
  seo: {
    title: 'lisachandra',
    description: '',
    imageURL: '',
  },
  social: {
    website: 'https://lisachandra.github.io',
    email: 'lisachandra@proton.me',
    youtube: 'lisachandra-',
    medium: 'lisachandra-',
    kofi: 'lisachandra',
    soundcloud: 'lisachandra',
    discord: ['lisachandra', '758229030268174356'],
    roblox: ['lisachandra', '133370944'],
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'Luau',
    'Python',
    'Rust',
    'Roblox TS',
    'Roblox Studio',
    'Rojo',
    'Darklua',
    'Asphalt',
    'ESLint',
    'Git',
    'Github Actions',
    'Jest',
    'React',
    'Matter ECS',
    'Bytenet',
    'Lapis',
    'Crate',
    'Centurion',
  ],
  blog: {
    source: 'medium',
    username: 'lisachandra-',
    limit: 3,
  },
  themeConfig: {
    defaultTheme: 'emerald',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
  },
  footer: `© 2025 lisachandra. All Rights Reserved.`,
  enablePWA: true,
  googleAnalytics: {
	id: 'G-78ETQ1ZGXG',
  },
};

export default CONFIG;
