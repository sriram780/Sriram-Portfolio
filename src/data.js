export const profile = {
  name: 'Naga Sai Pavan Sriram Koripalli',
  shortName: 'Sriram Koripalli',
  title: 'Computer Science Engineering Student | Java Backend & Full-Stack Developer',
  location: 'Tadepalligudem, Andhra Pradesh',
  phone: '+91 99087 26366',
  phoneHref: 'tel:+919908726366',
  email: 'ksriram7105@gmail.com',
  emailLink: 'mailto:ksriram7105@gmail.com?subject=Portfolio%20enquiry%20for%20Sriram%20Koripalli&body=Hi%20Sriram%2C%0A%0A',
  linkedin: 'https://www.linkedin.com/in/sriram-koripalli',
  github: 'https://github.com/sriram780',
  resume: '/resume/Koripalli-Naga-Sai-Pavan-Sriram-Resume.pdf',
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
    category: 'Full-stack platform',
    description: 'A digital advertising campaign and analytics platform for managing ads, performance, and access roles in one focused workspace.',
    features: [
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
    category: 'Systems & security',
    description: 'A scalable captive portal concept for governing secure campus Wi-Fi access and making network activity observable in real time.',
    features: [
      'Captive portal flow for user authentication and network access control.',
      'JWT sessions with Redis, plus MySQL for persistent user records.',
      'Apache Kafka for real-time activity logging.',
      'Linux firewall and IPSet controls to tighten network security.',
    ],
    stack: ['JWT', 'Redis', 'MySQL', 'Apache Kafka', 'Linux'],
  },
]

export const skillGroups = [
  { title: 'Programming', items: ['Java', 'C', 'SQL', 'JavaScript'] },
  { title: 'Backend', items: ['Spring Boot', 'Spring', 'JDBC', 'Servlets', 'REST APIs', 'JWT'] },
  { title: 'Frontend', items: ['React.js', 'HTML', 'CSS'] },
  { title: 'Database', items: ['MySQL', 'Redis'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Apache Kafka', 'Linux', 'Eclipse'] },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
