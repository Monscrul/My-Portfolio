export const achievements = [
  [
    "2025",
    "Regional Champion",
    "Erovoutika Robotics · Cebu Regionals",
    "erovoutika"
  ],
  [
    "2025",
    "National Top Ten Finalist",
    "Shell NXplorers",
    "nxplorers"
  ],
  [
    "2025",
    "Champion",
    "CESAFI Computer Quizbowl",
    "cesafi"
  ]
];

export const brands = {
  "msc": {
    "name": "Microsoft Student Community — USC",
    "image": "msc-logo.png",
    "url": "https://microsoft-student-community.dcism.org",
    "dark": false
  },
  "usc": {
    "name": "University of San Carlos",
    "image": "usc-logo.png",
    "url": "https://usc.edu.ph/",
    "dark": false
  },
  "rush": {
    "name": "Rush Gym Wear",
    "image": "rush-logo.png",
    "url": "https://www.rushgymwear.com/",
    "dark": true
  },
  "erovoutika": {
    "name": "Erovoutika",
    "image": "erovoutika-logo.png",
    "url": "https://www.erovoutika.ph/",
    "dark": true
  },
  "nxplorers": {
    "name": "Shell NXplorers",
    "image": "nxplorers-logo.svg",
    "url": "https://nxplorers.com/",
    "dark": false
  },
  "cesafi": {
    "name": "CESAFI",
    "image": "cesafi-logo.png",
    "url": "https://cesafi.ph/",
    "dark": false
  }
};

export const experience = [
  {
    "brand": "msc",
    "category": "Organizational leadership",
    "role": "Acting Vice President for Technology",
    "organization": "Microsoft Student Community — University of San Carlos",
    "description": "Leading the Technology Bureau, establishing officer responsibilities, and overseeing technical development and support. I led the chapter website’s development and deployment, coordinate workshops and skilling initiatives, manage technical roadmaps, and contributed to organizing the Mini Demo Fair.",
    "dates": "July 2026–Present"
  },
  {
    "brand": "rush",
    "category": "Independent client work",
    "role": "Freelance Web Developer",
    "organization": "Independent",
    "description": "Designing and developing responsive client websites and web applications. My work includes databases, inventory and ordering workflows, domains, deployment, client collaboration, and post-launch technical support.",
    "project": "rush-gym-wear",
    "dates": "July 2026–Present"
  },
  {
    "category": "Academic research",
    "role": "Researcher & Project Developer",
    "organization": "BasuraScan — San Carlos School of Cebu, North Campus",
    "description": "Dataset preparation, research writing, and project management for a mobile waste classification application.",
    "project": "basurascan",
    "dates": "2024–2025"
  }
];

export const interests = [
  {
    "name": "Music",
    "text": "I produce music and perform under the artist name dojosaya."
  },
  {
    "name": "Guitar",
    "text": "I play guitar as another way to make music outside coding."
  },
  {
    "name": "Cars",
    "text": "Cars are an interest I also explore through Carlee, my daily car-guessing game."
  },
  {
    "name": "Movies",
    "text": "I enjoy watching movies when I take a break from building things."
  },
  {
    "name": "Anime",
    "text": "Anime is also part of what I enjoy outside technology."
  }
];

export const profile = {
  "name": "Dominic Yap",
  "fullName": "Dominic John S. Yap",
  "role": "Software Developer & Information Systems Student",
  "location": "Cebu City, Philippines",
  "email": "dominicjohnyap2007@gmail.com",
  "github": "https://github.com/Monscrul",
  "linkedin": "https://www.linkedin.com/in/dominic-john-yap-63665b25a/",
  "resume": "/assets/documents/dominic-yap-resume.pdf",
  "url": "https://dominic-yap-portfolio.vercel.app/"
};

export const projectLooks = {
  "carlee": {
    "heroScreenshot": 0,
    "title": "Carlee.<br>Guess today’s car.",
    "overview": "A daily puzzle for car people.",
    "development": "Under Carlee’s hood."
  },
  "basurascan": {
    "title": "BasuraScan.<br>Waste, classified.",
    "overview": "Waste classification, through research.",
    "development": "From dataset to mobile application."
  },
  "rush-gym-wear": {
    "title": "Rush Gym Wear.",
    "overview": "A web presence for Rush.",
    "development": "Building the brand’s website."
  }
};

export const projects = [
  {
    "slug": "carlee",
    "number": "01",
    "name": "Carlee",
    "category": "Independent project",
    "description": "A daily car-guessing game, independently built and brought to the web.",
    "overview": "Carlee is a Wordle-inspired game for automotive enthusiasts. Daily and Unlimited modes combine color-coded vehicle feedback, search, user accounts, and streak tracking with a curated dataset of approximately 260 vehicles.",
    "motivation": "Bring the daily guessing-game format to car identification.",
    "role": "Founder, solo developer & designer",
    "contribution": "I designed the gameplay and interface, curated the vehicle dataset, built the game logic and search, integrated Supabase authentication, and deployed the application.",
    "live": "https://playcarlee.com",
    "liveLabel": "Play Carlee",
    "cover": {
      "image": "carlee-home.jpg",
      "alt": "Carlee home screen with its tire-and-flame logo and Play Daily button.",
      "caption": "Carlee · Home screen"
    },
    "screenshots": [
      {
        "image": "carlee-gameplay.jpg",
        "alt": "Carlee compares a Ferrari 308 GTSi guess against the daily car using color-coded attributes.",
        "caption": "Playing a daily puzzle: comparing make, country, drive, body, horsepower, year, and engine."
      },
      {
        "image": "carlee-result.jpg",
        "alt": "Carlee’s completed puzzle shows a Ferrari Testarossa, a car silhouette, and result sharing controls.",
        "caption": "The completed puzzle and result-sharing screen."
      }
    ],
    "visual": "carlee",
    "visualTitle": "A new car. Every day.",
    "visualSubtitle": "Daily car-guessing game",
    "status": "Launched in August 2026 and currently live. Ongoing work includes player-feedback improvements, interface refinements, dataset expansion, and gameplay updates.",
    "timeline": "2025–Present",
    "details": {
      "technologies": "HTML, CSS, and vanilla JavaScript; a JSON vehicle dataset; Supabase accounts and authentication; Vercel hosting; Spaceship domain registration; Cloudflare DNS and analytics; GitHub version control.",
      "process": "I designed the gameplay and UI from scratch, curated approximately 260 vehicles, and built search, attribute feedback, and Daily and Unlimited modes. I integrated authentication, tested desktop and mobile layouts, deployed to Vercel, and refined the experience using community feedback.",
      "decisions": "Vanilla JavaScript keeps the application lightweight and gives me direct control over its interface and game logic. The dataset distinguishes model generations. Daily mode shares a mystery vehicle each day; Unlimited supports continued play. The specific daily vehicle selection algorithm is still pending confirmation.",
      "challenges": "Similar model names, generations, and alternative chassis codes made vehicle search confusing. I improved the dataset structure, displayed specifications in results, and added chassis-code search support."
    }
  },
  {
    "slug": "basurascan",
    "number": "02",
    "name": "BasuraScan",
    "category": "Applied AI · Research",
    "description": "Exploring waste classification through a mobile application and applied AI research.",
    "overview": "BasuraScan is a research-oriented mobile application focused on classifying waste as recyclable or non-recyclable. My work covered dataset preparation, research writing, and project management.",
    "motivation": "Explore the application of AI to recyclable and non-recyclable waste classification.",
    "role": "Research & development contributor",
    "contribution": "I prepared and augmented image datasets, contributed to the research writing, managed the project, and evaluated classification performance. This was a team research project at San Carlos School of Cebu with Chaz Eldrake Ong, Ela Jhoanna Bugas, Ethan Bernward Remo, Sariah Haley Mata, and Constance Dino Kintanar.",
    "live": null,
    "cover": {
      "image": "basurascan-icon.png",
      "kind": "icon",
      "alt": "BasuraScan app icon: a green waste bin with white scan brackets and a red dot."
    },
    "details": {
      "technologies": "The team built the mobile application with JavaScript, React Native, and SQLite. Model training used Python and PyTorch, with a pretrained EfficientNet-B3 network adapted for two waste classes.",
      "process": "The study combined 23,589 images from three public Kaggle datasets, grouped them into recyclable and non-recyclable categories, and applied resizing, normalization, and training augmentation. Model validation and Android usability testing were evaluated separately.",
      "decisions": "Transfer learning adapted EfficientNet-B3 to the two-class task. The training pipeline used class-weighted loss to address imbalance. Local storage and offline functionality supported use without a continuous internet connection.",
      "challenges": "Dataset diversity, class imbalance, and mobile hardware constraints shaped the work. Augmentation introduced variation in lighting and orientation. The paper recommends broader local waste data and further on-device classification evaluation."
    },
    "poster": {
      "image": "basurascan-poster.jpg",
      "href": "/assets/documents/basurascan-research-poster.pdf",
      "width": 1100,
      "height": 1466,
      "alt": "BasuraScan research poster presenting the team, methods, app interface, and study results."
    },
    "documents": [
      {
        "href": "/assets/documents/basurascan-research-paper.pdf",
        "label": "Read research paper"
      },
      {
        "href": "/assets/documents/basurascan-research-poster.pdf",
        "label": "View research poster"
      }
    ],
    "visual": "basurascan",
    "visualTitle": "A closer look at waste.",
    "visualSubtitle": "Mobile waste classification research",
    "status": "The study reports approximately 98–99% validation accuracy during model training. Android testing assessed usability and offline functionality; real-world classification accuracy on deployed devices was not directly measured. This is an academic research prototype, with no public app download linked."
  },
  {
    "slug": "rush-gym-wear",
    "number": "03",
    "name": "Rush Gym Wear",
    "category": "Freelance · Web development",
    "description": "A custom e-commerce website for gym apparel, with inventory, ordering, and GCash receipt submission.",
    "overview": "Rush Gym Wear needed a responsive storefront to showcase gym apparel and simplify ordering for a local Philippine business. The custom website combines product variants, inventory management, and an accessible payment workflow.",
    "motivation": "Help customers browse available sizes and colors, check product availability, and place orders online.",
    "role": "Freelance web developer",
    "contribution": "I designed, developed, and deployed the storefront, catalog, variants, inventory administration, ordering workflow, GCash QR payments, and receipt submission. I also handled hosting, domain configuration, client handover, and post-launch improvements.",
    "live": "https://rushgymwear.com",
    "liveLabel": "Visit website",
    "cover": {
      "image": "rush-home.jpg",
      "alt": "Rush Gym Wear homepage with white brand lettering, a red-and-black clothing photograph, and Shop Now and Our Story links.",
      "caption": "Rush Gym Wear · Home screen"
    },
    "screenshots": [],
    "visual": "rush",
    "visualTitle": "RUSH",
    "visualSubtitle": "Gym wear · Client website",
    "status": "Launched in September 2026 and currently live. Post-launch work includes inventory integration, deployment troubleshooting, ordering improvements, and technical maintenance.",
    "details": {
      "technologies": "Next.js, Supabase backend and database, Vercel hosting, and GitHub. Custom commerce includes a product catalog, size/color variants, inventory administration, ordering, and GCash QR payment with receipt submission.",
      "process": "I gathered client requirements and designed around the brand identity. After building the Next.js storefront and integrating Supabase product data, I expanded the original Google Forms workflow into on-site ordering and receipt uploads, developed inventory tools, and configured client-owned deployment and domain settings.",
      "decisions": "Supabase manages product data and inventory dynamically rather than embedding static stock information in frontend code. This supports ordering and administrative features without manual frontend edits.",
      "challenges": "I troubleshot database connections and product-variant retrieval across storefront and administration tools. Client handover also required resolving GitHub/Vercel deployment authorization and environment-configuration issues."
    }
  }
];

export const skills = [
  [
    "Programming & web",
    "JavaScript, HTML & CSS, Python"
  ],
  [
    "Mobile & services",
    "React Native, Supabase"
  ],
  [
    "Developer tools",
    "Git & GitHub, VS Code"
  ],
  [
    "Research & coordination",
    "Applied machine learning workflows, dataset preparation, research writing, project management"
  ]
];
