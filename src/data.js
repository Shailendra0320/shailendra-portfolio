export const profile = {
  name: 'Shailendra Vishwakarma',
  firstName: 'Shailendra',
  lastName: 'Vishwakarma',
  location: 'Panna, Madhya Pradesh',
  phone: '+91-7987820587',
  email: '12654vishwakarmashailendra7@gmail.com',
  photo: `${import.meta.env.BASE_URL}shailendra.jpg`,
  tagline:
    'Full-stack engineer focused on microservices, DSA, and shipping reliable Spring Boot + React products.',
  summary:
    'B.Tech (IT) engineer building full-stack products with React and Spring Boot. Strong in DSA, OOP, SDLC, and microservices architecture — with hands-on experience in REST APIs, RBAC, Kafka, Redis, Nginx, Swagger, CI/CD, and Spring AI. Comfortable across Python, SQL, and modern tooling for debugging, collaboration, and delivery.',
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
    stack: ['Java', 'Spring Boot', 'Microservices', 'JWT', 'MySQL', 'Redis', 'Nginx', 'Swagger UI', 'React', 'Docker'],
    highlights: [
      'Architected a 9-service Spring Boot microservices backend with Gateway and Eureka — 20+ REST endpoints secured via JWT.',
      'Designed Fenwick Tree rank queries and an Elo-style rating engine with Spring Data JPA + MySQL; used Redis for fast lookups.',
      'Documented APIs with Swagger UI, served behind Nginx, and built a React frontend with Gemini-powered summaries.',
    ],
  },
  {
    name: 'TrueLens',
    url: 'https://github.com/Shailendra0320/TrueLens',
    period: '03/2026 – Present',
    stack: ['Python', 'FastAPI', 'NLP', 'MongoDB', 'React'],
    highlights: [
      'Engineered a fake-review detection platform scoring reviews from multiple e-commerce sites.',
      'Applied NLP and reviewer-behavior analysis; split scraping, scoring, and analytics into services.',
      'Shipped a React dashboard with trust metrics and review insights.',
    ],
  },
  {
    name: 'Tripgenni',
    url: 'https://github.com/Shailendra0320/TripGenni',
    period: '09/2025 – 04/2026',
    stack: ['Java', 'Spring Boot', 'Spring AI', 'Gemini API', 'MySQL', 'React', 'JWT'],
    highlights: [
      'Built a Spring Boot trip-planning backend with REST APIs and JWT-protected routes.',
      'Integrated Spring AI + Gemini API for personalized trip suggestions.',
      'Delivered React UI for browsing trips and managing bookings end to end.',
    ],
  },
  {
    name: 'Bouncer Hub',
    url: 'https://github.com/Shailendra0320/BouncerHub',
    period: '11/2025 – Present',
    stack: ['Java', 'Spring Boot', 'JWT', 'RBAC', 'MySQL', 'React', 'Spring AI'],
    highlights: [
      'Built a full-stack booking platform with Spring Boot REST APIs, JWT auth, and RBAC.',
      'Modeled MySQL schemas for users, bookings, and roles.',
      'Integrated a Spring AI booking assistant and a responsive React UI.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Core strengths',
    items: [
      'DSA',
      'OOP',
      'SDLC',
      'Python',
      'Microservices Architecture',
      'Kafka',
      'Postman',
      'RBAC',
      'Spring AI',
    ],
  },
  {
    title: 'Languages & frameworks',
    items: [
      'Java',
      'JavaScript',
      'SQL',
      'Spring Boot',
      'FastAPI',
      'REST APIs',
      'React',
      'HTML',
      'CSS',
      'JUnit',
    ],
  },
  {
    title: 'Data, ML & AI',
    items: [
      'MySQL',
      'MongoDB',
      'Database Design',
      'DBMS',
      'Redis',
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'Machine Learning',
      'Gemini API',
      'Ollama',
    ],
  },
  {
    title: 'Tools, DevOps & soft skills',
    items: [
      'Git',
      'GitHub',
      'Jenkins',
      'CI/CD',
      'Nginx',
      'Swagger',
      'MySQL Workbench',
      'Docker',
      'Strong Problem Solving',
      'Analytical Thinking',
      'Debugging & Troubleshooting',
      'Team Collaboration',
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
