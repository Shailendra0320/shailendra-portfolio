export const profile = {
  name: 'Shailendra Vishwakarma',
  firstName: 'Shailendra',
  lastName: 'Vishwakarma',
  location: 'Panna, Madhya Pradesh',
  phone: '+91-7987820587',
  email: '12654vishwakarmashailendra7@gmail.com',
  photo: `${import.meta.env.BASE_URL}shailendra.jpg`,
  tagline:
    'Building full-stack apps with React and Spring Boot — clean APIs, solid data, and UIs that ship.',
  summary:
    'B.Tech (IT) engineer who builds full-stack products with React on the frontend and Spring Boot backends. Hands-on with REST APIs, JWT auth, MySQL/MongoDB, and AI-assisted features. Strong problem-solving foundation from 750+ DSA problems.',
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
    stack: ['Java', 'Spring Boot', 'Microservices', 'JWT', 'MySQL', 'React', 'Docker'],
    highlights: [
      'Architected a 9-service Spring Boot microservices backend with Gateway and Eureka — 20+ REST endpoints secured via JWT.',
      'Designed Fenwick Tree rank queries and an Elo-style rating engine with Spring Data JPA + MySQL.',
      'Built a React frontend consuming APIs, with Gemini-powered performance summaries.',
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
    stack: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'React', 'Spring AI'],
    highlights: [
      'Built a full-stack booking platform with Spring Boot REST APIs and role-based JWT auth.',
      'Modeled MySQL schemas for users, bookings, and roles.',
      'Integrated an AI booking assistant and a responsive React UI.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'Microservices', 'JUnit'],
  },
  {
    title: 'Data & AI',
    items: ['MySQL', 'MongoDB', 'Gemini API', 'Spring AI', 'NLP (basics)'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Swagger', 'DSA'],
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
