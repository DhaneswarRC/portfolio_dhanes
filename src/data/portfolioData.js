export const portfolioData = {
  personal: {
    name: "Dhaneswar R C",
    role: "Data Analyst & Python Developer",
    tagline: "Computer Science graduate with a strong foundation in Python, SQL, Power BI, and data analysis. Seeking an entry-level role where I can contribute to organizational growth and build impactful data solutions.",
    location: "Salem, Tamil Nadu, India",
    email: "dhaneswarchandran@gmail.com",
    phone: "+91 8248441796",
    availability: "Available for Immediate Full-Time Roles & Opportunities",
    github: "https://github.com/DhaneswarRC",
    linkedin: "https://linkedin.com/in/dhaneswar-r-c-335530309",
    avatarUrl: "/avatar.jpg",
    twitter: "",
    medium: "",
    resumePdfUrl: "#",
    bio: [
      "Computer Science graduate with a strong foundation in Python, SQL, Power BI, and data analysis. Possesses analytical, problem-solving, and communication skills, with a strong willingness to learn and adapt to new technologies.",
      "With hands-on experience spanning deep learning computer vision (YOLO, TensorFlow, CNNs) for driver risk classification, relational data modeling with DAX in Power BI, and modern frontend web engineering at Virtuospark, I look forward to contributing to high-impact teams."
    ]
  },

  stats: [
    { label: "B.Tech Graduation", value: "2025", change: "Computer Science & Business Systems" },
    { label: "Academic CGPA", value: "7.52/10", change: "KSR College of Technology" },
    { label: "Key Projects", value: "2", change: "Power BI & YOLO / CNN" },
    { label: "Technical Certifications", value: "2+", change: "NPTEL Algorithms & Cloud" }
  ],

  skillCategories: [
    {
      category: "Programming & Machine Learning",
      icon: "Code",
      description: "Core programming, algorithmic problem-solving, predictive computer vision, and deep neural networks.",
      skills: [
        { name: "Python", level: 90, highlight: true },
        { name: "SQL", level: 90, highlight: true },
        { name: "TensorFlow", level: 30, highlight: false },
        { name: "YOLO", level: 30, highlight: false },
        { name: "CNN", level: 30, highlight: false }
      ]
    },
    {
      category: "Data Analytics & BI",
      icon: "BarChart3",
      description: "Interactive dashboard development, data cleansing, DAX formulas, and relational business modeling.",
      skills: [
        { name: "Power BI", level: 90, highlight: true },
        { name: "Power Query", level: 80, highlight: true },
        { name: "DAX", level: 80, highlight: true },
        { name: "Data Visualization", level: 80, highlight: true },
        { name: "MS Excel", level: 50, highlight: false }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "Database",
      description: "Version control, development environments, and cloud computing principles.",
      skills: [
        { name: "GitHub & Git", level: 88, highlight: true },
        { name: "VS Code", level: 92, highlight: true },
        { name: "PyCharm", level: 88, highlight: false }
      ]
    },
    {
      category: "Web Development & Frontend",
      icon: "Server",
      description: "Building responsive, cross-browser web interfaces with clean user experience.",
      skills: [
        { name: "HTML5 & Semantic Structure", level: 94, highlight: true },
        { name: "CSS3 & Responsive Layouts", level: 90, highlight: true },
        { name: "JavaScript Fundamentals", level: 82, highlight: false },
        { name: "React Basics", level: 80, highlight: false },
        { name: "UI/UX Usability", level: 86, highlight: false }
      ]
    }
  ],

  projects: [
    {
      id: "power-bi-imdb-dashboard",
      title: "Interactive IMDb Box Office & Genre Analytics Dashboard",
      category: "Dashboards & BI",
      featured: true,
      tagline: "End-to-end Power BI business intelligence suite analyzing revenue patterns, genre ROI, and rating distributions.",
      description: "Engineered a dynamic, multi-view Power BI dashboard utilizing a curated IMDb dataset. Handled end-to-end data transformation, null treatment, and relational data modeling via Power Query and DAX. Built responsive KPI scorecards, custom slice-and-dice filters, and trend charts uncovering high-yield box office genres.",
      impact: [
        "Modeled multi-table relationships and engineered custom DAX measures for weighted averages and revenue trends",
        "Optimized data transformation queries in Power Query, significantly reducing report refresh latency",
        "Empowered instant multi-dimensional exploration across genres, directors, budgets, and viewer reception"
      ],
      stack: ["Power BI", "Power Query", "DAX", "Data Modeling", "Excel", "Data Visualization"],
      githubUrl: "https://github.com/DhaneswarRC",
      demoUrl: "https://github.com/DhaneswarRC",
      imageTheme: "linear-gradient(135deg, #18181b 0%, #27272a 100%)",
      codeSnippet: `// DAX Measure: Revenue Performance & Box Office Return
BoxOffice_ROI = 
DIVIDE(
    SUM(IMDb_Movies[Gross_Revenue]) - SUM(IMDb_Movies[Budget]),
    SUM(IMDb_Movies[Budget]),
    0
)

Weighted_Rating = 
DIVIDE(
    SUMX(IMDb_Movies, IMDb_Movies[Rating] * IMDb_Movies[Num_Votes]),
    SUM(IMDb_Movies[Num_Votes]),
    BLANK()
)`
    },
    {
      id: "driver-risk-prediction-system",
      title: "Driver Risk Prediction & Computer Vision Classification System",
      category: "Python & ML",
      featured: true,
      tagline: "Deep learning computer vision system combining YOLO object detection and CNNs for real-time hazard scoring.",
      description: "Co-developed an automated video telemetry analysis pipeline detecting hazardous driver behaviors (distraction, drowsiness, erratic patterns). Utilized YOLO for vehicular/object localization and Convolutional Neural Networks (CNNs) for behavioral classification to produce an automated predictive risk index.",
      impact: [
        "Integrated YOLO and CNN deep learning architectures for concurrent object localization and behavior classification",
        "Collaborated within a 3-member engineering team to curate training datasets and tune hyper-parameters",
        "Automated predictive risk scoring on continuous video feeds to minimize road accident hazards"
      ],
      stack: ["Python", "TensorFlow", "YOLO", "CNN", "OpenCV", "Deep Learning"],
      githubUrl: "https://github.com/DhaneswarRC",
      demoUrl: "https://github.com/DhaneswarRC",
      imageTheme: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      codeSnippet: `# Convolutional feature extraction & behavior classification head
import tensorflow as tf
from tensorflow.keras import layers, models

def build_driver_behavior_classifier(input_shape=(224, 224, 3), num_classes=5):
    model = models.Sequential([
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=input_shape),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(128, (3, 3), activation='relu'),
        layers.GlobalAveragePooling2D(),
        layers.Dense(128, activation='relu'),
        layers.Dropout(0.35),
        layers.Dense(num_classes, activation='softmax')
    ])
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    return model`
    }
  ],

  experience: [
    {
      role: "Front-End Development Intern",
      company: "Virtuospark Pvt Ltd.",
      period: "April 2024 – May 2024",
      location: "On Site",
      type: "Internship",
      description: "Engineered responsive, cross-browser compatible web pages applying modern HTML and CSS principles, directly improving overall UI usability and navigation.",
      highlights: [
        "Developed responsive, cross-browser compatible web pages using modern HTML and CSS principles, improving overall user interface (UI) usability.",
        "Collaborated with senior developers to review code quality, streamline page navigation, and enhance frontend performance.",
        "Ensured design system consistency and adherence to accessibility and responsive design standards."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Code Review", "UI/UX"]
    },
    {
      role: "Sales Developer Virtual Intern",
      company: "Salesforce",
      period: "November 2023 – January 2024",
      location: "Remote",
      type: "Virtual Internship",
      description: "Designed and executed business process automation workflows using the Salesforce CRM platform.",
      highlights: [
        "Designed and executed business process automation workflows using the Salesforce CRM platform.",
        "Gained practical experience in lead management, fundamentals of CRM and Salesforce platform operations.",
        "Mapped business workflows to automated CRM triggers for streamlined customer lifecycle management."
      ],
      technologies: ["Salesforce CRM", "Process Automation", "Lead Management", "Workflow Triggers"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Business Systems",
      institution: "K.S. Rangasamy College of Technology",
      period: "2021 – 2025",
      grade: "CGPA: 7.52 / 10",
      details: "Tiruchengode, Tamil Nadu | Coursework: Data Structures & Algorithms, Python Programming, Database Management Systems (SQL), Operating Systems, Business Systems & Analytics."
    }
  ],

  certifications: [
    {
      name: "Data Structures and Algorithms Using Java",
      issuer: "NPTEL",
      date: "Certified",
      credentialId: "NPTEL-DSA-JAVA",
      verifyUrl: "https://nptel.ac.in",
      icon: "Award"
    },
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      date: "Certified",
      credentialId: "NPTEL-CLOUD-COMP",
      verifyUrl: "https://nptel.ac.in",
      icon: "Award"
    }
  ],

  testimonials: [
    {
      quote: "Dhaneswar demonstrated exceptional dedication during his frontend internship, producing clean, responsive web pages and collaborating effectively with the engineering team to review code and improve UI standards.",
      author: "Senior Engineering Mentor",
      role: "Lead Developer",
      company: "Virtuospark Pvt Ltd."
    },
    {
      quote: "Strong aptitude in analytical thinking, Python, and Power BI. Dhaneswar approaches data problems with structure, clarity, and a strong drive to learn and apply modern data methodologies.",
      author: "Academic Project Advisor",
      role: "Department of Computer Science & Business Systems",
      company: "K.S. Rangasamy College of Technology"
    }
  ]
};
