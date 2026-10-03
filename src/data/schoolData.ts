export interface AcademicStage {
  id: string;
  title: string;
  grades: string;
  focus: string;
  description: string;
  highlights: string[];
  image: string;
  badgeColor: string;
}

export interface Club {
  id: string;
  name: string;
  category: string;
  description: string;
  iconName: string;
  color: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  grade: string;
  avatar: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
  year: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'admissions' | 'academics' | 'facilities';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'classrooms' | 'sports' | 'events' | 'arts' | 'student-life';
  imageUrl: string;
  alt: string;
  caption: string;
}

export const SCHOOL_INFO = {
  name: 'Sunrise Public School',
  tagline: 'Learn Today. Lead Tomorrow.',
  location: 'Peelamedu, Coimbatore, Tamil Nadu, India',
  address: 'Sunrise Public School, Peelamedu, Coimbatore, Tamil Nadu 641004, India',
  phone: '+91 98765 12345',
  altPhone: '+91 98765 54321',
  email: 'hello@sunriseschool.example',
  admissionsEmail: 'admissions@sunriseschool.example',
  officeHours: 'Monday – Saturday: 8:30 AM – 4:30 PM',
  trustStrip: 'Pre-Primary to Grade 12 • Co-Educational • Day School',
  disclaimer: 'Portfolio Demo — Fictional School Concept'
};

export const QUICK_STATS = [
  { value: '18+', label: 'Years of Learning', subtext: 'Inspiring young minds', color: 'from-orange-500 to-amber-500' },
  { value: '2,000+', label: 'Students', subtext: 'Pre-Primary to Grade 12', color: 'from-amber-400 to-yellow-500' },
  { value: '120+', label: 'Educators & Staff', subtext: 'Passionate mentorship', color: 'from-sky-400 to-blue-500' },
  { value: '30+', label: 'Clubs & Activities', subtext: 'Beyond the classroom', color: 'from-emerald-400 to-green-500' },
];

export const ACADEMIC_STAGES: AcademicStage[] = [
  {
    id: 'early-years',
    title: 'Early Years',
    grades: 'Pre-Primary (Nursery - UKG)',
    focus: 'Play, language, discovery and foundational development.',
    description: 'A joyful, sensory-rich environment where young children explore early numeracy, language acquisition, social bonding, and imaginative play.',
    highlights: ['Activity-Based Learning', 'Phonics & Storytelling', 'Motor Skills & Play Area', 'Nurturing Childcare'],
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200'
  },
  {
    id: 'primary-school',
    title: 'Primary School',
    grades: 'Grades 1–5',
    focus: 'Strong fundamentals, curiosity and confidence.',
    description: 'Building deep foundational skills in mathematics, languages, science, and social awareness while sparking natural curiosity and collaborative habits.',
    highlights: ['Inquiry-Based Science', 'Bilingual Literacy', 'Mathematical Thinking', 'Creative Arts Integration'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200'
  },
  {
    id: 'middle-school',
    title: 'Middle School',
    grades: 'Grades 6–8',
    focus: 'Exploration, critical thinking and collaboration.',
    description: 'Guiding adolescents through analytical thinking, hands-on lab experiments, digital literacy, and active participation in sports and clubs.',
    highlights: ['STEM & Coding Modules', 'Interdisciplinary Projects', 'Debate & Public Speaking', 'Field & Environmental Trips'],
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200'
  },
  {
    id: 'secondary-school',
    title: 'Senior School',
    grades: 'Grades 9–10',
    focus: 'Academic depth and examination readiness.',
    description: 'Fostering conceptual mastery, problem-solving, structured revision strategies, and career counseling to prepare students for core board benchmarks.',
    highlights: ['Advanced Science Labs', 'Math Aptitude Labs', 'Structured Study Circles', 'Personalized Mentoring'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-green-100 text-green-800 border-green-200'
  },
  {
    id: 'senior-secondary',
    title: 'Senior Secondary',
    grades: 'Grades 11–12',
    focus: 'Specialized learning and future pathways.',
    description: 'Offering specialized streams (Science, Commerce, & Humanities) with rigorous academic rigor, entrance preparation guidance, and leadership roles.',
    highlights: ['Stream-Specific Labs', 'Career & Entrance Guidance', 'Student Council Leadership', 'Research Projects'],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200'
  }
];

export const LEARNING_EXPERIENCE = [
  {
    id: 'curious-minds',
    title: 'Curious Minds',
    description: 'Encouraging students to ask bold questions, test hypothesis, and explore ideas with open-minded curiosity.',
    iconName: 'Sparkles',
    accentColor: 'border-orange-200 bg-orange-50 text-orange-600'
  },
  {
    id: 'creative-thinking',
    title: 'Creative Thinking',
    description: 'Making room for imagination, design, original thinking, and expressive art across every discipline.',
    iconName: 'Palette',
    accentColor: 'border-amber-200 bg-amber-50 text-amber-600'
  },
  {
    id: 'active-learning',
    title: 'Active Learning',
    description: 'Learning through hands-on projects, real-world experiments, teamwork, and interactive technology.',
    iconName: 'Lightbulb',
    accentColor: 'border-sky-200 bg-sky-50 text-sky-600'
  },
  {
    id: 'future-skills',
    title: 'Future Skills',
    description: 'Building digital literacy, effective communication, analytical problem solving, and ethical leadership.',
    iconName: 'Zap',
    accentColor: 'border-emerald-200 bg-emerald-50 text-emerald-600'
  }
];

export const CLUBS: Club[] = [
  { id: 'robotics', name: 'Robotics Club', category: 'Innovation', description: 'Designing, building, and programming autonomous robots and smart devices.', iconName: 'Cpu', color: 'bg-sky-50 text-sky-700 border-sky-200' },
  { id: 'young-scientists', name: 'Young Scientists', category: 'STEM', description: 'Conducting exciting experiments, environmental research, and science expos.', iconName: 'FlaskConical', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { id: 'art-studio', name: 'Art Studio', category: 'Creative', description: 'Exploring painting, pottery, sculpture, digital design, and folk art forms.', iconName: 'Paintbrush', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { id: 'music-club', name: 'Music Club', category: 'Performing Arts', description: 'Vocal training, classical & modern instrumental ensembles, and choir practice.', iconName: 'Music', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { id: 'literary-club', name: 'Literary Club', category: 'Language', description: 'Creative writing, poetry slams, book reviews, and school newspaper publishing.', iconName: 'BookOpen', color: 'bg-rose-50 text-rose-700 border-rose-200' },
  { id: 'eco-warriors', name: 'Eco Warriors', category: 'Environment', description: 'Campus recycling drives, organic gardening, solar energy awareness, and tree planting.', iconName: 'Leaf', color: 'bg-green-50 text-green-700 border-green-200' },
  { id: 'sports-academy', name: 'Sports Academy', category: 'Fitness', description: 'Specialized coaching in athletics, basketball, badminton, cricket, and chess.', iconName: 'Trophy', color: 'bg-orange-50 text-orange-700 border-orange-200' },
  { id: 'public-speaking', name: 'Public Speaking', category: 'Leadership', description: 'Debating, Model UN, declamation, and building persuasive presentation skills.', iconName: 'Mic', color: 'bg-blue-50 text-blue-700 border-blue-200' }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'sports-carnival',
    title: 'Sunrise Annual Sports Carnival Celebrates Athleticism & Teamwork',
    category: 'Events',
    date: 'October 12, 2026',
    description: 'Students across all houses came together for an exhilarating day of track and field events, house spirit, and friendly sportsmanship.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80',
    readTime: '3 min read'
  },
  {
    id: 'innovation-week',
    title: 'Young Innovators Showcase Sustainable Projects at Innovation Week',
    category: 'Academics',
    date: 'September 28, 2026',
    description: 'Middle and Senior school students presented working prototypes ranging from solar irrigation models to bio-degradable packaging alternatives.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80',
    readTime: '4 min read'
  },
  {
    id: 'new-academic-year',
    title: 'Welcome to a New Academic Year of Growth and Friendship',
    category: 'Campus Life',
    date: 'June 05, 2026',
    description: 'The campus buzzed with joy as new and returning students stepped into upgraded interactive classrooms and refurbished activity spaces.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    readTime: '2 min read'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Meera R.',
    role: 'Parent of Grade 5 Student',
    quote: 'Sunrise has created an environment where our child feels comfortable asking questions and trying new things. Her confidence in mathematics and public speaking has soared!',
    grade: 'Grade 5',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Arun K.',
    role: 'Parent of Grade 8 Student',
    quote: 'We love the balance between academics, activities and personal development. Teachers take genuine interest in each student’s individual learning pace and talents.',
    grade: 'Grade 8',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't3',
    name: 'Priya S.',
    role: 'Parent of Grade 3 Student',
    quote: 'The teachers make learning feel exciting and meaningful every single day. My daughter looks forward to school every morning with a big smile.',
    grade: 'Grade 3',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80'
  }
];

export const CORE_VALUES = [
  { title: 'Curiosity', description: 'Constantly questioning, seeking understanding, and remaining lifelong eager learners.', iconName: 'Compass', color: 'bg-orange-100 text-orange-600' },
  { title: 'Respect', description: 'Valuing diversity, listening empathetically, and honoring fellow peers and community.', iconName: 'Heart', color: 'bg-rose-100 text-rose-600' },
  { title: 'Integrity', description: 'Choosing honesty, fairness, and strong moral principles in all actions and choices.', iconName: 'ShieldCheck', color: 'bg-blue-100 text-blue-600' },
  { title: 'Courage', description: 'Embracing challenges, learning from mistakes, and standing up for positive values.', iconName: 'Flame', color: 'bg-amber-100 text-amber-600' },
  { title: 'Kindness', description: 'Demonstrating compassion, helpfulness, and inclusive friendship toward everyone.', iconName: 'Smile', color: 'bg-emerald-100 text-emerald-600' },
  { title: 'Responsibility', description: 'Taking ownership of personal growth, environmental stewardship, and community action.', iconName: 'Award', color: 'bg-purple-100 text-purple-600' }
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'a1', title: 'Regional STEM Olympiad Champions', category: 'Academic Excellence', description: 'Sunrise Senior team bagged top honors for automated solar tracking project.', badge: 'First Place', year: '2026' },
  { id: 'a2', title: 'District Interschool Athletics Cup', category: 'Sports & Fitness', description: 'Under-16 squad secured 8 gold medals in sprint and relay events.', badge: 'Overall Trophy', year: '2025' },
  { id: 'a3', title: 'State Level Youth Eco Innovation Award', category: 'Innovation', description: 'Recognized for school-wide rainwater harvesting and plastic-free campaign.', badge: 'Eco Leadership', year: '2025' },
  { id: 'a4', title: 'Inter-School Classical & Fusion Dance Championship', category: 'Creative Arts', description: 'Cultural troupe received special jury recognition for choreography.', badge: 'Best Performance', year: '2026' },
  { id: 'a5', title: 'Youth Model UN Outstanding Delegation', category: 'Leadership', description: 'Student delegates received 3 Best Speaker citations at Coimbatore MUN.', badge: 'Best Delegation', year: '2026' },
  { id: 'a6', title: 'Community Literacy Outreach Citation', category: 'Community Service', description: 'Student volunteers mentored 150+ neighborhood children in foundational reading.', badge: 'Social Impact', year: '2025' }
];

export const CAMPUS_FACILITIES = [
  { title: 'Smart Classrooms', description: 'Ergonomic furniture, interactive digital displays, and naturally ventilated airy learning spaces.', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80', badge: 'Interactive Learning' },
  { title: 'Science Laboratories', description: 'Fully equipped Physics, Chemistry, and Biology labs complying with modern safety standards.', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', badge: 'Hands-on Science' },
  { title: 'Central Knowledge Library', description: 'Over 12,000 fiction, reference books, periodicals, and cozy reading nooks for all age groups.', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80', badge: 'Resource Hub' },
  { title: 'Technology & Robotics Center', description: 'High-speed computer labs, coding workstations, and 3D printing equipment for young creators.', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', badge: 'Digital Excellence' },
  { title: 'Sports & Athletic Complex', description: 'Multi-purpose synthetic basketball court, badminton hall, football field, and outdoor athletics track.', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80', badge: 'Sports & Fitness' },
  { title: 'Creative Arts & Music Studio', description: 'Acoustically attuned spaces for choir practice, instrumental music, drama, and visual studio arts.', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80', badge: 'Creative Expression' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: 'Interactive Science Experiment', category: 'classrooms', imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', alt: 'Students conducting chemistry experiment in modern lab', caption: 'Hands-on discovery in the Chemistry laboratory.' },
  { id: 'g2', title: 'Annual Sports Day Sprint Event', category: 'sports', imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80', alt: 'Students participating in athletics sprint', caption: 'High energy at the Annual Sports Meet.' },
  { id: 'g3', title: 'Primary School Reading Hour', category: 'classrooms', imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80', alt: 'Young students reading together in library nook', caption: 'Developing a lifelong love for reading in our primary wing.' },
  { id: 'g4', title: 'Robotics Workshop in Session', category: 'events', imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80', alt: 'Students working on robotics project', caption: 'Designing micro-controller prototypes at Innovation Week.' },
  { id: 'g5', title: 'Annual Cultural Festival Dance', category: 'arts', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80', alt: 'Students performing on stage in traditional attire', caption: 'Vibrant cultural performances at the school auditorium.' },
  { id: 'g6', title: 'Outdoor Green Campus Walkway', category: 'campus', imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80', alt: 'Clean landscaped campus quad and building', caption: 'Lush greenery and sunlit corridors across the campus.' },
  { id: 'g7', title: 'Basketball Inter-House Match', category: 'sports', imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80', alt: 'Basketball game on court', caption: 'Competitive spirit during inter-house basketball finals.' },
  { id: 'g8', title: 'Visual Arts & Painting Exhibition', category: 'arts', imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80', alt: 'Student displaying watercolor painting', caption: 'Expressive student artwork showcased in the main gallery.' },
  { id: 'g9', title: 'Student Council Leadership Oath', category: 'student-life', imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', alt: 'Student leaders taking oath on stage', caption: 'Empowering future leaders during Investiture Ceremony.' }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What grades does Sunrise Public School offer?',
    answer: 'Sunrise Public School offers complete co-educational schooling from Pre-Primary (Nursery, LKG, UKG) up to Grade 12 (Senior Secondary across Science, Commerce, and Humanities streams).'
  },
  {
    id: 'faq-2',
    category: 'admissions',
    question: 'How does the admission process work for new students?',
    answer: 'The process involves 5 simple steps: 1) Submit an Online Enquiry or Visit Campus, 2) Schedule a Campus Tour, 3) Interactive Assessment / Parent Interaction, 4) Form & Document Verification, and 5) Seat Allocation & Admission Confirmation.'
  },
  {
    id: 'faq-3',
    category: 'facilities',
    question: 'Can prospective parents visit the campus before applying?',
    answer: 'Yes! We warmly welcome prospective families for guided campus tours on weekdays between 9:00 AM and 3:30 PM, and Saturdays between 9:00 AM and 1:00 PM. You can book a visit via our website.'
  },
  {
    id: 'faq-4',
    category: 'admissions',
    question: 'What documents are required during admission submission?',
    answer: 'Key documents include: Copy of Birth Certificate, Transfer Certificate (TC from Grade 2 onwards), Previous academic report cards, 4 passport-size photographs of the student, and address proof of parents.'
  },
  {
    id: 'faq-5',
    category: 'facilities',
    question: 'Does the school provide safe transport facilities across Coimbatore?',
    answer: 'Yes, Sunrise operates a fleet of modern, GPS-tracked buses equipped with CCTV cameras, speed governors, and trained female bus attendants serving major residential hubs across Coimbatore.'
  },
  {
    id: 'faq-6',
    category: 'academics',
    question: 'What extra-curricular clubs and co-curricular activities are available?',
    answer: 'We offer over 30 clubs including Robotics, Young Scientists, Eco Warriors, Art Studio, Music Ensemble, Public Speaking, Chess, Basketball, and Football Academies.'
  },
  {
    id: 'faq-7',
    category: 'general',
    question: 'How can I contact the Admissions office for urgent inquiries?',
    answer: 'You can call our admissions helpdesk at +91 98765 12345 or email admissions@sunriseschool.example. Our office is open Monday through Saturday.'
  }
];
