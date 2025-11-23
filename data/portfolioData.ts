import { Skill, TimelineItem, Project, Certification, TechnicalEvent } from '../types';

// ✅ Local Images Imported (Correct Paths)
import Satheesh from "../assets/Satheesh.jpeg";

import ar1 from "../assets/ar1.jpg";
import ar2 from "../assets/ar2.jpg";
import ar3 from "../assets/ar3.jpg";
import ar4 from "../assets/ar4.jpg";

import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";

import pic1 from "../assets/Picture1.jpg";
import pic2 from "../assets/Picture2.png";
import pic3 from "../assets/Picture3.jpg";
import pic4 from "../assets/Picture4.jpg";
import pic5 from "../assets/Picture5.jpg";
import pic6 from "../assets/Picture6.jpg";

import ss1 from "../assets/Screenshot 2025-09-05 201142.png";
import ss2 from "../assets/Screenshot 2025-09-05 201211.png";
import ss3 from "../assets/Screenshot 2025-09-05 201326.png";

export const skills: Skill[] = [
  { icon: "fab fa-python", name: "Python", description: "Machine Learning, Data Analysis, Automation", level: 90 },
  { icon: "fab fa-java", name: "Java", description: "Application Development, OOP", level: 85 },
  { icon: "fas fa-code", name: "C Programming", description: "System Programming, Embedded Systems", level: 75 },
  { icon: "fab fa-html5", name: "HTML/CSS", description: "Responsive Web Design", level: 95 },
  { icon: "fab fa-js", name: "JavaScript", description: "Interactive Web Applications", level: 80 },
  { icon: "fas fa-database", name: "SQL", description: "Database Management, Queries", level: 85 },
  { icon: "fab fa-github", name: "GitHub", description: "Version Control, Collaboration", level: 90 },
  { icon: "fas fa-wifi", name: "IoT", description: "Connected Devices, Automation", level: 70 },
];

export const tools: Skill[] = [
  { icon: "fas fa-code", name: "Android Studio", description: "Mobile App Development", level: 75 },
  { icon: "fas fa-terminal", name: "VS Code", description: "Primary Code Editor", level: 95 },
  { icon: "fas fa-microchip", name: "Arduino IDE", description: "IoT Development", level: 80 },
  { icon: "fas fa-paint-brush", name: "Canva", description: "Graphic Design", level: 85 },
  { icon: "fas fa-database", name: "MongoDB", description: "NoSQL Database", level: 70 },
  { icon: "fas fa-cube", name: "Anaconda", description: "Data Science", level: 80 },
  { icon: "fas fa-file-code", name: "Jupyter", description: "Notebook Environment", level: 85 },
  { icon: "fas fa-server", name: "Firebase", description: "Backend Services", level: 90 },
];

export const education: TimelineItem[] = [
  {
    title: "B.Tech in Information Technology",
    institution: "Dr. N.G.P Institute of Technology, Coimbatore",
    date: "2022 - 2026 (Expected)",
    description: "Specializing in and Web Application Development. Current CGPA: 7.6",
    details: ["Relevant Coursework: Web Technologies, Database Systems, Machine Learning, Network Security"],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "AKV Matric Higher Secondary School",
    date: "2020 - 2022 | 79.4%",
    description: "Specialized in Computer Science and Mathematics",
  },
  {
    title: "Secondary School Leaving Certificate (SSLC)",
    institution: "AKV Matric Higher Secondary School",
    date: "2020 | 78.8%",
    description: "Specialized in Computer Science and Mathematics",
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Front End Development Intern",
    institution: "One Data Software Solutions, Coimbatore",
    date: "January 2024 - February 2024",
    description: "",
    details: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript",
      "Collaborated with team members to implement UI/UX designs",
      "Participated in code reviews and debugging sessions",
      "Gained experience with version control using Git"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Git"],
  },
  {
    title: "Technical Volunteer",
    institution: "College Tech Fest",
    date: "October 2023",
    description: "",
    details: [
      "Managed technical infrastructure for college event",
      "Assisted participants with coding competition setup",
      "Troubleshoot hardware and software issues"
    ],
  },
];

export const projects: Project[] = [
  {
    id: "ml-disease",
    shortName: "MDPS",
    title: "Multiple Chronic Disease Prediction",
    subtitle: "Machine Learning approach for early detection of Heart Disease, Parkinson’s & Diabetes",
    description: "Machine learning system that predicts heart disease, diabetes, and Parkinson's with 85% accuracy.",
    tags: ["Python", "Machine Learning", "Streamlit", "Scikit-learn"],
    gradient: "linear-gradient(135deg, #4F46E5, #0EA5E9)",
    date: "June 2024",
    category: "Machine Learning & Healthcare",
    teamSize: "4 members",
    role: "Machine Learning Developer",
    status: "Completed",
    overview: "Prediction system using ML algorithms.",
    features: [
      "Prediction of three major chronic diseases",
      "Heart Disease using Logistic Regression",
      "Parkinson’s & Diabetes using SVM"
    ],
    implementation: "Python, Pandas, NumPy, Scikit-learn.",
    images: {
      main: ss1,
      gallery: [
        { src: ss1, title: "Disease Selection", desc: "Main selection screen." },
        { src: ss2, title: "Diabetes Prediction", desc: "Input form for diabetes." },
        { src: ss3, title: "Prediction Result", desc: "Displays prediction output." },
      ],
    },
  },

  {
    id: "hbs",
    shortName: "HBS",
    title: "Hotel Booking System",
    subtitle: "Full-featured web application for hotel reservations",
    description: "Hotel booking with UI, booking, and admin dashboard.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    gradient: "linear-gradient(135deg, #7C3AED, #4F46E5)",
    date: "March 2024",
    category: "Web Development",
    teamSize: "1 member",
    role: "HTML Developer",
    status: "Completed",
    overview: "Hotel booking platform.",
    features: [
      "User authentication",
      "Room availability checking",
      "Secure payments"
    ],
    implementation: "HTML, CSS, JS, Firebase, Stripe API.",
    images: {
      main: h1,
      gallery: [
        { src: h1, title: "Booking Interface", desc: "Hotel search interface." },
        { src: h2, title: "Admin Room Management", desc: "Admin control dashboard." },
        { src: h3, title: "Payment System", desc: "Stripe payment flow." },
      ],
    },
  },

  {
    id: "ayurveda",
    shortName: "AYUR",
    title: "Holistic Harmony: Ayurveda + Tech Wellness App",
    subtitle: "Wellness platform merging Ayurveda & tech",
    description: "Mobile wellness app built with Flutter & Firebase.",
    tags: ["Flutter", "Firebase", "API", "Supabase"],
    gradient: "linear-gradient(135deg, #0EA5E9, #7C3AED)",
    date: "May 2024",
    category: "Mobile Development, Healthcare",
    teamSize: "4 members",
    role: "Flutter Developer",
    status: "Completed",
    overview: "Personal wellness plans based on Ayurveda.",
    features: [
      "Dosha analysis",
      "E-commerce for Ayurvedic items",
      "Doctor consultation"
    ],
    implementation: "Flutter, Dart, Firebase, Supabase.",
    images: {
     main: pic1, // or pic6 or any other existing image

      gallery: [
        { src: pic1, title: "Login Page", desc: "Authentication UI." },
        { src: pic2, title: "Signup Page", desc: "Registration form." },
        { src: pic3, title: "Doctor List", desc: "Find doctors easily." },
        { src: pic4, title: "Dashboard", desc: "Central health hub." },
        { src: pic5, title: "Product Page", desc: "Browse Ayurvedic products." },
        { src: pic6, title: "Checkout Page", desc: "Order and payment." },
      ],
    },
  },

  {
    id: "irrigation",
    shortName: "AWI",
    title: "Automatic Water Irrigation System",
    subtitle: "IoT-based solution for smart agriculture",
    description: "IoT-based irrigation system using soil moisture sensors.",
    tags: ["Microcontrollers", "Agriculture", "Automation", "IoT"],
    gradient: "linear-gradient(135deg, #4F46E5, #7C3AED)",
    date: "August 2024",
    category: "IoT & Embedded Systems",
    teamSize: "4 members",
    role: "Embedded Developer",
    status: "Completed",
    overview: "Monitors soil moisture to control irrigation.",
    features: [
      "Sensor-based automation",
      "Arduino control",
      "Water pump activation"
    ],
    implementation: "Arduino + sensors.",
    images: {
      main: ar1,
      gallery: [
        { src: ar1, title: "System Setup", desc: "Arduino + sensor setup." },
        { src: ar2, title: "Moisture Sensor", desc: "Sensor close-up." },
        { src: ar3, title: "Arduino Board", desc: "Main microcontroller." },
        { src: ar4, title: "Water Pump", desc: "Pump for irrigation." },
      ],
    },
  },
];

export const certifications: Certification[] = [
  { title: "Programming in Java", institution: "NPTEL (IIT Madras)", date: "2023 | Score: 58%", description: "12-week core Java course." },
  { title: "Introduction To Internet Of Things 4.0", institution: "NPTEL (IIT Kharagpur)", date: "2023 | Score: 73%", description: "IoT architecture and protocols." },
  { title: "Human Computer Interaction", institution: "NPTEL (University Certification)", date: "2022 | Score: 79%", description: "User-centered design & usability." },
];

export const technicalEvents: TechnicalEvent[] = [
  { title: "Smart India Hackathon Participant", institution: "Dr. N.G.P Institute of Technology", date: "2023", description: "Solar-powered EV charging system proposal." },
  { title: "Technical Symposium Attendee", institution: "Madras Institute of Technology", date: "2023", description: "Cybersecurity workshop and keynote sessions." },
  { title: "Code Debugging Competition", institution: "SRIT", date: "2022", description: "Debugged Java/Python problems under time pressure." },
];
