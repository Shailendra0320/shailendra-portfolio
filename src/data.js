export const profile = {
  name: 'Shailendra Vishwakarma',
  firstName: 'Shailendra',
  lastName: 'Vishwakarma',
  title: 'Software Engineer',
  location: 'Panna, Madhya Pradesh',
  phone: '+91-7987820587',
  email: '12654vishwakarmashailendra7@gmail.com',
  photo: `${import.meta.env.BASE_URL}shailendra.jpg`,
  tagline:
    'Building systems that ship — microservices, full-stack apps, and AI-assisted features.',
  summary:
    'B.Tech (IT) engineer skilled in Core Java and Spring Boot microservices, with hands-on experience designing REST APIs, secure authentication, and scalable multi-service backends. Comfortable across the full stack (React / Next.js) and experienced integrating relational databases and AI-assisted features. Strong problem-solving foundation from 750+ solved DSA problems.',
  links: {
    github: 'https://github.com/Shailendra0320',
    linkedin: 'https://www.linkedin.com/in/shailendra-vishwakarma-8337292a0/',
    leetcode: 'https://leetcode.com/u/Shailu03/',
    codechef: 'https://www.codechef.com/users/shailu03',
    codeforces: 'https://codeforces.com/profile/Shailu_03',
  },
}

export const education = [
  {
    school: 'Oriental Institute of Science & Technology',
    degree: 'B.Tech — Information Technology',
    detail: 'CGPA 7.42',
    period: '2022 – 2026',
  },
  {
    school: 'Gurukul Public H.S. School, Panna',
    degree: 'Class 12th',
    detail: '87%',
    period: '2021',
  },
  {
    school: 'Maharishi Vidya Mandir, Panna',
    degree: 'Class 10th',
    detail: '84%',
    period: '2019',
  },
]

export const projects = [
  {
    name: 'RankEngine',
    url: 'https://github.com/Shailendra0320/rankengine',
    period: '04/2026 – Present',
    stack: [
      'Java',
      'Spring Boot',
      'Microservices',
      'JWT',
      'MySQL',
      'Python',
      'FastAPI',
      'React',
      'Docker',
    ],
    highlights: [
      'Architected a 9-service microservices backend with Spring Boot, Spring Cloud Gateway, and Eureka — 20+ REST endpoints secured via JWT.',
      'Designed a Fenwick Tree for O(log n) leaderboard rank queries and an Elo-style rating engine with Spring Data JPA.',
      'Built a Python FastAPI microservice for anomaly detection (scikit-learn) and rating prediction; React UI with Gemini-powered summaries.',
    ],
  },
  {
    name: 'TrueLens',
    url: 'https://github.com/Shailendra0320/TrueLens',
    period: '03/2026 – Present',
    stack: ['Python', 'FastAPI', 'NLP', 'MongoDB', 'React', 'Vite', 'Docker'],
    highlights: [
      'Engineered a fake-review detection platform that evaluates product reviews scraped from multiple e-commerce sites.',
      'Applied NLP and reviewer-behavior analysis to flag suspicious patterns; split scraping, scoring, caching, and analytics into FastAPI services.',
      'Shipped a React/Vite dashboard with real-time trust metrics and review insights.',
    ],
  },
  {
    name: 'Tripgenni',
    url: 'https://github.com/Shailendra0320/TripGenni',
    period: '09/2025 – 04/2026',
    stack: [
      'Java',
      'Spring Boot',
      'Spring AI',
      'Gemini API',
      'Ollama',
      'MySQL',
      'React',
      'JWT',
    ],
    highlights: [
      'Architected a microservices-based trip-planning backend with REST APIs for inter-service communication.',
      'Integrated an AI recommendation engine using Spring AI, Gemini API, and Ollama for personalized trip suggestions.',
      'Delivered end-to-end booking flows with JWT-protected routes and consistent MySQL schemas across services.',
    ],
  },
  {
    name: 'Bouncer Hub',
    url: 'https://github.com/Shailendra0320/BouncerHub',
    period: '11/2025 – Present',
    stack: [
      'Java',
      'Spring Boot',
      'JWT',
      'MySQL',
      'React',
      'Spring AI',
      'Gemini API',
    ],
    highlights: [
      'Built a scalable full-stack booking platform with RESTful APIs and role-based access control via JWT.',
      'Modeled efficient MySQL schemas for users, bookings, and roles with optimized queries.',
      'Integrated an AI-driven booking assistant using Spring AI and Gemini API; responsive React UI with real-time availability.',
    ],
  },
  {
    name: 'Blogging Website',
    url: 'https://github.com/Shailendra0320',
    period: '06/2025 – 11/2025',
    stack: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'React'],
    highlights: [
      'Built RESTful backend services supporting authentication and CRUD for posts and comments.',
      'Structured MySQL for efficient content storage and retrieval with multimedia upload support.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript (basics)', 'SQL'],
  },
  {
    title: 'Backend & APIs',
    items: [
      'Spring Boot',
      'Spring Cloud Gateway',
      'Eureka',
      'FastAPI',
      'Node.js',
      'Express',
      'REST APIs',
      'GraphQL',
      'JWT',
      'Microservices',
      'JUnit',
    ],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Data & ML',
    items: [
      'MySQL',
      'MongoDB',
      'scikit-learn',
      'NLP',
      'Gemini API',
      'Spring AI',
      'Ollama',
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      'Docker',
      'Git',
      'GitHub',
      'CI/CD',
      'Linux / Bash',
      'Kafka',
      'RabbitMQ',
      'Postman',
      'Swagger',
      'Nginx',
    ],
  },
]

export const achievements = [
  {
    label: 'Java Full Stack Development',
    detail: 'Certified — CodeforSuccess',
  },
  {
    label: '750+ DSA problems',
    detail: 'LeetCode & similar platforms',
    href: 'https://leetcode.com/u/Shailu03/',
  },
  {
    label: 'CodeChef 1616 (3★)',
    detail: 'Competitive programming',
    href: 'https://www.codechef.com/users/shailu03',
  },
  {
    label: 'Codeforces 1256 (Pupil)',
    detail: 'Competitive programming',
    href: 'https://codeforces.com/profile/Shailu_03',
  },
]
