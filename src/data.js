export const profile = {
  name: 'Naga Sai Pavan Sriram Koripalli',
  shortName: 'Sriram Koripalli',
  role: 'Java Full Stack Developer',
  location: 'Tadepalligudem, Andhra Pradesh',
  phone: '+91 99087 26366',
  phoneHref: 'tel:+919908726366',
  email: 'ksriram7105@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sriram-koripalli',
  github: 'https://github.com/sriram780',
  availability: 'Open to entry-level full stack roles',
  summary:
    'Computer Science Engineering student with hands-on experience in Java Full Stack Development using Java, Spring Boot, React.js and MySQL. Skilled in developing REST APIs, implementing backend business logic, managing databases, and building responsive web applications. Strong foundation in Object-Oriented Programming, Java Collections, and problem-solving.',
}

export const education = {
  school: 'Sri Vasavi Engineering College',
  degree: 'B.Tech — Computer Science and Engineering',
  years: '2023 – 2027',
  place: 'Tadepalligudem, Andhra Pradesh',
}

export const projects = [
  {
    id: 'adcampaign',
    index: '01',
    name: 'AdCampaign360',
    tag: 'Full Stack',
    subtitle: 'Digital advertising campaign & analytics platform',
    points: [
      'React.js frontend with Node.js and Express REST APIs for campaign operations.',
      'JWT authentication and role-based access for Admin and Advertiser users.',
      'Campaign creation, advertisement management, status tracking, and MySQL persistence.',
      'Analytics dashboard with impressions, clicks, CTR, conversions, CPC, and performance charts.',
    ],
    stack: ['React.js', 'Node.js', 'Express', 'JWT', 'MySQL'],
  },
  {
    id: 'campus',
    index: '02',
    name: 'Campus Network Access Control',
    tag: 'Systems',
    subtitle: 'Scalable captive portal for secure campus Wi-Fi',
    points: [
      'Captive portal flow for user authentication and network access control.',
      'JWT sessions with Redis, plus MySQL for persistent user records.',
      'Apache Kafka for real-time activity logging.',
      'Linux firewall and IPSet controls to tighten network security.',
    ],
    stack: ['JWT', 'Redis', 'MySQL', 'Apache Kafka', 'Linux'],
  },
]

export const skillGroups = [
  { title: 'Languages', items: ['Java', 'C', 'SQL'] },
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  { title: 'Backend', items: ['JDBC', 'Servlets', 'Spring', 'Spring Boot'] },
  { title: 'Data & Infra', items: ['MySQL', 'Redis', 'Apache Kafka', 'Linux'] },
  { title: 'Core', items: ['OOP', 'Java Collections', 'REST APIs', 'JWT'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Eclipse'] },
]

export const certifications = [
  {
    title: 'Back-End Developer — ABAP Cloud',
    org: 'SAP',
    date: 'Aug 2026',
  },
  {
    title: 'Full Stack Java',
    org: 'ExcelR EdTech Pvt. Ltd.',
    date: 'Jul 2026',
  },
  {
    title: 'MySQL 8.0 Database Developer',
    org: 'Oracle',
    date: 'Jul 2025',
  },
]

export const internship = {
  org: 'ExcelR EdTech Pvt. Ltd.',
  role: 'Full Stack Java — Short-Term Internship',
  date: 'Jul 2026',
}

export const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'path', label: 'Path' },
  { id: 'contact', label: 'Contact' },
]
