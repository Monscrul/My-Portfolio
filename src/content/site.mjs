export const profile = {
  name: "Dominic Yap",
  fullName: "Dominic John S. Yap",
  role: "Information Systems student & software developer",
  location: "Cebu City, Philippines",
  email: null,
  github: null,
  linkedin: null,
  resume: null,
  // Set the production origin before publishing, e.g. https://your-domain.com.
  url: null,
};

// Official sources and local copies are recorded in ASSETS.md.
export const brands = {
  usc: {
    name: "University of San Carlos",
    image: "usc-logo.png",
    url: "https://usc.edu.ph/",
    dark: false,
  },
  rush: {
    name: "Rush Gym Wear",
    image: "rush-logo.png",
    url: "https://www.rushgymwear.com/",
    dark: true,
  },
  erovoutika: {
    name: "Erovoutika",
    image: "erovoutika-logo.png",
    url: "https://www.erovoutika.ph/",
    dark: true,
  },
  nxplorers: {
    name: "Shell NXplorers",
    image: "nxplorers-logo.svg",
    url: "https://nxplorers.com/",
    dark: false,
  },
  cesafi: {
    name: "CESAFI",
    image: "cesafi-logo.png",
    url: "https://cesafi.ph/",
    dark: false,
  },
};

export const projects = [
  {
    slug: "carlee",
    number: "01",
    name: "Carlee",
    category: "Independent project",
    description:
      "A daily car-guessing game, independently built and brought to the web.",
    overview:
      "Carlee is a daily car-guessing web game inspired by Wordle. I independently developed the project, taking an idea for a game and turning it into a working web product.",
    motivation: "Bring the daily guessing-game format to car identification.",
    role: "Independent developer",
    contribution:
      "I independently developed Carlee and implemented the web product.",
    live: "https://playcarlee.com",
    liveLabel: "Play Carlee",
    cover: {
      image: "carlee-home.jpg",
      alt: "Carlee home screen with its tire-and-flame logo and Play Daily button.",
      caption: "Carlee · Home screen",
    },
    screenshots: [
      {
        image: "carlee-gameplay.jpg",
        alt: "Carlee compares a Ferrari 308 GTSi guess against the daily car using color-coded attributes.",
        caption:
          "Playing a daily puzzle: comparing make, country, drive, body, horsepower, year, and engine.",
      },
      {
        image: "carlee-result.jpg",
        alt: "Carlee’s completed puzzle shows a Ferrari Testarossa, a car silhouette, and result sharing controls.",
        caption: "The completed puzzle and result-sharing screen.",
      },
    ],
    visual: "carlee",
    visualTitle: "A new car. Every day.",
    visualSubtitle: "Daily car-guessing game",
    status:
      "Live website linked below. Release history and current development status are to be added.",
    missing: {
      technologies:
        "Add the verified frontend stack, hosting platform, and any backend services.",
      process:
        "Describe how you moved from the initial idea through implementation and launch.",
      decisions:
        "Explain the daily puzzle implementation and one architectural decision, once verified.",
      challenges:
        "Share a specific development challenge, the approach you tried, and the solution.",
    },
  },
  {
    slug: "basurascan",
    number: "02",
    name: "BasuraScan",
    category: "Applied AI · Research",
    description:
      "Exploring waste classification through a mobile application and applied AI research.",
    overview:
      "BasuraScan is a research-oriented mobile application focused on classifying waste as recyclable or non-recyclable. My work covered dataset preparation, research writing, and project management.",
    motivation:
      "Explore the application of AI to recyclable and non-recyclable waste classification.",
    role: "Research & development contributor",
    contribution:
      "I handled dataset preparation, contributed to the research writing, and managed the project. These responsibilities supported both the application and its research foundation.",
    live: null,
    visual: "basurascan",
    visualTitle: "A closer look at waste.",
    visualSubtitle: "Mobile waste classification research",
    status:
      "Research project. Add the study outcome, application status, and any approved publication links.",
    missing: {
      technologies:
        "Confirm the mobile framework, model, training tools, and data services used.",
      process:
        "Describe the dataset sources, preparation steps, research method, and team workflow.",
      decisions:
        "Explain a verified choice about data labeling, model selection, or mobile integration.",
      challenges:
        "Describe a dataset or project coordination challenge and how the team addressed it.",
    },
  },
  {
    slug: "rush-gym-wear",
    number: "03",
    name: "Rush Gym Wear",
    category: "Freelance · Web development",
    description:
      "A website for a clothing brand, developed as an independent client project.",
    overview:
      "Rush Gym Wear is a freelance website development project for a clothing brand. It represents my experience applying web development to a real client project.",
    motivation: "Develop a website for the Rush Gym Wear clothing brand.",
    role: "Freelance web developer",
    contribution:
      "I worked on the clothing brand’s website as a freelance web developer.",
    live: "https://rushgymwear.com",
    liveLabel: "Visit website",
    cover: {
      image: "rush-home.jpg",
      alt: "Rush Gym Wear homepage with white brand lettering, a red-and-black clothing photograph, and Shop Now and Our Story links.",
      caption: "Rush Gym Wear · Home screen",
    },
    screenshots: [],
    visual: "rush",
    visualTitle: "RUSH",
    visualSubtitle: "Gym wear · Client website",
    status:
      "Client website linked below. Add the delivery scope, launch details, and current maintenance arrangement.",
    missing: {
      technologies:
        "Confirm the website framework, hosting, and any commerce or content services.",
      process:
        "Describe the client brief, design and development work, feedback, and delivery.",
      decisions:
        "Document one technical decision and how it supported the client’s requirements.",
      challenges:
        "Share a specific client requirement or implementation challenge and its resolution.",
    },
  },
];

export const experience = [
  {
    brand: "usc",
    category: "Organizational leadership",
    role: "Acting Vice President of Technology",
    organization: "Microsoft Student Community — University of San Carlos",
    description:
      "Supporting the organization’s technical direction, coordinating technical initiatives and skilling programs, and overseeing development-related activities.",
  },
  {
    brand: "rush",
    category: "Independent client work",
    role: "Freelance Web Developer",
    organization: "Independent",
    description:
      "Developing functional websites for clients, including the Rush Gym Wear clothing brand.",
    project: "rush-gym-wear",
  },
  {
    category: "Academic research",
    role: "Research & Development Contributor",
    organization: "BasuraScan",
    description:
      "Dataset preparation, research writing, and project management for a mobile waste classification application.",
    project: "basurascan",
  },
];

export const achievements = [
  [
    "2025",
    "Regional Champion",
    "Erovoutika Robotics · Cebu Regionals",
    "erovoutika",
  ],
  ["2025", "National Top Ten Finalist", "Shell NXplorers", "nxplorers"],
  ["2025", "Champion", "CESAFI Computer Quizbowl", "cesafi"],
];

export const skills = [
  ["Programming & web", "JavaScript, HTML & CSS, Python"],
  ["Mobile & services", "React Native, Supabase"],
  ["Developer tools", "Git & GitHub, VS Code"],
  [
    "Research & coordination",
    "Applied machine learning workflows, dataset preparation, research writing, project management",
  ],
];
