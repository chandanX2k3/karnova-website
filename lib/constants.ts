// Company Information
export const companyInfo = {
  name: 'Karnova Technologies',
  tagline: 'Where deep tech meets human mindset',
  description: 'We are a collective of visionary technologies and specialists focused on building the future.',
  email: 'karnovatechnologies@gmail.com',
  phone: '+1 (555) 123-4567',
  address: 'San Francisco, CA 94105',
  linkedin: 'https://linkedin.com/company/karnova',
  twitter: 'https://twitter.com/karnova',
  github: 'https://github.com/karnova',
};

// Navigation Links
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Internships', href: '/internships' },
  { label: 'Contact', href: '/contact' },
];

// Services
export const services = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    description: 'Build intelligent systems that learn and adapt to your business needs.',
    icon: 'Brain',
    features: [
      'Custom ML Models',
      'Data Pipeline Development',
      'Model Optimization',
      'Real-time Inference',
    ],
  },
  {
    id: 2,
    title: 'Quantum Computing Applications',
    description: 'Leverage quantum computing to solve complex problems at scale.',
    icon: 'Zap',
    features: [
      'Quantum Algorithm Design',
      'Hybrid Quantum-Classical Systems',
      'Circuit Optimization',
      'Problem Mapping',
    ],
  },
  {
    id: 3,
    title: 'Healthcare Technology',
    description: 'Innovative solutions for modern healthcare challenges.',
    icon: 'Heart',
    features: [
      'Medical Imaging AI',
      'Patient Data Systems',
      'Diagnostic Tools',
      'HIPAA Compliance',
    ],
  },
];

// Statistics
export const stats = [
  { label: 'Projects Completed', value: 150, suffix: '+' },
  { label: 'Happy Clients', value: 85, suffix: '+' },
  { label: 'Team Members', value: 45, suffix: '+' },
  { label: 'Years in Tech', value: 12, suffix: '+' },
];

// How We Work
export const processSteps = [
  {
    number: 1,
    title: 'Discovery & Analysis',
    description: 'We understand your challenges, goals, and technical requirements in detail.',
  },
  {
    number: 2,
    title: 'Strategic Planning',
    description: 'We design a comprehensive roadmap tailored to your business needs.',
  },
  {
    number: 3,
    title: 'Development & Innovation',
    description: 'Our team builds cutting-edge solutions using the latest technologies.',
  },
  {
    number: 4,
    title: 'Launch & Support',
    description: 'We deploy your solution and provide ongoing support and optimization.',
  },
];

// Featured Projects
export const projects = [
  {
    id: 1,
    title: 'AI-Powered Diagnostic Platform',
    category: 'AI',
    description: 'Revolutionary medical imaging analysis using deep learning.',
    image: '/projects/diagnostic.jpg',
    tech: ['Python', 'TensorFlow', 'React'],
    results: {
      challenge: 'Healthcare providers needed faster, more accurate diagnostic tools.',
      solution: 'Built an AI system that analyzes medical images with 99.2% accuracy.',
      impact: '40% reduction in diagnosis time, improved patient outcomes.',
    },
  },
  {
    id: 2,
    title: 'Quantum Algorithm Library',
    category: 'Quantum',
    description: 'Open-source quantum computing algorithms for enterprise use.',
    image: '/projects/quantum.jpg',
    tech: ['Qiskit', 'Python', 'AWS'],
    results: {
      challenge: 'Enterprises lacked accessible quantum computing solutions.',
      solution: 'Created a comprehensive library of optimized quantum algorithms.',
      impact: '500+ developers using the library, millions in enterprise value.',
    },
  },
  {
    id: 3,
    title: 'Healthcare Data Platform',
    category: 'Healthcare',
    description: 'Secure, HIPAA-compliant patient data management system.',
    image: '/projects/healthcare.jpg',
    tech: ['Node.js', 'PostgreSQL', 'React'],
    results: {
      challenge: 'Hospitals struggled with fragmented patient data systems.',
      solution: 'Built integrated platform with real-time data synchronization.',
      impact: '15 hospitals, 2M+ patient records, zero security incidents.',
    },
  },
  {
    id: 4,
    title: 'ML-Powered Analytics Dashboard',
    category: 'AI',
    description: 'Real-time analytics with predictive insights.',
    image: '/projects/analytics.jpg',
    tech: ['React', 'FastAPI', 'PostgreSQL'],
    results: {
      challenge: 'Companies needed actionable insights from their data.',
      solution: 'Built dashboard with ML-powered predictions and anomaly detection.',
      impact: 'Clients increased revenue by average 25% using insights.',
    },
  },
  {
    id: 5,
    title: 'Blockchain Integration Suite',
    category: 'Web',
    description: 'Enterprise blockchain solutions for supply chain.',
    image: '/projects/blockchain.jpg',
    tech: ['Solidity', 'Web3.js', 'Next.js'],
    results: {
      challenge: 'Supply chains needed transparency and traceability.',
      solution: 'Deployed blockchain-based tracking system.',
      impact: '30% reduction in counterfeits, full product traceability.',
    },
  },
  {
    id: 6,
    title: 'Mobile Health App',
    category: 'Mobile',
    description: 'Patient engagement and monitoring mobile application.',
    image: '/projects/mobile.jpg',
    tech: ['React Native', 'Firebase', 'Python'],
    results: {
      challenge: 'Patients needed easy way to monitor health metrics.',
      solution: 'Built comprehensive mobile app with cloud integration.',
      impact: '100K+ downloads, 4.8 star rating, daily active users increasing 15%.',
    },
  },
];

// Testimonials
export const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Chief Medical Officer',
    company: 'HealthTech Solutions',
    image: '/testimonials/sarah.jpg',
    quote: 'Karnova transformed our diagnostic capabilities. Their AI solution increased accuracy while reducing costs.',
  },
  {
    name: 'James Mitchell',
    title: 'CTO',
    company: 'Enterprise Systems Inc',
    image: '/testimonials/james.jpg',
    quote: 'Working with Karnova was a game-changer. They delivered quantum solutions beyond our expectations.',
  },
  {
    name: 'Lisa Rodriguez',
    title: 'Product Director',
    company: 'NextGen Analytics',
    image: '/testimonials/lisa.jpg',
    quote: 'Exceptional team, exceptional results. Their innovation mindset is contagious.',
  },
];

// Team Members
export const teamMembers = [
  {
    name: 'Alex Kumar',
    title: 'Founder & CEO',
    bio: 'PhD in Computer Science, 15+ years building deep tech companies.',
    image: '/team/alex.jpg',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Maria Santos',
    title: 'CTO',
    bio: 'Former Google researcher, expert in quantum computing and AI.',
    image: '/team/maria.jpg',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'David Park',
    title: 'Head of Healthcare',
    bio: 'Medical technologist with 12 years of healthcare IT experience.',
    image: '/team/david.jpg',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Emma Wilson',
    title: 'Lead Designer',
    bio: 'Design thinking expert creating intuitive AI interfaces.',
    image: '/team/emma.jpg',
    social: { linkedin: '#', twitter: '#' },
  },
];

// Company Milestones
export const milestones = [
  { year: 2012, title: 'Founded', description: 'Started with a mission to bridge deep tech and real-world problems.' },
  { year: 2015, title: 'Series A', description: 'Raised $5M to expand team and accelerate product development.' },
  { year: 2018, title: 'Healthcare Focus', description: 'Launched healthcare division, partnered with major hospital networks.' },
  { year: 2021, title: 'Quantum Division', description: 'Became pioneer in quantum computing applications.' },
  { year: 2023, title: 'Global Expansion', description: 'Opened offices in EU and APAC regions.' },
  { year: 2025, title: 'AI Leadership', description: 'Recognized as innovator in enterprise AI solutions.' },
];

// FAQ Data
export const faqData = [
  {
    category: 'Services',
    questions: [
      {
        q: 'What services do you offer?',
        a: 'We specialize in AI & Machine Learning, Quantum Computing Applications, and Healthcare Technology solutions. Each service is tailored to your specific business needs.',
      },
      {
        q: 'Do you work with startups?',
        a: 'Yes, we work with organizations of all sizes, from ambitious startups to Fortune 500 companies. We have flexible engagement models to fit different budgets.',
      },
      {
        q: 'What is your typical project timeline?',
        a: 'Project timelines vary based on complexity. Small projects typically take 2-3 months, while enterprise solutions may take 6-12 months. We provide detailed timelines during the discovery phase.',
      },
    ],
  },
  {
    category: 'Internships',
    questions: [
      {
        q: 'What qualifications do you look for?',
        a: 'We look for passion for technology, curiosity, and willingness to learn. Academic background matters less than your drive to solve real problems.',
      },
      {
        q: 'Is the internship paid?',
        a: 'Yes, all internships are paid. We offer competitive compensation, equity options, and professional development opportunities.',
      },
      {
        q: 'What is the duration?',
        a: 'Our internships are typically 3-6 months, with flexibility for academic calendars. Full-time and part-time options are available.',
      },
    ],
  },
];

// Internship Benefits
export const benefits = [
  { title: 'Competitive Salary', description: 'Industry-competitive compensation starting at $25/hour' },
  { title: 'Equity Options', description: 'Stock options to own a piece of the future' },
  { title: 'Mentorship', description: 'Direct mentoring from senior engineers and leaders' },
  { title: 'Learning Budget', description: '$2,000 annual budget for courses and conferences' },
  { title: 'Flexible Schedule', description: 'Work-life balance with flexible hours' },
  { title: 'Health Benefits', description: 'Comprehensive health and wellness coverage' },
];

// Job Openings
export const jobOpenings = [
  {
    id: 1,
    title: 'Machine Learning Engineer',
    level: 'Senior',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Build state-of-the-art ML systems for healthcare applications.',
    requirements: ['5+ years ML experience', 'Python expertise', 'Research publications'],
  },
  {
    id: 2,
    title: 'Quantum Algorithm Developer',
    level: 'Senior',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop next-generation quantum algorithms for enterprise problems.',
    requirements: ['PhD in Physics/CS', 'Quantum computing experience', 'Publication record'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    level: 'Mid',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Build scalable web platforms for our healthcare products.',
    requirements: ['3+ years full stack', 'React & Node.js', 'Database design'],
  },
];

// Application Process Steps
export const applicationProcess = [
  { step: 1, title: 'Application', description: 'Submit your resume and a brief introduction.' },
  { step: 2, title: 'Phone Screen', description: 'Brief conversation about your background and interests.' },
  { step: 3, title: 'Technical Interview', description: 'Demonstrate your technical skills through problem-solving.' },
  { step: 4, title: 'Offer', description: 'Receive offer and discuss terms.' },
];

// Intern Testimonials
export const internTestimonials = [
  {
    name: 'Alex Thompson',
    role: 'AI Intern',
    year: '2024',
    image: '/testimonials/intern-alex.jpg',
    quote: 'This internship accelerated my career by 2 years. The mentorship and real-world projects are invaluable.',
  },
  {
    name: 'Priya Patel',
    role: 'Quantum Computing Intern',
    year: '2024',
    image: '/testimonials/intern-priya.jpg',
    quote: 'Working on quantum algorithms was a dream. The team is incredibly supportive and intellectually challenging.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Full Stack Intern',
    year: '2024',
    image: '/testimonials/intern-marcus.jpg',
    quote: 'Best decision ever. I shipped features that are now used by thousands of healthcare professionals.',
  },
];

// Technology Stack
export const techStack = [
  {
    category: 'AI/ML',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    category: 'Quantum',
    technologies: ['Qiskit', 'Cirq', 'PennyLane', 'AWS Braket', 'Azure Quantum'],
  },
  {
    category: 'Backend',
    technologies: ['Python', 'Node.js', 'Go', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'D3.js'],
  },
  {
    category: 'Cloud',
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker'],
  },
  {
    category: 'Healthcare',
    technologies: ['HL7', 'FHIR', 'HIPAA', 'Medical Imaging', 'IoT Sensors'],
  },
];

// Cookie Consent
export const cookieConsent = {
  title: 'We respect your privacy',
  description: 'We use cookies to enhance your experience. You can choose what to accept.',
  essential: 'Essential cookies help make this website work. They are always on.',
  analytics: 'Analytics cookies help us understand how our website is used.',
  marketing: 'Marketing cookies are used to deliver you ads relevant to you.',
};
