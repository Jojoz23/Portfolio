import type { Experience, Education, Contact, Project, TechCategory } from "@/types"

export const experienceData: Experience[] = [
  {
    id: "1",
    position: "Accounting Assistant",
    company: "Saturday Accounting Forum",
    type: "Part-time",
    location: "Mississauga, ON, Canada",
    startDate: new Date("2024-08-01"),
    endDate: null, // Current job
    description: "Bookkeeping, financial reporting, and assisting with audits. Developed skills in financial software and data analysis.",
    image: "/images/saf.jpeg"
  },
  {
    id: "2",
    position: "Hackathon Attendee",
    company: "Deerhacks IV",
    type: "Hackathon",
    location: "Mississauga, ON, Canada",
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-02-01"),
    description: "Participated in a hackathon focused on developing innovative tech solutions. Collaborated with a partner to create a web application that fits the theme of discovery. Gained experience in rapid full-stack development, teamwork, and problem-solving under pressure.",
    image: "/images/dh.jpg"
  },
  {
    id: "3",
    position: "Hackathon Attendee",
    company: "GenAI Genesis 2025",
    type: "Hackathon",
    location: "Toronto, ON, Canada",
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-03-01"),
    description: "Participated in a hackathon focused on generative AI technologies. Attended workshops by industry leaders and networked with professionals. Gained experience in working with Vertex AI and other Google Cloud tools. Tuned a Gemini flash model by training it on a custom dataset.",
    image: "/images/genai.png"
  }
]

export const educationData: Education[] = [
  {
    id: "1",
    institution: "University of Toronto",
    degree: "Bachelors of Science",
    field: "Computer Science",
    location: "Mississauga, ON",
    startDate: new Date("2022-09-01"),
    endDate: new Date("2026-05-30"),
    description: "Pursuing a degree in Computer Science with a focus on software development and data science. Involved in various student organizations and coding competitions.",
    image: "/images/uoft.jpg"
  },
]

export const contactData: Contact[] = [
  {
    id: "1",
    email: "zuhayrfaizan@gmail.com",
    phone: "+1 (647) 764-9933",
    location: "Etobicoke, ON",
    website: "https://zuhayrfahmed.vercel.app/",
    github: "https://github.com/Jojoz23",
    linkedin: "https://linkedin.com/in/zuhayr-f-ahmed",
  },
]

export const techStackData: TechCategory[] = [
  {
    name: "Languages and DBs",
    skills: [
      {
        name: "Python",
        description: "Data analysis, web scraping, automation",
        icon: "🐍",
      },
      {
        name: "JavaScript",
        description: "ES6+, asynchronous programming, DOM manipulation",
        icon: "🟡"
      },
      {
        name: "Java",
        description: "Object-oriented programming, concurrency, REST APIs",
        icon: "☕",
      },
      {
        name: "C",
        description: "Memory management, system programming, embedded systems",
        icon: "🟢",
      },
      {
        name: "HTML5",
        description: "Semantic markup, accessibility, forms",
        icon: "🌐",
      },
      {
        name: "CSS3",
        description: "Flexbox, Grid, responsive design",
        icon: "🎨",
      },
      {
        name: "PostgreSQL",
        description: "Relational databases, SQL queries, indexing",
        icon: "🐘",
      },
      {
        name: "SQLite",
        description: "Lightweight databases, local storage, testing",
        icon: "📦",
      },
      {
        name: "MySQL",
        description: "Relational databases, joins, transactions",
        icon: "🐬",
      },
      // {
      //   name: "React",
      //   description: "Component libraries, hooks, context API",
      //   icon: "⚛️",
      // },
      // {
      //   name: "TypeScript",
      //   description: "Type systems, interfaces, generics",
      //   icon: "🔷",
      // },
      // {
      //   name: "Next.js",
      //   description: "Server components, app router, API routes",
      //   icon: "▲",
      // },
      // {
      //   name: "CSS/Tailwind",
      //   description: "Responsive design, animations, custom themes",
      //   icon: "🎨",
      // },
    ],
  },
  {
    name: "Web Development",
    skills: [
      {
        name: "React",
        description: "Component-based architecture, hooks, state management",
        icon: "⚛️",
      },
      {
        name: "Next.js",
        description: "Server-side rendering, static site generation, API routes",
        icon: "▲",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework, responsive design, custom themes",
        icon: "🎨",
      },
      {
        name: "Node.js",
        description: "Express, RESTful APIs, middleware",
        icon: "🟢",
      },
      {
        name: "PostgreSQL",
        description: "Query optimization, indexing, transactions",
        icon: "🐘",
      },
      {
        name: "Axios",
        description: "HTTP requests, interceptors, error handling",
        icon: "📡",
      },
      {
        name: "WebSockets",
        description: "Real-time communication, event-driven architecture",
        icon: "🔗",
      },
      {
        name: "jsPDF",
        description: "PDF generation, client-side rendering, document manipulation",
        icon: "📄",
      },
      {
        name: "pdfjs-dist",
        description: "PDF rendering, text extraction, annotations",
        icon: "📑",
      },
      {
        name: "FastAPI",
        description: "Asynchronous web framework, dependency injection, automatic docs",
        icon: "🚀",
      },
      {
        name: "PyJWT",
        description: "JSON Web Tokens, authentication, authorization",
        icon: "🔐",
      },
      {
        name: "Bcrypt",
        description: "Password hashing, security, encryption",
        icon: "🔒",
      },
      // {
      //   name: "Docker",
      //   description: "Containerization, Docker Compose, deployment",
      //   icon: "🐳",
      // },
      // {
      //   name: "Python",
      //   description: "Django, Flask, data processing",
      //   icon: "🐍",
      // },
    ],
  },
  {
    name: "Machine Learning and AI",
    skills: [
      {
        name: "Pandas",
        description: "Data manipulation, analysis, and cleaning",
        icon: "📊",
      },
      {
        name: "Matplotlib",
        description: "Data visualization, plotting, charts",
        icon: "📈",
      },
      {
        name: "Scikit-learn",
        description: "Machine learning algorithms, model evaluation, preprocessing",
        icon: "📚",
      },
      {
        name: "Hugging Face",
        description: "Transformers, NLP models, fine-tuning",
        icon: "🤗",
      },
      {
        name: "Google Cloud Vertex AI",
        description: "Model training, deployment, and management",
        icon: "☁️",
      },
      {
        name: "OpenAI Whisper",
        description: "Speech-to-text transcription, audio processing",
        icon: "🎤",
      },
      {
        name: "Helsinki-NLP",
        description: "NLP models, translation, text generation",
        icon: "🌍",
      },
      {
        name: "Gemini-2.0-flash-001",
        description: "Advanced NLP model, text understanding, and generation",
        icon: "💡",
      },
      {
        name: "Mistral",
        description: "Large language models, text generation, and summarization",
        icon: "🌀",
      },
      // {
      //   name: "Git",
      //   description: "Version control, branching strategies, CI/CD",
      //   icon: "🔄",
      // },
      // {
      //   name: "Google Cloud",
      //   description: "Compute Engine, Cloud Storage, Vertex AI",
      //   icon: "☁️",
      // },
      // {
      //   name: "VS Code",
      //   description: "Extensions, snippets, debugging",
      //   icon: "📝",
      // },
      // {
      //   name:"Java",
      //   description: "REST APIs, microservices, JavaFX",
      //   icon: "☕",
      // }
    ],
  },
  {
    name: "Tools and DevOps",
    skills: [
      {
        name: "Docker",
        description: "Containerization, Docker Compose, deployment",
        icon: "🐳",
      },
      {
        name: "Nginx",
        description: "Web server, reverse proxy, load balancing",
        icon: "🌐",
      },
      {
        name: "Google Compute Engine",
        description: "Virtual machines, auto-scaling, load balancing",
        icon: "☁️",
      },
      {
        name: "Certbot",
        description: "SSL certificate management, HTTPS setup",
        icon: "🔒",
      },
      {
        name: "DuckDNS",
        description: "Dynamic DNS service, domain management",
        icon: "🌐",
      },
      {
        name: "Postman",
        description: "API testing, documentation, collaboration",
        icon: "📬",
      },
      {
        name: "Jira",
        description: "Project management, issue tracking, agile workflows",
        icon: "📋",
      },
      {
        name: "QuickBooks",
        description: "Accounting software, financial management, invoicing",
        icon: "💼",
      },
      {
        name: "Microsoft Excel",
        description: "Data analysis, spreadsheets, formulas",
        icon: "📊",
      },
      {
        name: "Git",
        description: "Version control, branching strategies, CI/CD",
        icon: "🔄",
      },
      {
        name: "Visual Studio Code",
        description: "Code editor, extensions, debugging",
        icon: "📝",
      },
      {
        name: "Jupyter Notebook",
        description: "Interactive coding, data visualization, documentation",
        icon: "📓",
      },
      {
        name: "PyCharm",
        description: "Python IDE, debugging, code analysis",
        icon: "🐍",
      },
      {
        name: "IntelliJ IDEA",
        description: "Java IDE, code refactoring, debugging",
        icon: "☕",
      },
      {
        name: "Eclipse",
        description: "Java IDE, plugin ecosystem, debugging",
        icon: "☕",
      },
      {
        name: "LateX",
        description: "Document preparation system, typesetting, mathematical notation",
        icon: "📄",
      },
      {
        name: "Pixaby",
        description: "Image and video library, royalty-free media",
        icon: "🖼️",
      }
    ],
  }
]

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Speakwrite",
    shortDescription: "An AI-powered speech-to-text note-taking, and assistant platform",
    fullDescription:
      "Developed a full-stack, AI-powered platform called SpeakWrite for real-time speech-to-text transcription, intelligent summarization, and interactive voice assistance to enhance productivity and accessibility. The application supports real-time transcription, voice-controlled editing, tone-adjusted rephrasing, multi-language and multimedia input, and export to PDF and MP4 formats. Collaborated in an agile team of seven to design a scalable PostgreSQL schema, integrate the frontend and backend using WebSockets, and implement a dynamic, user-friendly interface for managing notes and speech interactions. Improved SpeakWrite’s AI performance by preparing high-quality datasets and fine-tuning Gemini-2.0-flash-001 on Google Cloud Vertex AI, leveraging insights from the Google AI Workshop to optimize NLP capabilities. The platform features secure authentication, efficient media handling, and advanced natural language processing powered by Google Cloud Vertex AI.",
    technologies: ["Next.js", "React", "Tailwind CSS", "FastAPI", "PostgreSQL", "WebSockets", "PyJWT", "Bcrypt", "Axios", "jsPDF", "pdfjs-dist", "Jira", "Google Cloud Vertex AI", "Google Cloud Storage", "OpenAI Whisper", "Helsinki", "Gemini-2.0-flash-001", "Mistral"],
    image: "/images/sw.png",
    features: [
      "As a frequent user, I want to be able to register/login to an account so I can see my previously saved work.",
      "As a user, I want to be able to select the tone of my writing (friendly, professional, technical, concise, etc.) before I speak to the tool, so that I can ensure the produced content caters towards my intended audience.",
      "As a user with many files, I want to be able to delete them, so I can clean up file clutter.",
      "As a frequent writer, I want the text-editing commands to be performed within 2 seconds, so that I don’t have to halt my thoughts while brainstorming, and so that it’s a faster alternative to manually typing things out.",
      "As a frequent traveller, I want to be able to coherently translate my notes into other languages, so that I can easily communicate them with others",
      "As a frequent writer, I want to be able to speak the following commands and have the program write them in the text-field, so that I can focus on brainstorming without the hassle of typing.",
      "As a frequent writer, I want to have multiple chats within the tool so I can distinguish conversations.",
      "As a frequent user, I want the ability to switch to dark mode, so that I can reduce eye strain, and enjoy a more comfortable interface in low-light environments.",
      "As a person with many files, I want to be able to upload PDFs and mp3/4 files and perform note-taking tasks on their text/transcript, so that I don’t have to manually extract it.",
      "As a person with many files, I want to be able to download each collection of notes I made on the webpage as PDFs, so I can print them or export them to other applications.",
      "As a user, I want a clean and uncluttered homepage with a clear “Start Conversation” button so that I can quickly begin using the tool",
      "As a person with poor communication skills, I want to be able to visualize my speech and read it off my screen, as if someone is saying it to me, so that I can iteratively improve my on-the-fly speaking skills.",
      "As a frequent writer, I want to save my notes securely in a chat within the tool so that I can easily access it later.",
      "As a user, I want the conversation window to have a minimalistic design so that I can focus on the interaction without unnecessary distractions",
      "As a browser user, I want to be able to access this application through a webpage, so that I can use it for tasks from other locations on any of my devices."
    ],
    liveUrl: "https://speakwrite-ui.vercel.app/",
    githubUrl: "https://github.com/SpeakWrite-CSC301",
  },
  {
    id: "2",
    title: "Flynext",
    shortDescription: "A flight and hotel booking and management application",
    fullDescription:
      "Developed a scalable flight and hotel booking app using Next.js for both frontend and backend, with API routes interfacing a PostgreSQL database to enable efficient search, filtering, and pagination. In a team of three, I built a responsive homepage, navigation, search interface, and real-time notifications with Tailwind CSS for a cohesive UI/UX. The app was containerized with Docker, secured via SSL and Nginx as a reverse proxy, and deployed on Google Compute Engine for auto-scaling, load balancing, and high availability.",
    technologies: ["Next.js", "React", "TailwindCSS", "Axios", "PostgreSQL", "Sqlite", "Prisma", "Docker", "Nginx", "Google Compute Engine", "OSM", "Puppeteer", "Postman", "Certbot", "DuckDNS"],
    image: "/images/flynext.png",
    features: [
      "Users can sign up, log in, log out, and edit their profiles, including first and last name, email, profile picture, and phone number. Authentication is managed using JWT tokens.",
      "Visitors can search for flights by specifying source, destination, and date(s), supporting both one-way and round-trip options.",
      "View comprehensive flight information, including departure/arrival times, duration, and layovers.",
      "As users type in the source or destination fields, an auto-complete dropdown suggests cities and airports.",
      "A user-friendly date picker allows easy selection of travel dates.",
      "Users can add their hotels to the platform, specifying details like name, logo, address, location, star-rating, and images.",
      "Hotel owners can define room types with names (e.g., twin, double), amenities, prices per night, and images.",
      "Hotel owners can view and filter their hotel’s booking list by date and/or room type, cancel reservations, and update room availability.",
      "Owners can view room availability for specific date ranges to understand occupancy trends.",
      "Visitors can search for hotels by check-in date, check-out date, and city, with filters for name, star-rating, and price range. Results display hotel information, starting price, and a location pinpoint on a map, reflecting only available rooms.",
      "View detailed hotel information, including room types, amenities, and pricing.",
      "Check the availability and details of different room types for selected dates in a chosen hotel.",
      "Users can book an itinerary that includes a flight (one-way or round-trip) and/or a hotel reservation.",
      "A checkout page displays all details about the itinerary, collects credit card information, validates card details, and finalizes the booking if everything is correct. Note: Validation involves statically checking the validity of the card number and expiry date; no real charges are made.",
      "Users receive hotel suggestions for the city they are flying to and flight suggestions when booking a hotel stay, with links to the main hotel/flight search page with pre-filled inputs, preserving the current order.",
      "Upon booking, users receive a minimal PDF invoice for their trip, serving as a record of the booking and transaction.",
      "Users can view their bookings to access itinerary and booking information and cancel all or specific parts of a booking, providing flexibility in managing trips.",
      "Users can verify their flight booking to ensure the flight schedule remains as planned.",
      "Users receive notifications when they book a new itinerary and when there are external changes to their booking (e.g., cancellation by themselves or the hotel owner).",
      "Hotel owners receive notifications when a new booking is made for their hotel.",
      "Users and hotel owners can see the number of unread notifications as a badge, updated as they read them.",
      "A clean and intuitive user interface allows visitors to navigate the platform effortlessly.",
      "The website renders well on different screen sizes (monitors, laptops, tablets, and mobile devices), ensuring accessibility and usability across devices.",
      "Visitors can toggle between dark and light modes for a comfortable viewing experience."
    ],
    liveUrl: "https://flynextapp.duckdns.org/",
    githubUrl: "https://github.com/Jojoz23/Flynext",
  },
]

export const aboutMeData = {
  bio: "I'm a passionate and dedicated computer science student at the University of Toronto, specializing in software development and data science. With a strong foundation in programming languages like Python, JavaScript, and Java, I thrive on building innovative web applications that solve real-world problems. My interests span across web development, UI/UX design, cybersecurity, machine learning, artificial intelligence, data science, investing, and hackathons. I enjoy collaborating with others to create impactful projects and continuously seek opportunities to expand my technical expertise.",
  interests: ["Web Development", "UI/UX Design", "Cybersecurity", "Machine Learning", "Artificial Intelligence", "Data Science", "Investing", "Hackathons"],
  goals:
    "I aim to secure an internship or co-op position in software development or data science to gain practical experience and apply my skills in a professional setting. I aim to contribute to innovative projects that leverage technology to make a positive impact. Additionally, I aspire to continue learning and growing in my field, exploring new technologies and methodologies. I also hope to participate in more hackathons and collaborative projects to enhance my problem-solving abilities and teamwork skills. I would like to grow my network by connecting with professionals in the tech industry and learning from their experiences.",
  image: "/images/profile.jpeg",
}
