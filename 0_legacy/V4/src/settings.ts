// src/settings.ts
// Updated to match the original template's expected structure

// SEO Configuration
export const seo = {
	default_title: "Dr. Sreelekha Guggilam",
	default_description: "Academic website of Dr. Sreelekha Guggilam (Lekha), Assistant Professor in Data Science at Texas A&M University Corpus Christi, specializing in time-series databases, anomaly detection, quantum computing, and foundation models.",
	default_image: "/images/headshot.jpg", // Add your photo here
	keywords: "data science, machine learning, anomaly detection, quantum computing, time-series analysis, spatiotemporal modeling, foundation models"
};

// Profile Information
export const profile = {
	title: "Dr. ",
	fullName: "Sreelekha Guggilam",
	preferredName: "Lekha",
	position: "Assistant Professor in Data Science",
	institution: "Texas A&M University Corpus Christi",
	department: "Department of Mathematics and Statistics",
	email: "sreelekha.guggilam@tamucc.edu", // Update this format
	bio: "Dr. Sreelekha Guggilam (Lekha) is an Assistant Professor in Data Science at Texas A&M University Corpus Christi and doctoral faculty in the Coastal and Marine Sciences Department. Her research focuses on time-series databases, anomaly detection, quantum computing, and foundation models.",

	// Social Links
	links: {
		linkedin: "https://www.linkedin.com/in/sreelekhaguggilam",
		github: "https://github.com/sreelekh",
		email: "mailto:sreelekha.guggilam@tamucc.edu",
		orcid: "", // Add if available
		googleScholar: "", // Add if available
		researchGate: "" // Add if available
	}
};

// Additional exports for component compatibility
export const fullName = "Sreelekha Guggilam";

export const currentPosition = {
	title: "Assistant Professor in Data Science",
	institution: "Texas A&M University Corpus Christi",
	department: "Department of Mathematics and Statistics"
};

export const researchInterests = [
	"Time-series databases",
	"Anomaly detection",
	"Quantum computing",
	"Foundation models",
	"Spatiotemporal analysis",
	"Human mobility pattern analysis",
	"Disease outbreak prediction",
	"Machine learning"
];

export const newsItems = [
	{
		date: "2025-01-01", // Update with actual dates
		title: "New Course: Advanced Topics in Deep Learning",
		description: "Teaching DASC-5390 Advanced Topics in Deep Learning, covering Generative AI models, NLP, attention mechanisms, and transformers.",
		type: "teaching"
	},
	{
		date: "2024-08-01",
		title: "Joined Texas A&M University Corpus Christi",
		description: "Started position as Assistant Professor in Data Science and doctoral faculty in Coastal and Marine Sciences.",
		type: "career"
	},
	{
		date: "2023-03-01",
		title: "DOE Early Career LDRD Award",
		description: "Awarded $300k for research in Quantum Variational Inference for Anomaly Detection in Spatiotemporal Data.",
		type: "award"
	}
];

// Template Configuration
export const template = {
	transitions: true,
	menu_left: false, // Set to true if you want menu on the left side
	dark_mode: true,
	show_cv: true,
	show_blog: true,
	show_research: true,
	show_publications: true,
	show_teaching: true,
	show_contact: true
};

// Research Interests
export const research = {
	interests: [
		"Time-series databases",
		"Anomaly detection",
		"Quantum computing",
		"Foundation models",
		"Spatiotemporal analysis",
		"Human mobility pattern analysis",
		"Disease outbreak prediction",
		"Machine learning"
	],

	current_projects: [
		{
			title: "Quantum Variational Inference for Anomaly Detection",
			description: "DOE Early Career LDRD project developing novel quantum computing approaches for spatiotemporal classification and anomaly detection.",
			funding: "DOE-ORNL Early Career Development Research Award ($300k)",
			duration: "Mar 2023 to Feb 2025"
		},
		{
			title: "Environmental Anomaly Detection for Biopreparedness",
			description: "Large-scale research project focused on environmental monitoring and prediction systems.",
			funding: "ORNL Laboratory Directors R&D Funds ($930k)",
			duration: "Feb 2023 to Jan 2025"
		}
	]
};

// Navigation Menu
export const navigation = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Research", path: "/research" },
	{ name: "Publications", path: "/publications" },
	{ name: "Teaching", path: "/teaching" },
	{ name: "CV", path: "/cv" },
	{ name: "Contact", path: "/contact" }
];

// News and Updates
export const news = [
	{
		date: "2025-01-01", // Update with actual dates
		title: "New Course: Advanced Topics in Deep Learning",
		description: "Teaching DASC-5390 Advanced Topics in Deep Learning, covering Generative AI models, NLP, attention mechanisms, and transformers.",
		type: "teaching"
	},
	{
		date: "2024-08-01",
		title: "Joined Texas A&M University Corpus Christi",
		description: "Started position as Assistant Professor in Data Science and doctoral faculty in Coastal and Marine Sciences.",
		type: "career"
	},
	{
		date: "2023-03-01",
		title: "DOE Early Career LDRD Award",
		description: "Awarded $300k for research in Quantum Variational Inference for Anomaly Detection in Spatiotemporal Data.",
		type: "award"
	}
];

// Current Position Details
export const position = {
	current: {
		title: "Assistant Professor in Data Science",
		department: "Department of Mathematics and Statistics",
		institution: "Texas A&M University Corpus Christi",
		location: "Corpus Christi, TX",
		startDate: "August 2024",
		additionalRole: "Doctoral faculty in Coastal and Marine Sciences Department"
	},

	responsibilities: [
		"Active member of Academics Committee for the Data Science PhD Program Planning Committee",
		"Active member in Graduate Admissions Committee",
		"Course design and instruction in advanced data science topics",
		"Research in time-series databases, anomaly detection, and quantum computing",
		"Student mentoring and supervision"
	]
};

// Awards and Recognition
export const awards = [
	{
		title: "Top Downloaded Author in Wiley Journal of Statistical Analysis and Data Mining",
		year: "2023",
		organization: "Wiley"
	},
	{
		title: "Oak Ridge National Lab Early Career LDRD Competition Winner",
		year: "2023",
		organization: "Oak Ridge National Laboratory",
		description: "Amongst the 8 selected awardees at ORNL in 2023"
	},
	{
		title: "Runner up: STEM for Everyone: Women in STEM Cooperative (WiSC)",
		year: "2021",
		organization: "WiSC"
	}
];

// Contact Information
export const contact = {
	email: "sreelekha.guggilam@tamucc.edu", // Update this
	office: "Department of Mathematics and Statistics, Texas A&M University Corpus Christi",
	address: "Corpus Christi, TX",

	// Professional Profiles
	profiles: {
		linkedin: "https://www.linkedin.com/in/sreelekhaguggilam",
		github: "https://github.com/sreelekh",
		orcid: "", // Add if available
		googleScholar: "", // Add if available
		researchGate: "" // Add if available
	}
};

// Social Links Configuration (Required by SocialIcons component)
export const social = {
	email: "sreelekha.guggilam@tamucc.edu", // Update this
	github: "https://github.com/sreelekh", // Verify this URL
	gitlab: "", // Add if you have GitLab
	x: "", // Add if you have X/Twitter
	linkedin: "https://www.linkedin.com/in/sreelekhaguggilam", // Verify this URL
	scholar: "", // Add Google Scholar URL
	inspire: "", // Add INSPIRE-HEP URL if available
	arxiv: "" // Add arXiv author URL if available
};

// Export everything for backward compatibility
export const settings = {
	seo,
	profile,
	template,
	research,
	navigation,
	news,
	position,
	awards,
	contact,
	social,
	// Component compatibility exports
	fullName,
	currentPosition,
	researchInterests,
	newsItems,
	siteTitle: seo.default_title
};