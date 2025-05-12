export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];

  export const skills = [
    {
      name: 'React',
      imageUrl: '/assets/react.svg' 
    },
    {
      name: 'Node.js',
      imageUrl: '/assets/nodejs.svg'
    },
    {
      name: 'Django',
      imageUrl: '/assets/django.svg'
    },
    {
      name: 'Git',
      imageUrl: '/assets/git.svg' 
    },
    {
      name: 'Github',
      imageUrl: '/assets/gitub.svg'
    },
    {
      name: 'Flask',
      imageUrl: '/assets/flask.svg'
    },
    {
      name: 'Python',
      imageUrl: '/assets/python.svg'
    },
  {
    name: 'Express',
    imageUrl: '/assets/express.svg'
  },
  {
    name: 'Css',
    imageUrl: '/assets/css.svg'
  },
  {
    name: 'Postman',
    imageUrl: '/assets/postman.svg'
  },
  {
    name: 'JS',
    imageUrl: '/assets/javascript.svg'
  },
  {
    name: 'MongoDB',
    imageUrl: '/assets/mongodb.svg'
  },
  {
    name: 'Next.js',
    imageUrl: '/assets/nextjs.svg'
  },
  {
    name: 'Vite',
    imageUrl: '/assets/vite.svg'
  },
  {
    name: 'Tailwind',
    imageUrl: '/assets/tailwindcss.svg'
  },
  {
    name: 'SqlAlchemy',
    imageUrl: '/assets/sqlalchemy.svg'
  },
  {
    name: 'MySQL',
    imageUrl: '/assets/MySQL.svg'
  },
  ];
  
  export const projects = [
    {
        iconUrl: '/assets/Screenshot.png',
        // theme: 'btn-back-green',
        name: 'InterviewEve',
        description: 'Developed InterviewEve, a web-based tool built with Python Flask and Jinja2 to streamline interview preparation. The platform offers expertly crafted practice questions, interview tips, and a user-friendly interface for an engaging and successful interview preparation experience.',
        link: 'https://intervieweve.onrender.com/',
    },
      {
        iconUrl: '/assets/Screenshot2.png',
        name: 'GroupChat',
        description: 'Developed GroupChat, a real-time group chat app with dynamic usernames, avatars, live messaging, system notifications, and a responsive interface.',
        link: 'https://group-chat-wqgk.onrender.com/',
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -7.5, 0],
      pythonPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const experiences = [
    {
      title: "ICT Support Assistant",
      company_name: "KMTC Mathari",
      icon: '/assets/kmtc.png',
      iconBg: "#A05252",
      date: "February 2024 - May 2024",
      points: [
          "Troubleshot computer hardware and software issues, ensuring minimal downtime.",
          "Diagnosed and resolved campus LAN connectivity problems.",
          "Assisted with the installation and configuration of software across campus workstations.",
          "Set up and maintained computer workstations, including hardware assembly and configuration.",
          "Installed and configured the core campus Enterprise Resource Package (ERP) system on new computers, ensuring seamless integration into existing infrastructure.",
      ],
    },
    // {
    //   title: "ICT Support Assistant",
    //   company_name: "KMTC Mathari",
    //   icon: '/assets/kmtc.png',
    //   iconBg: "#A05252",
    //   date: "February 2024 - May 2024",
    //   points: [
    //       "Troubleshot computer hardware and software issues, ensuring minimal downtime.",
    //       "Diagnosed and resolved campus LAN connectivity problems.",
    //       "Assisted with the installation and configuration of software across campus workstations.",
    //       "Set up and maintained computer workstations, including hardware assembly and configuration.",
    //       "Installed and configured the core campus Enterprise Resource Package (ERP) system on new computers, ensuring seamless integration into existing infrastructure.",
    //   ],
    // },
    // {
    //   title: "ICT Support Assistant",
    //   company_name: "KMTC Mathari",
    //   icon: '/assets/kmtc.png',
    //   iconBg: "#A05252",
    //   date: "February 2024 - May 2024",
    //   points: [
    //       "Troubleshot computer hardware and software issues, ensuring minimal downtime.",
    //       "Diagnosed and resolved campus LAN connectivity problems.",
    //       "Assisted with the installation and configuration of software across campus workstations.",
    //       "Set up and maintained computer workstations, including hardware assembly and configuration.",
    //       "Installed and configured the core campus Enterprise Resource Package (ERP) system on new computers, ensuring seamless integration into existing infrastructure.",
    //   ],
    // },
  ];
