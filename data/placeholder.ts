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
    degree: "Bachelor of Science in Information Technology", // [REPLACE] Your degree
    year: "2021 – 2025",                           // [REPLACE] Your year range
    honors: "With Honors",                         // [REPLACE] or remove if none
    logo: "/images/school-logo.png",               // [REPLACE] Path to school logo
  },
  {
    school: "Placeholder Senior High School",      // [REPLACE] Your SHS
    degree: "STEM Strand",                         // [REPLACE] Your strand
    year: "2019 – 2021",                           // [REPLACE]
    honors: "",
    logo: "/images/shs-logo.png",                  // [REPLACE] or remove
  },
];

// ----------------------------
//  TECH STACK
// ----------------------------
export const techStack = [
  { name: "React",       category: "Frontend",  icon: "/icons/react.svg"      },
  { name: "Next.js",     category: "Frontend",  icon: "/icons/nextjs.svg"     },
  { name: "HTML",        category: "Frontend",  icon: "/icons/html.svg"       },
  { name: "CSS",         category: "Frontend",  icon: "/icons/css.svg"        },
  { name: "JavaScript",  category: "Frontend",  icon: "/icons/javascript.svg" },
  { name: "Python",      category: "Backend",   icon: "/icons/python.svg"     },
  { name: "C#",          category: "Backend",   icon: "/icons/csharp.svg"     },
  { name: "Java",        category: "Backend",   icon: "/icons/java.svg"       },
  { name: "SQL",         category: "Database",  icon: "/icons/sql.svg"        },
];

// ----------------------------
//  PROJECTS (7 total)
// ----------------------------
export const projects = [
  {
    id: 1,
    title: "E-Commerce Web App",                   // [REPLACE]
    description: "A full-stack online store with product listings, cart, and checkout. Built with Next.js and PostgreSQL.", // [REPLACE]
    tags: ["Next.js", "React", "SQL"],
    githubUrl: "https://github.com/juandelacruz/project-1", // [REPLACE]
    liveUrl: "https://project-1.vercel.app",        // [REPLACE] or remove if no live link
    thumbnail: "/images/projects/project-1.png",   // [REPLACE]
    featured: true,
  },
  {
    id: 2,
    title: "Student Information System",           // [REPLACE]
    description: "A desktop application for managing student records, grades, and enrollment using C# and SQL Server.", // [REPLACE]
    tags: ["C#", "SQL", "Windows Forms"],
    githubUrl: "https://github.com/juandelacruz/project-2", // [REPLACE]
    liveUrl: "",
    thumbnail: "/images/projects/project-2.png",   // [REPLACE]
    featured: true,
  },
  {
    id: 3,
    title: "Python Inventory CLI",                 // [REPLACE]
    description: "Command-line inventory management tool with CRUD operations, CSV export, and low-stock alerts.", // [REPLACE]
    tags: ["Python", "CLI", "CSV"],
    githubUrl: "https://github.com/juandelacruz/project-3", // [REPLACE]
    liveUrl: "",
    thumbnail: "/images/projects/project-3.png",   // [REPLACE]
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",                    // [REPLACE]
    description: "This very portfolio — built with Next.js, pixel RPG theme, and deployed on Vercel.", // [REPLACE]
    tags: ["Next.js", "TypeScript", "CSS"],
    githubUrl: "https://github.com/juandelacruz/portfolio", // [REPLACE]
    liveUrl: "https://juandelacruz.vercel.app",    // [REPLACE]
    thumbnail: "/images/projects/project-4.png",   // [REPLACE]
    featured: true,
  },
  {
    id: 5,
    title: "Java Library System",                  // [REPLACE]
    description: "A library management system with book borrowing, return tracking, and member records built in Java.", // [REPLACE]
    tags: ["Java", "OOP", "SQL"],
    githubUrl: "https://github.com/juandelacruz/project-5", // [REPLACE]
    liveUrl: "",
    thumbnail: "/images/projects/project-5.png",   // [REPLACE]
    featured: false,
  },
  {
    id: 6,
    title: "React Weather Dashboard",              // [REPLACE]
    description: "A weather app consuming OpenWeatherMap API with 5-day forecast, location search, and animated icons.", // [REPLACE]
    tags: ["React", "API", "JavaScript"],
    githubUrl: "https://github.com/juandelacruz/project-6", // [REPLACE]
    liveUrl: "https://weather-app.vercel.app",     // [REPLACE]
    thumbnail: "/images/projects/project-6.png",   // [REPLACE]
    featured: false,
  },
  {
    id: 7,
    title: "Capstone: [Your Capstone Title]",      // [REPLACE] Your actual capstone
    description: "Placeholder description for your capstone project. Replace with your real capstone title, tech used, and what problem it solves.", // [REPLACE]
    tags: ["React", "Python", "SQL"],              // [REPLACE]
    githubUrl: "https://github.com/juandelacruz/capstone", // [REPLACE]
    liveUrl: "",
    thumbnail: "/images/projects/project-7.png",   // [REPLACE]
    featured: true,
  },
];

// ----------------------------
//  CERTIFICATES
// ----------------------------
export const certificates = [
  {
    id: 1,
    title: "Placeholder Certificate 1",            // [REPLACE] e.g. "AWS Cloud Practitioner"
    issuer: "Issuing Organization",                // [REPLACE] e.g. "Amazon Web Services"
    date: "January 2025",                          // [REPLACE]
    credentialUrl: "",                             // [REPLACE] URL to verify online, or leave ""
    pdfFile: "/certificates/certificate-1.pdf",   // [REPLACE] Put your PDF in /public/certificates/
    badge: "/images/badges/badge-1.png",           // [REPLACE] or remove if no badge image
  },
  {
    id: 2,
    title: "Placeholder Certificate 2",            // [REPLACE]
    issuer: "Issuing Organization",                // [REPLACE]
    date: "March 2024",                            // [REPLACE]
    credentialUrl: "",
    pdfFile: "/certificates/certificate-2.pdf",   // [REPLACE]
    badge: "/images/badges/badge-2.png",           // [REPLACE]
  },
  {
    id: 3,
    title: "Placeholder Certificate 3",            // [REPLACE]
    issuer: "Issuing Organization",                // [REPLACE]
    date: "June 2024",                             // [REPLACE]
    credentialUrl: "",
    pdfFile: "/certificates/certificate-3.pdf",   // [REPLACE]
    badge: "/images/badges/badge-3.png",           // [REPLACE]
  },
];

// ----------------------------
//  RESUME / CV
// ----------------------------
export const resume = {
  pdfFile: "/resume/resume.pdf",                   // [REPLACE] Put your PDF in /public/resume/
  lastUpdated: "April 2025",                       // [REPLACE]
};