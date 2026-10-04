import { section } from "framer-motion/client";

const portfolioData = [
    {
        id: "stelluna",
        title: "Stelluna",
        categories: ["UI/UX"],
        subtitle: "Salon Booking App",
        text: "Stelluna is a mobile salon booking app concept for an Interaction Design course, allowing users to browse services, book appointments, and manage bookings.",
        image: "/porto-cover/Stelluna.png",
        figmaLink: "https://www.figma.com/design/l563krEnMUeN16wbQZEc03/B_9_Salon?node-id=43-254&t=k3YssUGmKLyDy2Kt-1",

        heroImages: [
            "/porto-cover/Stelluna.png",
            "/porto-hero/stelluna1.png",
            "/porto-hero/stelluna2.png",
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                text:
                    "Stelluna is a mobile salon booking application designed to simplify the process of reserving and managing salon services. The app features service selection, appointment scheduling, stylist management, and reservation confirmation. Stelluna aims to provide users with a convenient and organized booking experience while helping salons manage appointments and daily operations through an intuitive user interface.",
            },

            {
                type: "process",
                title: "Design Process & Research",
                text: "To ensure the design addressed real user needs, I created several research and planning artifacts that guided design decisions.",
                items: [
                    {
                        title: "User Persona",
                        text:
                            "The user persona represents target users who frequently book salon services and need a simple way to manage appointments. This persona helped prioritize clarity, speed, and booking visibility in the interface.",
                        image: "/stelluna-ia/UserPersona.png",
                    },
                    {
                        title: "User Journey",
                        text:
                            "User journeys were mapped to identify pain points in rocess and ensure a smooth transition from service selection to confirmation.",
                        image: "/stelluna-ia/UserJourney.png",
                    },
                ]
            },

            {
                type: "list",
                title: "My Contribution",
                text: "This project was completed as a team assignment, and I contributed to major parts of the design process, including:",
                items: [
                    "Conducting user research (user profiles, interview questions, transcripts, personas, and user journeys).",
                    "Identifying user needs and translating insights into design requirements.",
                    "Generating early concepts using Crazy 8s and ideation methods.",
                    "Creating the site map (information architecture) to structure navigation.",
                    "Designing low-fidelity wireframes to explore layout and functionality.",
                    "Developing high-fidelity UI designs in Figma with usability and visual hierarchy in mind.",
                    "Running usability testing (Maze), analyzing feedback, and compiling UEQ results.",
                    "Refining the prototype and documenting improvements before and after testing.",
                ],
            },

            {
                type: "list",
                title: "Key Highlights",
                items: [
                    "Completed a full end-to-end UCD workflow with structured research, design, and testing.",
                    "Applied usability insights to significantly improve the clarity and flow of the prototype.",
                    "Delivered a polished mobile design with consistent visual direction and interaction patterns.",
                    "Gained hands-on experience working collaboratively in a team setting.",
                ],
            },

            {
                type: "learning",
                title: "Key Learnings",
                text: "Through this project, I learned how to apply UCD principles in a structured, research-driven workflow, validate design decisions through usability testing, and refine interfaces based on measurable feedback. I also improved my collaboration and communication skills throughout the team project.",
            },
        ],
    },

    {
        id: "monkland",
        title: "Monkland Cheese Dairy",
        categories: ["UI/UX"],
        subtitle: "UI/UX Redesign",
        text: "This group project for an Interaction Design course analyzed the Monkland Cheese Dairy website using Gestalt principles.",
        image: "/porto-cover/Monkland.png",
        figmaLink: "https://www.figma.com/design/vAEnXFp8etTY2IgUa91aet/Desain-Interaksi?node-id=0-1&t=LCW0yG8WLoRjrpMd-1",

        heroImages: [
            "/porto-cover/Monkland.png",
            "/porto-hero/monkland.png"
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                text: "Monkland Cheese Dairy is an artisan cheese e-commerce website. Our team conducted a UI analysis using Gestalt principles to identify visual and structural issues, then produced a conceptual redesign to enhance clarity, hierarchy, and user experience. I contributed as a UI/UX Designer focused on analysis and interface refinement.",
            },

            {
                type: "list",
                title: "Problem Summary",
                text: "From the initial evaluation, we identified several usability and visual issues:",
                items: [
                    "Inconsistent navigation layout and unclear menu grouping",
                    "Tight spacing with no clear separation between product items",
                    "Weak visual hierarchy (similar text sizes, low emphasis on key info)",
                    "Low color contrast in several text and link elements",
                    "Search bar lacked clear affordance",
                    "Misaligned margins and spacing, especially on mobile",
                    "Product grids lacked card boundaries, making comparison difficult",
                ]
            },

            {
                type: "list",
                title: "Gestalt Analysis Summary",
                items: [
                    "Proximity — Product elements (image, name, price) were grouped well, but the lack of spacing or card separation made each item appear cluttered and hard to compare.",
                    "Continuity — The vertical reading flow was clear, but alignment inconsistencies disrupted smooth scanning across sections.",
                    "Similarity — The cart page used consistent layout patterns, helping users scan information efficiently—however this consistency did not extend to other pages.",
                    "Figure–Ground — Login boxes had good contrast, but several links and text elements lacked differentiation, reducing readability.",
                    "Prägnanz (Simplicity) — The interface was simple but visually too minimal, resulting in a plain and less engaging experience.",
                    "Common Region — The cart section was well-contained, but the product listing page lacked boundaries, making it visually overwhelming."
                ],
            },

            {
                type: "list",
                title: "Redesign Highlights",
                text: "Based on the Gestalt findings, I worked on improving:",
                items: [
                    "Card-based product layout with proper spacing",
                    "Clearer navigation structure",
                    "Enhanced visual hierarchy",
                    "Improved alignment and spacing",
                    "Better color contrast",
                    "Clearer search bar design",
                    "Restructured product detail pages",
                ],
            },
            {
                type: "list",
                title: "My Role & Contribution",
                items: [
                    "Conducted UI evaluation using Gestalt principles",
                    "Designed improved UI screens in Figma",
                    "Refined layout structure",
                    "Created before–after comparison visuals",
                ],
            },
            {
                type: "list",
                title: "Key Learnings",
                text: "Through this project, I strengthened skills in:",
                items: [
                    "Applying Gestalt principles in real projects",
                    "Improving visual hierarchy and UI clarity",
                    "Communicating design rationale effectively",
                    "Collaborative problem-solving",
                ],
            },
        ],
    },

    {
        id: "reservation-flow",
        title: "Reservation Flow Design",
        categories: ["UI/UX"],
        subtitle: "Court & Restaurant reservation web",
        text: "A UI/UX technical test project where I designed a reusable reservation layout in Figma.",
        image: "/porto-cover/Reservation.png",
        figmaLink: "https://www.figma.com/design/oQ9v2LOIwTKAaSikMoiOI0/Reservation?node-id=0-1&t=drAL1P8OYygy2kRZ-1",

        heroImages: [
            "/porto-cover/Reservation.png",
            "/porto-hero/reservation1.png",
            "/porto-hero/reservation2.png",
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                content: {
                    text: "As part of a UI/UX technical test, I was tasked to design a reservation flow.",
                    lists: [
                        {
                            title: "Badminton Court Reservation Page",
                            items: [
                                "Users must be able to select Date, Timeslots, and Resources (Courts).",
                                "Visual style and colors were flexible",
                            ],
                        },
                        {
                            title: "Restaurant Reservation Page",
                            items: [
                                "Using the same layout structure from the badminton reservation design.",
                                "Content adapted to fit restaurant booking needs",
                            ],
                        },
                    ],
                },
            },

            {
                type: "list",
                title: "Design Approach",
                text: "To maintain consistency while optimizing usability, I designed a clean and structured layout that supports both use cases:",
                items: [
                    "Clear selection modules",
                    "Card-based interaction",
                    "Consistent layout for scalability",
                ],
            },

            {
                type: "text",
                title: "Outcome",
                text: "The final prototype demonstrates how a single layout can scale across different reservation contexts.",
            },
        ],
    },

    {
        id: "meditalk",
        title: "Meditalk",
        categories: ["UI/UX"],
        subtitle: "Mobile Learning Platform for ESP",
        text: "MediTalk is a group project created for a real client, where we designed a mobile learning app prototype based directly on their ESP education needs.",
        image: "/porto-cover/MediTalk.png",
        figmaLink: "https://www.figma.com/design/8ZDyBIHQhydMkrmG3SLdw8/Kapita-Selekta?node-id=0-1&t=MdAlU7G3oA4TF1Yk-1",

        heroImages: [
            "/porto-cover/MediTalk.png",
            "/porto-hero/meditalk.png",
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                text: "MediTalk is a mobile learning platform designed to support English for Specific Purposes (ESP) education in academic settings. The app provides speaking simulations, listening materials, quizzes, and an integrated dictionary to help students improve their language skills. For instructors, MediTalk includes tools to create classes, upload learning modules, and evaluate student performance based on simulation results and quizzes.",
            },

            {
                type: "list",
                title: "My Contribution",
                text: "As a UI/UX Designer, I translated user needs into intuitive and accessible interfaces. My main responsibilities included:",
                items: [
                    "Conducting user research to understand student and lecturer needs",
                    "Developing low-fidelity wireframes to explore user flows",
                    "Designing interactive high-fidelity prototypes in Figma",
                    "Ensuring usability and accessibility for both students and instructors",
                    "Supporting learning and evaluation workflows through clear UI structure",
                ],
            },

            {
                type: "learning",
                title: "Key Learnings",
                text: "Through this project, I learned how to design user-centered educational tools, balance functionality for different user roles, and create seamless UI flows that enhance digital learning experiences in a campus environment.",
            },
        ],
    },

    {
        id: "aksespeduli",
        title: "Akses Peduli",
        categories: ["UI/UX"],
        subtitle: "Maps for People with Disabilities",
        text: "This was a group project for an Entrepreneurship course, where we designed AksesPeduli, a mobile app concept aimed at helping people with disabilities find accessible routes, facilities, and public spaces.",
        image: "/porto-cover/AksesPeduli.png",
        figmaLink: "https://www.figma.com/design/eOESVzyBfvQcvNE6VF1qXE/AksesPeduli?node-id=146-274&t=uMDISdFyLUfLhkxd-1",

        heroImages: [
            "/porto-cover/AksesPeduli.png",
            "/porto-hero/aksespeduli.png",
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                text: "AksesPeduli is a mobile app concept designed to help people with disabilities navigate cities more easily by providing information on accessible routes, public facilities, and nearby places with disability-friendly features. The app combines map-based navigation with community-generated input to support safer, more inclusive mobility.",
            },

            {
                type: "list",
                title: "My Contribution",
                text: "As a UI/UX Designer, I contributed to the early design and ideation phase of the project, including:",
                items: [
                    "Participating in early-stage ideation and concept development",
                    "Designing user flows focused on accessibility and ease of use",
                    "Creating a clickable Figma prototype highlighting accessible routes",
                    "Designing UI elements for community-submitted accessibility information",
                    "Collaborating with the team to ensure usability for diverse user needs",
                ],
            },

            {
                type: "list",
                title: "Key Highlights",
                items: [
                    "Raised awareness about inclusive mobility and accessibility issues",
                    "Showcased during a campus exhibition",
                    "Received the “Audience Favorite” award for social impact and practical value",
                ],
            },

            {
                type: "learning",
                title: "Key Learnings",
                text: "Through this project, I learned how to transform social issues into meaningful product concepts, craft user-centered flows, and communicate ideas effectively through UI/UX design.",
            },
        ],
    },

    {
        id: "reusemart",
        title: "ReuseMart",
        categories: ["UI/UX", "Web Dev", "App Dev"],
        subtitle: "Secondhand Goods Selling Platform",
        text: "ReuseMart is a group project focused on building a secondhand goods marketplace system, developed in both web and mobile app formats. The platform enables users to buy, sell, and donate used items through a streamlined consignment-based process.",
        image: "/porto-cover/ReuseMart.png",
        figmaLink: "https://www.figma.com/design/i0U3VOhiRm5YA5QYgA9fN3/P3L?node-id=0-1&t=nLJBQxcTaOhXj2Mz-1",

        heroImages: [
            "/porto-cover/ReuseMart.png",
            "/porto-hero/reusemart.png",
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                text: "ReuseMart is a web and mobile platform that allows users to buy, sell, and donate secondhand items through a consignment-based system. This project was developed as a group assignment based on a case study focused on simplifying transactions, inventory management, and sustainability-driven reuse processes.",
            },

            {
                type: "list",
                title: "My Contribution",
                text: "I worked as both a UI/UX Designer and Front-End Developer, with responsibilities including:",
                items: [
                    "Designing user interfaces and flows using Figma",
                    "Translating business and functional requirements into UI solutions",
                    "Implementing core web features using React.js",
                    "Bridging design concepts with front-end implementation",
                    "Collaborating with team members across different roles",
                ],
            },

            {
                type: "learning",
                title: "Key Learnings",
                text: "Through this project, I learned how to translate business requirements into functional UI, collaborate in a multidisciplinary team, and align digital product design with real-world sustainability goals.",
            },

            {
                type: "list",
                title: "Technologies Used",
                items: [
                    "Figma (Design)",
                    "React.js (Web Frontend)",
                    "Flutter & Dart (Mobile)",
                    "Laravel (Backend)",
                    "MySQL (Database)",
                    "GitHub (Version Control)",
                ],
            },
        ],
    },

    {
        id: "atmatravel",
        title: "Atma Travel",
        categories: ["UI/UX", "App Dev"],
        subtitle: "Travel Booking App",
        text: "This group project for the Pemrograman Berbasis Platform course involved building a mobile app to help Atma Travel manage bookings, reviews, and customer data.",
        image: "/porto-cover/AtmaTravel.png",
        figmaLink: "https://www.figma.com/design/2DxJbYRNvmj0fUalUM7OFn/PBP_Kelompok5_Travel?node-id=0-1&t=jvitUuCaO7BxUZfs-1",

        heroImages: [
            "/porto-cover/AtmaTravel.png",
            "/porto-hero/atmatravel.png",
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                text:
                    "This was a group project for the Pemrograman Berbasis Platform course, where we developed a mobile application to help Atma Travel manage bookings, customer reviews, and user data more efficiently. The app was built based on a detailed case study and designed to streamline travel service operations.",
            },

            {
                type: "list",
                title: "My Contribution",
                text:
                    "I worked as both a UI/UX Designer and Flutter Developer, with responsibilities including:",
                items: [
                    "Designing user interfaces and flows using Figma",
                    "Implementing core mobile features using Flutter",
                    "Translating user and business needs into functional app features",
                    "Ensuring the implementation matched the design specifications",
                    "Collaborating with team members throughout the development process",
                ],
            },

            {
                type: "learning",
                title: "Key Learnings",
                text:
                    "Through this project, I learned how to translate user needs into functional features, design intuitive user flows, and collaborate effectively across design and development roles.",
            },

            {
                type: "list",
                title: "Technologies Used",
                items: [
                    "Flutter (Mobile App Development)",
                    "Dart (Programming Language)",
                    "MySQL (Database Management)",
                    "Figma (UI/UX Design)",
                ],
            },
        ],
    },

    {
        id: "personalporto",
        title: "Personal Portfolio Website",
        categories: ["UI/UX", "Web Dev"],
        subtitle: "A Personal Web Showcase",
        text: "A personal portfolio website designed to showcase profile, skills, projects, and experiences with clear hierarchy and user-friendly navigation.",
        image: "/porto-cover/PersonalPorto.png",
        figmaLink: "https://www.figma.com/design/mkm4kWRQQUpiHU6ygDSl02/Personal-Portfolio-Website?node-id=10-2603&t=DVmvbJObJaGbM9tK-1",

        heroImages: [
            "/porto-cover/PersonalPorto.png",
            "/porto-hero/personal-porto.png",
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                text: "This project involves designing a personal portfolio website to present professional profile, skills, and selected projects in a clear and structured way. The main goal is to create a visually clean, intuitive, and responsive interface that helps visitors such as recruiters or collaborators quickly understand my background and work.",
            },

            {
                type: "text",
                title: "Design Process",
                text: "The design emphasizes strong information hierarchy, consistent visual styling, and smooth navigation. The process included defining content structure, creating wireframes, and developing high-fidelity UI designs using Figma while applying usability and accessibility principles.",
            },

            {
                type: "list",
                title: "Key Highlights",
                items: [
                    "Designed a clean and minimal interface focused on clarity and readability",
                    "Structured content to highlight skills, experience, and projects effectively",
                    "Applied visual hierarchy to guide users through key sections of the website",
                    "Created responsive layouts for different screen sizes",
                    "Developed wireframes and high-fidelity UI designs using Figma",
                ],
            },

            {
                type: "learning",
                title: "Key Learnings",
                text: "Through this project, I gained a deeper understanding of information architecture for personal branding, improved my ability to organize content based on recruiter needs, and learned to balance aesthetics with usability while designing responsive and consistent UI layouts.",
            },
        ],
    },

    {
        id: "caretrail",
        title: "CareTrails",
        categories: ["UI/UX"],
        subtitle: "Dexa Innovation Hackathon project",
        text: "This group project for the Dexa Innovation Hackathon followed the Hipster–Hacker–Hustler model, where I led ideation, user flows, and low-fidelity prototyping as the Hipster.",
        image: "/porto-cover/CareTrails.png",
        figmaLink: "",

        heroImages: [
            "/porto-cover/CareTrails.png",
            "/porto-hero/caretrails.png",
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                text: "CareTrails is a logistics management app designed to help pharmaceutical distributors streamline medicine delivery across Indonesia. The concept focuses on solving real operational challenges such as route optimization, real-time shipment tracking, temperature and humidity monitoring, and efficient vendor selection.",
            },

            {
                type: "text",
                title: "My Contribution",
                text: "This project was developed as a group project for the Dexa Innovation Hackathon using the Hipster–Hacker–Hustler collaboration model. I served as the Hipster, leading the ideation process, mapping user flows, and creating a low-fidelity prototype using Figma to ensure the solution was user-centered and aligned with pharmaceutical logistics needs.",
            },

            {
                type: "list",
                title: "Key Highlights",
                items: [
                    "Developed for the Dexa Innovation Hackathon",
                    "Applied the Hipster–Hacker–Hustler collaboration model",
                    "Advanced to the Top 10 teams despite joining as third-semester students",
                    "Recognized for strong concept, research, and design approach",
                ],
            },

            {
                type: "learning",
                title: "Key Learnings",
                text: "Through this project, I learned how to design under tight time constraints, apply user-centered thinking to real-world logistics challenges, and communicate ideas clearly within a cross-functional team.",
            },
        ],
    },

    {
        id: "bidplaza",
        title: "Bid Plaza",
        categories: ["UI/UX", "Web Dev"],
        subtitle: "Auction Website",
        text: "This was a group project to develop Bid Plaza, an online auction platform where users can list items, place bids, and track live updates in real time. Our team designed the user interface, built the front-end interactions, and structured the database to support secure and efficient bidding activities.",
        image: "/porto-cover/BidPlaza.png",
        figmaLink: "https://www.figma.com/design/3nUrRjzVgpTxgewFL5YtaC/Tubes-Web?node-id=0-1&t=J9qQnMpadcgh0aJH-1",

        heroImages: [
            "/porto-cover/BidPlaza.png",
            "/porto-hero/bidplaza.png",
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                text: "Bid Plaza is an auction website designed to provide users with an intuitive platform for bidding on items or listing their own goods for sale. The platform enables a smooth and efficient bidding process where users can track ongoing bids, place offers, and make purchases securely. Whether buying or selling, the system is built to be accessible and easy to navigate for all users.",
            },

            {
                type: "text",
                title: "My Contribution",
                text: "I was responsible for designing the user interface using Figma and ensuring a seamless user experience. On the development side, I worked on the front-end, focusing on dynamic interactions such as real-time bid updates. I also designed the database structure to manage user information, item listings, and bidding data efficiently. One of the main challenges in this project was handling live auction data, which I addressed by implementing real-time updates on the homepage to create an engaging and interactive experience.",
            },

            {
                type: "list",
                title: "Technologies Used",
                items: [
                    "Frontend: HTML, CSS, JavaScript",
                    "Database: MySQL",
                    "Figma for UI/UX Design",
                ],
            },
        ],
    },

    {
        id: "socialvit",
        title: "SocialVit",
        categories: ["UI/UX"],
        subtitle: "Mentor Detail Dashboard & AI Micro Certification",
        text: "This was a UI/UX internship project for SocialVit, where I designed the Mentor Detail dashboard and AI Micro Certification interface. The project involved creating wireframes, prototypes, and high-fidelity designs in Figma to support clear navigation and a better user experience.",
        image: "/porto-cover/SocialVit.png",
        figmaLink: "https://www.figma.com/design/jxbWW8rtGSIcskm9xAzjsT/Internship-Socialvit?node-id=0-1&t=z1bNFKd6szM0QDV5-1",

        heroImages: [
            "/porto-cover/SocialVit.png",
            "/porto-hero/socialvit1.png",
            "/porto-hero/socialvit2.png",
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                text: "SocialVit is a platform designed to connect mentors and learners, offering a comprehensive solution for skill development and knowledge sharing. The platform enables mentors to create detailed profiles and offer micro-certifications, while learners can explore various courses and track their progress. The system is built to be accessible and easy to navigate for all users.",
            },

            {
                type: "list",
                title: "My Contribution",
                text: "As a UI/UX Designer, I contributed to the design process by:",
                items: [
                    "Designing the Mentor Detail dashboard interface",
                    "Designing the AI Micro Certification interface",
                    "Creating wireframes and user flows to structure the experience",
                    "Developing interactive prototypes and high-fidelity designs in Figma",
                    "Applying usability principles and visual hierarchy to improve navigation",
                    "Collaborating within the product development process to refine the designs",
                ],
            },

            {
                type: "list",
                title: "Key Highlights",
                items: [
                    "Designed interfaces for a real-world digital platform",
                    "Developed the design from wireframes to high-fidelity prototypes",
                    "Worked on both dashboard and AI-supported product features",
                    "Focused on creating clear, structured, and intuitive user experiences",
                ],
            },

            {
                type: "learning",
                title: "Key Learnings",
                text: "Through this internship project, I learned how to design structured dashboard interfaces for real-world products, develop UI workflows from wireframes to high-fidelity prototypes, and collaborate effectively within a product development process.",
            },

            {
                type: "list",
                title: "Technologies Used",
                items: [
                    "Figma for UI/UX Design",
                ],
            },
        ],
    },

    {
        id: "ybg",
        title: "YBG",
        categories: ["Web Dev"],
        subtitle: "Marketplace Website",
        text: "A web development internship project where I built responsive marketplace interfaces using Next.js, integrated APIs, and developed product and transaction-related features.",
        image: "/porto-cover/YBG.png",
        projectLink: "https://ybg-web-frontend.vercel.app/home",

        heroImages: [
            "/porto-cover/YBG.png",
            "/porto-hero/ybg_web.png",
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                text: "YBG Marketplace is a web-based marketplace platform for buying and selling branded products, designed to provide a responsive and user-friendly shopping experience. The project involved developing product, detail, and transaction-related interfaces while integrating dynamic data through APIs.",
            },

            {
                type: "list",
                title: "My Contribution",
                text: "As a Front-End Developer, I contributed to the development process by:",
                items: [
                    "Developing responsive web interfaces using Next.js",
                    "Building product, product detail, and transaction-related pages",
                    "Integrating APIs to display and manage dynamic data",
                    "Maintaining UI consistency across different pages",
                    "Testing and fixing UI and functionality issues during development",
                    "Collaborating with the backend developer during implementation and testing",
                ],
            },

            {
                type: "list",
                title: "Key Highlights",
                items: [
                    "Developed frontend features for a real-world marketplace platform",
                    "Implemented responsive interfaces using Next.js",
                    "Integrated APIs for dynamic product and transaction data",
                    "Worked collaboratively with a backend developer throughout development",
                ],
            },

            {
                type: "learning",
                title: "Key Learnings",
                text: "Through this internship project, I learned how to build real-world frontend features, integrate dynamic data from APIs, troubleshoot UI and functionality issues, and collaborate effectively within a small development team.",
            },

            {
                type: "list",
                title: "Technologies Used",
                items: [
                    "Next.js for Front-End Development",
                    "Git & GitHub for Version Control",
                ],
            },
        ],
    },

    {
        id: "smb-ananda",
        title: "SMB Ananda",
        categories: ["UI/UX", "Web Dev"],
        subtitle: "Information Website",
        text: "An individual web development project where I designed and developed a responsive information website for SMB Ananda using Figma and React.js.",
        image: "/porto-cover/SMB_Ananda.png",
        figmaLink: "https://www.figma.com/design/dlVA7PSW4BEolBjwjSoMxI/Kerja-Praktik--Web-Vihara-?node-id=0-1&t=NQHw99HWUoyVmHll-1",
        projectLink: "https://smb-ananda-llg.vercel.app",

        heroImages: [
            "/porto-cover/SMB_Ananda.png",
            "/porto-hero/smbananda.png",
        ],

        sections: [
            {
                type: "overview",
                title: "Project Overview",
                text: "SMB Ananda is a web-based information platform developed for Sekolah Minggu Buddha Ananda to centralize announcements, schedules, galleries, and organizational information into a single accessible platform. The project involved designing the UI in Figma and developing a responsive frontend website using React.js.",
            },

            {
                type: "process",
                title: "Design Process",
                text: "Before developing the website, I created several design artifacts to structure the content and establish a consistent visual direction.",
                items: [
                    {
                        title: "Sitemap",
                        text: "The sitemap was created to organize the website's content and define the overall navigation structure, covering key pages such as Home, Announcements, Gallery, Schedule, and Contact.",
                        image: "/smb-ia/Sitemap.png",
                    },
                    {
                        title: "Color Palette",
                        text: "The color palette was selected to create a consistent visual identity and maintain a clean, welcoming appearance throughout the website.",
                        image: "/smb-ia/Color.png",
                    },
                    {
                        title: "Typography",
                        text: "The typography system was defined to establish a clear visual hierarchy and maintain readability across different sections of the website.",
                        image: "/smb-ia/Typography.png",
                    },
                ],
            },

            {
                type: "list",
                title: "My Contribution",
                text: "As a UI/UX Designer and Frontend Developer, I worked on the project from design to implementation by:",
                items: [
                    "Designing the website UI and prototypes in Figma",
                    "Developing responsive web interfaces using React.js",
                    "Building pages including Home, Announcements, Gallery, Schedule, and Contact",
                    "Translating UI designs into functional frontend components",
                    "Ensuring consistent layout and usability across different pages",
                    "Deploying the website using Vercel",
                ],
            },

            {
                type: "list",
                title: "Key Highlights",
                items: [
                    "Developed an end-to-end website as an individual project",
                    "Combined UI/UX design with frontend development",
                    "Created a centralized platform for organizational information",
                    "Implemented a responsive and user-friendly interface",
                ],
            },

            {
                type: "learning",
                title: "Key Learnings",
                text: "Through this project, I learned how to manage an end-to-end web development workflow, translate organizational needs into functional website features, and balance UI/UX design with frontend implementation while maintaining usability and accessibility.",
            },

            {
                type: "list",
                title: "Technologies Used",
                items: [
                    "Figma for UI/UX Design",
                    "React.js for Frontend Development",
                    "Vercel for Deployment",
                ],
            },
        ],
    },
];

export default portfolioData;