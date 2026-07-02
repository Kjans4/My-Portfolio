// ============================================================
//  PORTFOLIO PLACEHOLDER DATA
//  Replace all fields marked with [REPLACE] with your real info
// ============================================================

// ----------------------------
//  PERSONAL INFO
// ----------------------------
export const personal = {
  name: "Keshier Jan Pialan",
  nickname: "Kesh/shier",
  title: "IT Graduate & Full-Stack Developer",
  email: "keshierjanpilan@gmail.com",
  github: "https://github.com/Kjans4",
  linkedin: "N/A",
  location: "Davao City, Philippines",
  bio: `I'm a passionate IT graduate who loves building web applications,
  exploring game development, and solving real-world problems through code.
  Currently seeking opportunities to grow as a full-stack developer.`,
  avatarUrl: "/images/avatar.png",
};

// ----------------------------
//  EDUCATION
// ----------------------------
export const education = [
  {
    school: "University of Placeholder",           // [REPLACE] Your university
    degree: "Bachelor of Science in Information Technology",
    year: "2021 – 2025",
    honors: "With Honors",
    logo: "/images/school-logo.png",
  },
  {
    school: "Placeholder Senior High School",      // [REPLACE] Your SHS
    degree: "STEM Strand",
    year: "2019 – 2021",
    honors: "",
    logo: "/images/shs-logo.png",
  },
];

// ----------------------------
//  TECH STACK
// ----------------------------
// Replace your existing techStack array in data/placeholder.ts with this:

export const techStack = [
  // --- Frontend ---
  { name: "React",      category: "Frontend", icon: "/icons/react.svg",      level: 4  },
  { name: "Next.js",    category: "Frontend", icon: "/icons/nextjs.svg",     level: 3  },
  { name: "HTML",       category: "Frontend", icon: "/icons/html.svg",       level: 4  },
  { name: "CSS",        category: "Frontend", icon: "/icons/css.svg",        level: 3  },
  { name: "JavaScript", category: "Frontend", icon: "/icons/javascript.svg", level: 3  },
  { name: "TypeScript",  category: "Frontend", icon: "/icons/typescript.svg", level: 2  },
  { name: "Tailwind CSS", category: "Frontend", icon: "/icons/tailwind.svg",  level: 2  },
  { name: "React Native", category: "Frontend", icon: "/icons/react-native.svg", level: 1  },
  

  // --- Backend ---
  { name: "Python",     category: "Backend",  icon: "/icons/python.svg",     level: 1  },
  { name: "C#",         category: "Backend",  icon: "/icons/csharp.svg",     level: 1  },


  // --- Database ---
  { name: "SQL",        category: "Database", icon: "/icons/sql.svg",        level: 1  },

  // --- Tools ---
  { name: "VS Code",    category: "Tools",    icon: "/icons/vscode.svg",     level: 6  },

  // --- AI ---
  { name: "Claude",     category: "AI",       icon: "/icons/claude.svg",     level: 4  },
];
// ----------------------------
//  PROJECTS (7 total)
// ----------------------------
export const projects = [
  {
    id: 1,
    title: "Tic-Tac-Toe INFINITY",
    description: "A persistent-state, rolling Tic-Tac-Toe game built with React and Vite. The game eliminates draws through a FIFO mechanics system and supports continuous play through an infinity loop between rounds. Features a Balatro-inspired visual theme with CRT scanlines, neon glows, and a full run-based progression system.",
    tags: ["Next.js", "React"],
    githubUrl: "https://github.com/Kjans4/Tic-Tac-Toe-INFINITY.git",
    liveUrl: "https://tictactoe-infinity.vercel.app/",
    thumbnail: "/images/tictactoe.png",        // ✅ Fixed: was ./images/tictactoe.png
    featured: true,
  },
  {
    id: 2,
    title: "Hours to Days",
    description: "A modern web app that calculates project completion dates based on total hours, daily work hours, and custom schedules. Perfect for students, freelancers, and project planners.",
    tags: ["React Vite", "Firebase"],
    githubUrl: "https://github.com/Kjans4/Hours-to-Days.git",
    liveUrl: "https://hours-2-days.vercel.app/",
    thumbnail: "/images/hours2days.png",       // ✅ Fixed: was public/images/hours2days.png
    featured: true,
  },
  {
    id: 3,
    title: "Infinity Dungeon",
    description: "A fast-paced top-down arena rogue-like built with Next.js, TypeScript, and HTML5 Canvas. Fight through horde rooms, survive elite and boss encounters, collect gold, and build your character with stat upgrades, weapons, and charms — then descend deeper, harder, forever.",
    tags: ["Next.js", "TypeScript", "Canvas"],
    githubUrl: "https://github.com/Kjans4/infinity-dungeon.git", // [REPLACE]
    liveUrl: "",
    thumbnail: "/images/projects/project-3.png",            // [REPLACE]
    featured: false,
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "A modern web app for managing inventory with real-time updates, reporting, and user management.",
    tags: ["Next.js", "TypeScript", "CSS"],
  
    thumbnail: "/images/projects/project-4.png",             // [REPLACE]
    featured: true,
  },
  {
    id: 5,
    title: "Scrappix",
    description: "AI-Powered Recycling and Repurposing for Filipino Households: Fostering Sustainable Habits and Economic Empowerment",
    tags: ["Java", "AI", "SQL"],

    thumbnail: "/images/projects/project-5.png",            // [REPLACE]
    featured: true,
  },
  
];

// ----------------------------
//  CERTIFICATES
// ----------------------------
export const certificates = [
  {
    id: 1,
    title: "JavaScript for Beginners",
    issuer: "SimpleLearn",
    date: "May, 2026",
    credentialUrl: "https://simpli-web.app.link/e/RZJjDz5ZN2b",
    pdfFile: "/certificates/10178095_7306280_1777701199979.pdf",
    badge: "/images/javascript_for_beginners.png",
  },
  {
    id: 2,
    title: "Introduction to SQL",
    issuer: "SimpleLearn",
    date: "Sept 17, 2024",                                     // [REPLACE] — date was truncated
    credentialUrl: "https://simpli-web.app.link/e/q3tzLK1AN2b",
    pdfFile: "/certificates/7380311_1726801705.pdf",
    badge: "/images/introduction_to_sql.png",
  },
  {
    id: 3,
    title: "Build Complete CMS Blog in PHP MySQL Bootstrap & PDO",
    issuer: "Udemy",
    date: "Dec 11, 2024",
    credentialUrl: "https://ude.my/UC-332df7d6-d85d-4be8-ab65-32ae24459db0",
    pdfFile: "/certificates/UC-332df7d6-d85d-4be8-ab65-32ae24459db0.pdf",
    badge: "/images/badges/badge-3.png",
},
{
    id: 4,
    title: "Introduction to Front End Development",
    issuer: "SimpleLearn",
    date: "June 8, 2026",
    credentialUrl: "https://simpli-web.app.link/e/1Ei23q0jN3b",                                        
    pdfFile: "/certificates/10314744_10603832_1780893357205.pdf",
    badge: "/images/badges/badge-frontend.png",              
  },
  {
    id: 5,
    title: "Python for Beginners",
    issuer: "SimpleLearn",
    date: "June 6 2026",
    credentialUrl: "https://simpli-web.app.link/e/JS1ha9DlN3b",
    pdfFile: "/certificates/10308021_10603832_1780710585395.pdf",              
    badge: "/images/badges/badge-5.png",                     
  },
];

// ----------------------------
//  RESUME / CV
// ----------------------------
export const resume = {
  pdfFile: "/resume/cv.pdf",
  lastUpdated: "April 2026",
};