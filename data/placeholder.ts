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

  // --- Backend ---
  { name: "Python",     category: "Backend",  icon: "/icons/python.svg",     level: 1  },
  { name: "C#",         category: "Backend",  icon: "/icons/csharp.svg",     level: 1  },
  { name: "Java",       category: "Backend",  icon: "/icons/java.svg",       level: 1  },

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
    title: "Python Inventory CLI",
    description: "Command-line inventory management tool with CRUD operations, CSV export, and low-stock alerts.",
    tags: ["Python", "CLI", "CSV"],
    githubUrl: "https://github.com/juandelacruz/project-3", // [REPLACE]
    liveUrl: "",
    thumbnail: "/images/projects/project-3.png",            // [REPLACE]
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "This very portfolio — built with Next.js, pixel RPG theme, and deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "CSS"],
    githubUrl: "https://github.com/juandelacruz/portfolio",  // [REPLACE]
    liveUrl: "https://juandelacruz.vercel.app",              // [REPLACE]
    thumbnail: "/images/projects/project-4.png",             // [REPLACE]
    featured: true,
  },
  {
    id: 5,
    title: "Java Library System",
    description: "A library management system with book borrowing, return tracking, and member records built in Java.",
    tags: ["Java", "OOP", "SQL"],
    githubUrl: "https://github.com/juandelacruz/project-5", // [REPLACE]
    liveUrl: "",
    thumbnail: "/images/projects/project-5.png",            // [REPLACE]
    featured: false,
  },
  {
    id: 6,
    title: "React Weather Dashboard",
    description: "A weather app consuming OpenWeatherMap API with 5-day forecast, location search, and animated icons.",
    tags: ["React", "API", "JavaScript"],
    githubUrl: "https://github.com/juandelacruz/project-6", // [REPLACE]
    liveUrl: "https://weather-app.vercel.app",              // [REPLACE]
    thumbnail: "/images/projects/project-6.png",            // [REPLACE]
    featured: false,
  },
  {
    id: 7,
    title: "Capstone: [Your Capstone Title]",               // [REPLACE]
    description: "Placeholder description for your capstone project. Replace with your real capstone title, tech used, and what problem it solves.", // [REPLACE]
    tags: ["React", "Python", "SQL"],                       // [REPLACE]
    githubUrl: "https://github.com/juandelacruz/capstone",  // [REPLACE]
    liveUrl: "",
    thumbnail: "/images/projects/project-7.png",            // [REPLACE]
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
];

// ----------------------------
//  RESUME / CV
// ----------------------------
export const resume = {
  pdfFile: "/resume/resume.pdf",    // [REPLACE] Put your PDF in /public/resume/
  lastUpdated: "April 2025",
};