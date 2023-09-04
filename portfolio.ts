import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Aklilu Jemal Fita',
  title: "Hi all, I'm Aklilu",
  description:
    "I'm passionate Computer Engineer(Master) and Full-Stack Developer having an experience of web development with React, Next.js, Express and Django",
  resumeLink: 'https://flowcv.com/resume/tihm7sq9af',
};

export const openSource = {
  githubUserName: 'AkliluFita',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/aklilu-fita-493679204/',
  github: 'https://github.com/AkliluFita',
  facebook: 'https://www.facebook.com/profile.php?id=100081196525123',
  telegram: 'https://t.me/abdunasirsoft',
  whatsApp: 'https://t.me/abdunasirsoft',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Web Development Tools',
      lottieAnimationFile: '/lottie/skills/fullstack.json',
      skills: [
        emoji('⚡ Building an E-commerce Platform & PWA in React'),
        emoji('⚡ Building an full Featured Blog Post Platform with React'),
        emoji('⚡ Inventory Management System Platform with React'),
        emoji('⚡ Building RESTful APIs in Node Js, Express, Django'),
        emoji('⚡ Building  RESTful APIs with CMS Strapi tools'),
        emoji('⚡ Building Grpc APIs with Golang and proton buff'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Nodejs',
          iconifyTag: 'logos:nodejs-icon',
        },
        {
          skillName: 'Express',
          iconifyTag: 'logos:express',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Deploying and maintaining website using Heroku and Hostinger'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'logos:mongodb',
        },
        {
          skillName: 'MySQL',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'Firebase',
          iconifyTag: 'logos:firebase',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Web Design(Figma)',
    progressPercentage: '70',
  },
  {
    Stack: 'Frontend',
    progressPercentage: '90',
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Haramaya University',
    subHeader: 'Bachelor of Electrical and Computer Engineering',
    duration: '09/2014 - 07/2017',
    desc: 'One of the well-known Hights Ranked University',
    // grade: '3.7/4.0',
    descBullets: [
      'Learnt the basics Computer engineering',
      'Learnt the basics Electrical engineering',
      'Understand the basics of Embedded System',
      'Understanding of how to write clean code',
      'Learnt basic different programming languages (C++, Java)',
      'Learnt basic Database Management System',
    ],
  },
  {
    schoolName: 'Cyprus International University',
    subHeader: 'Master of Computer Engineering,',
    duration: '10/2019 - 10/2021',
    desc: 'One of the well-known International University in Northern Cyprus',
    // grade: 'Grade A',
    descBullets: [
      'Advanced Database (Oracle, SQL Server)',
      'Advanced Programming language (Java)',
      'Advanced Network Programming (Socket Program, HTTP, and so on, with C Program)',
      'Worked on real world projects using React.js',
      'Network and Communication System',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'FullStack Developer',
    company: 'Mereb Technologies',
    companyLogo: '/img/icons/common/mereb.png',
    date: '07/2022 – 08/2023',
    desc: 'I worked as a full-stack developer, I am responsible for developing and maintaining the front-end and back-end components of web applications. I participated building inventory and realestate digital platform projects with my teams',
  },
  {
    role: 'Web Developer and IT manager',
    company: 'Starlight Imports P.L.C',
    companyLogo: '/img/icons/common/newStart1.png',
    date: '03/2022 – 06/2022',
    desc: 'Developed a local eCommerce platform for Starlight Import P.L.C as one of my first website launched on this site (https://starlightimport.com/) using React, Material UI and Firebase. I was responsible to maintain any technical issues related to the office computer related materials as well',
  },
  {
    role: 'FullStack Developer(Internship)',
    company: 'Saft Bridge Company',
    companyLogo: '/img/icons/common/dowell.png',
    date: '12/2021 - 02/2022',
    desc: 'Worked remotely by being invited from my Superviser(Assoc.prof.Dr.Erbug Celebi), Director of Artificial Intelligence Application and Research Center at Cyprus International University.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Local E-Commerce ',
    desc: 'A platform that allows users to visit all founded products, adding to carts, getting price cost lists information and printing the products and finally shopping that products with different payment option .',
    github: 'https://github.com/AkliluFita/Starlight',
    link: 'https://starlightimport.com/',
  },
  {
    name: 'Image Gallery',
    desc: 'A platform where Camera mans can store and manage their images in easy way.',
    github: 'https://github.com/AkliluFita/imagegallery',
  },
  {
    name: 'Mini Amazon',
    desc: 'Simple Amazon shopping.It includes lists of product, cart, checkout and order pages. used tools(react.js, (pure css, Node.js, database(MongoDB), Firebase(Authentication))',
    github: 'https://github.com/AkliluFita/react_amazon',
    link: 'https://miniamazone.netlify.app/',
  },
  {
    name: 'Blog Post',
    desc: 'to show the CRUD operation with post. additionally it includes also authentication with JWT.',
    github: 'https://github.com/AkliluFita/react_blog_fullStack',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Aklilu Jemal',
  description: 'A passionate Computer Engineer and Web Developer.',
  author: 'Aklilu Jemal',
  image:
    'https://aklilu8portfolio.netlify.app/static/media/my_picture.8284116019d31d4443fc.png',
  url: '',
  keywords: ['Aklilu', 'Aklilu Jemal'],
};
