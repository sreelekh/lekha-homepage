// src/data/cv.ts
// CV data for Dr. Sreelekha Guggilam

export const cv = {
	// Personal Information
	personalInfo: {
		fullName: "Dr. Sreelekha Guggilam",
		preferredName: "Lekha",
		title: "Assistant Professor in Data Science",
		institution: "Texas A&M University Corpus Christi",
		department: "Department of Mathematics and Statistics",
		email: "sreelekha.guggilam[at]tamucc[dot]edu", // Replace [at] and [dot] with @ and .
		linkedin: "sreelekhaguggilam",
		github: "github.com/sreelekh",
		phone: "Contact via email", // Removed phone number for bot protection
	},

	// Education
	education: [
		{
			degree: "Ph.D. in Computational Data Science (CDSE)",
			institution: "University at Buffalo, The State University of New York",
			location: "Buffalo, NY",
			year: "Aug 2017 - Jun 2022",
			details: ""
		},
		{
			degree: "Masters in Civil Engineering (Transportation Statistics)",
			institution: "University at Buffalo, The State University of New York",
			location: "Buffalo, NY",
			year: "Aug 2016 - Sept 2017",
			details: ""
		},
		{
			degree: "Masters in Biostatistics-Bioinformatics",
			institution: "University at Buffalo and Roswell Park Cancer Institute (RPCI)",
			location: "Buffalo, NY",
			year: "Aug 2014 - Sept 2015",
			details: ""
		},
		{
			degree: "Bachelors in Mathematics (B.Math), Honors",
			institution: "Indian Statistical Institute (ISI)",
			location: "Bangalore, India",
			year: "Jul 2011 - May 2014",
			details: ""
		}
	],

	// Professional Experience
	experience: [
		{
			title: "Assistant Professor in Data Science",
			institution: "Texas A&M University Corpus Christi",
			department: "Department of Mathematics and Statistics",
			location: "Corpus Christi, TX",
			period: "August 2024 - Present",
			responsibilities: [
				"Doctoral faculty in Coastal and Marine Sciences Department",
				"Research interests: Time-series databases, anomaly detection, quantum computing, foundation models",
				"Active member of Academics Committee for the Data Science PhD Program Planning Committee",
				"Active member in Graduate Admissions Committee",
				"Designed graduate course on advanced topics in Deep Learning including Generative AI model, basics of natural language processing, attention mechanisms, transformers, and model distillation"
			]
		},
		{
			title: "Research and Development Associate in Machine Learning",
			institution: "Oak Ridge National Laboratory",
			department: "National Security Sciences Directorate, Geo-spatial Science and Human Dynamics Division",
			location: "Oak Ridge, TN",
			period: "Mar 2022 - July 2024",
			responsibilities: [
				"Focus of study: Human mobility and pattern of life, disease outbreak prediction, EM signals analysis, time-series databases, anomaly detection, spatio-temporal analysis, quantum computing, foundation models, signals data",
				"Department of Energy (DOE) Early Career LDRD awardee for research in Quantum computing for spatiotemporal modeling. Principal Investigator on developing novel quantum computing approaches for spatiotemporal classification and anomaly detection. Amongst the 8 selected awardees at ORNL in 2023",
				"Lead on modeling and algorithm development (invention disclosure submitted) for work on extended Large deviations Anomaly Detection modeling for anomaly detection in indoor pattern of life and human mobility",
				"Active contributor to multiple Generative AI foundation model projects using multimodal data",
				"Awarded 4 research grants as Principle Investigator and co-Principle Investigator",
				"Lead statistician on developing outbreak prediction models using alternate data sources"
			]
		},
		{
			title: "Research Assistant - Anomaly Detection in Streaming High-Dimensional Time Series Database",
			institution: "University at Buffalo",
			department: "Institute of Computational Data Science and Department of Computer Science & Engineering",
			location: "Buffalo, NY",
			period: "Sept 2019 - Feb 2022",
			responsibilities: [
				"Mentors: Dr. Abani Patra (UB ACM2E Lab, Tufts University), Dr. Varun Chandola (UB Data Science Research Group)",
				"Solved outstanding problems in anomaly detection in evolving data and collections of multivariate time series",
				"Integrated Clustering and Anomaly Detection (INCAD): Conceptualized and published an integrated clustering and anomaly detection algorithm (INCAD) for non-parametric, unsupervised anomaly detection in streaming data using extreme value theory",
				"Formulated mathematical framework for extending Generalized Pareto Distribution for high dimensional data",
				"Large Deviations Anomaly Detection (LAD): Designed a large deviations theory inspired fast anomaly detection model (LAD) in high-dimensional multivariate time-series database",
				"Investigated the impact of local and global policy implementation on COVID-19 trends using LAD",
				"LAD Inspired Iterative Training (LIIT): Developed novel low shot training inspired fast training algorithm for artificial neural networks using LAD"
			]
		},
		{
			title: "Teaching Assistant",
			institution: "University at Buffalo",
			department: "Institute of Computational Data Science",
			location: "Buffalo, NY",
			period: "Sept 2017 - Sept 2019",
			responsibilities: [
				"Led and coordinated a team of teaching assistants for graduate courses in data science",
				"Collaborated on developing exams and assignments and lead recitation sessions"
			]
		},
		{
			title: "Risk Manager",
			institution: "American Express, World Financial Center",
			department: "Global Corporate Portfolios",
			location: "NY, NY",
			period: "Nov 2015 - Jun 2016",
			responsibilities: [
				"Risk And Data Analytics for Corporate Credit Portfolios",
				"Quantified the change in spending trends in cross-sold clients prior to and post the on-boarding process",
				"Developed and improved risk margins for corporate clients in Global Corporate Payments",
				"Responsible for identifying trends in risk-based industries and states to enable risk control actions on the portfolios"
			]
		}
	],

	// Grant Support
	grants: [
		{
			title: "Quantum Variational Inference for Anomaly Detection in Spatiotemporal Data",
			agency: "DOE-ORNL Early Career Development Research Award",
			amount: "$300k",
			duration: "2 Years",
			period: "Mar 2023 to Feb 2025",
			role: "PI (Share - 100%)",
			team: "Sreelekha Guggilam"
		},
		{
			title: "Artificial Intelligence Models for Land Cover Forecasting",
			agency: "ORNL Laboratory Directors R&D SEED Funds",
			amount: "$190k",
			duration: "2 Years",
			period: "Feb 2023 to Jan 2025",
			role: "Contributor",
			team: "Christa Brelsford (PI), Philipe Ambrozio Dias (Co-PI), Soumendra Bhnaja (Contributor), Ethan Coon (Contributor), Dalton Lunga (Contributor)"
		},
		{
			title: "Environmental Anomaly Detection for Biopreparedness",
			agency: "ORNL Laboratory Directors R&D Funds",
			amount: "$930k",
			duration: "2 Years",
			period: "Feb 2023 to Jan 2025",
			role: "Co-Principal Investigator",
			team: "Assaf Anyamba (PI), Heidi Tubbs (Co-PI)"
		},
		{
			title: "Pattern of Life for Nuclear Non-proliferation",
			agency: "ORNL Laboratory Directors R&D Funds",
			amount: "$780k",
			duration: "2 Years",
			period: "October 2022 to September 2024",
			role: "Co-Principal Investigator",
			team: "Debraj De (PI), Chatika Gunaratne (co-PI)"
		}
	],

	// Teaching Experience
	teaching: [
		{
			course: "DASC-5390 - Advanced Topics in Deep Learning",
			institution: "Texas A&M Corpus Christi",
			semester: "Spring 2025",
			role: "Instructor",
			description: "Graduate course covering Generative AI models, basics of natural language processing, attention mechanisms, transformers, and model distillation"
		},
		{
			course: "EAS 501 - Introduction to Numerical Mathematics for Computing and Data Science",
			institution: "University at Buffalo",
			semester: "Fall 2017, Fall 2018",
			role: "Teaching Assistant"
		},
		{
			course: "EAS 502 - Introduction to Probability Theory for Data Science",
			institution: "University at Buffalo",
			semester: "Fall 2017, Fall 2018",
			role: "Teaching Assistant"
		},
		{
			course: "EAS 503 - Programming and Database Fundamentals for Data Scientists",
			institution: "University at Buffalo",
			semester: "Fall 2017, Fall 2018",
			role: "Teaching Assistant"
		},
		{
			course: "EAS 504 - Applications of Data Science: Industry Overview",
			institution: "University at Buffalo",
			semester: "Summer 2017, Summer 2018",
			role: "Teaching Assistant"
		},
		{
			course: "EAS 508 - Statistical Learning and Data Mining I",
			institution: "University at Buffalo",
			semester: "Fall 2017, Fall 2018",
			role: "Teaching Assistant"
		}
	],

	// Awards and Honors
	awards: [
		{
			title: "Top Downloaded Author in Wiley Journal of Statistical Analysis and Data Mining",
			year: "2023",
			organization: "Wiley"
		},
		{
			title: "Oak Ridge National Lab Early Career LDRD Award Winner",
			year: "2023",
			organization: "Oak Ridge National Laboratory"
		},
		{
			title: "Runner up: STEM for Everyone: Women in STEM Cooperative (WiSC)",
			year: "2021",
			organization: "WiSC"
		},
		{
			title: "Travel Support: UB Navigate Project for women in STEM",
			year: "2018",
			organization: "University at Buffalo"
		},
		{
			title: "Travel Support: SAMSI for the workshop on Model Uncertainty: Mathematical and Statistical (MUMS)",
			year: "2018",
			organization: "SAMSI"
		},
		{
			title: "Travel Support: SAMSI for the workshop on Precision Medicine (PMED)",
			year: "2018",
			organization: "SAMSI"
		},
		{
			title: "Honors degree in Mathematics from Indian Statistical Institute",
			year: "2014",
			organization: "Indian Statistical Institute"
		},
		{
			title: "Full student scholarship (merit-based) throughout the completion of the degree at Indian Statistical Institute",
			year: "2011–2014",
			organization: "Indian Statistical Institute"
		}
	],

	// Research Interests
	researchInterests: [
		"Time-series databases",
		"Anomaly detection",
		"Quantum computing",
		"Foundation models",
		"Spatiotemporal analysis",
		"Human mobility and pattern of life",
		"Disease outbreak prediction",
		"EM signals analysis",
		"Machine learning",
		"Statistical modeling"
	],

	// Skills
	skills: {
		programming: ["Python", "R", "MATLAB", "SQL", "JavaScript", "TypeScript"],
		ml_frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
		databases: ["Time-series databases", "SQL", "NoSQL"],
		quantum: ["Quantum computing algorithms", "Variational inference"],
		statistical: ["Extreme value theory", "Large deviations theory", "Bayesian methods"],
		tools: ["Git", "Docker", "Jupyter", "LaTeX"]
	},

	// Professional Service
	service: [
		{
			type: "Editorial/Reviewer",
			role: "Referee Service",
			organization: "Data Mining and Knowledge Discovery, Information Systems, Journal of Computational Science, Journal of Hydrology, IEEE Geoscience and Remote Sensing Letters, Frontiers in Earth, Information Sciences, Neural Networks",
			period: "Ongoing"
		},
		{
			type: "Panel Judge",
			role: "Judge for the IGNITE Talks",
			organization: "IGNITE",
			period: "2023"
		},
		{
			type: "Panel Judge",
			role: "Judge for SCUDEM VII - Modeling with Differential Equations",
			organization: "SCUDEM",
			period: "2022, 2023"
		},
		{
			type: "Panel Judge",
			role: "Albert Einstein Distinguished Educator Fellowship (AEF) Program",
			organization: "AEF",
			period: "2022"
		}
	],

	// Memberships
	memberships: [
		{
			organization: "Delta Omega Honorary Society in Public Health",
			period: "2023-Present"
		},
		{
			organization: "Institute of Electrical and Electronics Engineers (IEEE)",
			period: "2022-Present"
		},
		{
			organization: "Association for Computing Machinery (ACM)",
			period: "2022-Present"
		},
		{
			organization: "American Geophysical Union (AGU)",
			period: "2022-Present"
		},
		{
			organization: "Society for Industrial and Applied Mathematics (SIAM)",
			period: "2019-Present"
		},
		{
			organization: "Association for Women in Mathematics (AWM)",
			period: "2017-2023"
		},
		{
			organization: "Women in STEM Cooperative (WiSC)",
			period: "2017-2022"
		}
	]
};

// Selected Publications (Key publications - full list can be expanded)
export const publications = [
	{
		title: "Large deviations anomaly detection (lad) for collection of multivariate time series data: Applications to covid-19 data",
		authors: "S. Guggilam, V. Chandola, and A. K. Patra",
		journal: "Journal of Computational Science",
		volume: "vol. 72",
		pages: "p. 102 101",
		year: "2023",
		type: "journal",
		url: ""
	},
	{
		title: "Tracking clusters and anomalies in evolving data streams",
		authors: "S. Guggilam, V. Chandola, and A. Patra",
		journal: "Statistical Analysis and Data Mining: The ASA Data Science Journal",
		volume: "vol. 15, no. 2",
		pages: "pp. 156–178",
		year: "2022",
		type: "journal",
		url: ""
	},
	{
		title: "Integrated clustering and anomaly detection (incad) for streaming data",
		authors: "S. Guggilam, S. M. A. Zaidi, V. Chandola, and A. K. Patra",
		journal: "Computational Science–ICCS 2019: 19th International Conference, Faro, Portugal, June 12–14, 2019, Proceedings, Part IV 19",
		publisher: "Springer International Publishing",
		pages: "pp. 45–59",
		year: "2019",
		type: "conference",
		url: ""
	},
	{
		title: "Classifying anomalous members in a collection of multivariate time series data using large deviations principle: An application to covid-19 data",
		authors: "S. Guggilam, V. Chandola, and A. K. Patra",
		journal: "International Conference on Computational Science",
		publisher: "Springer",
		pages: "pp. 133–149",
		year: "2022",
		type: "conference",
		url: ""
	},
	{
		title: "Non-parametric probabilistic anomaly detection in evolving data: Applications to time series",
		authors: "S. Guggilam",
		journal: "Ph.D. dissertation, State University of New York at Buffalo",
		year: "2022",
		type: "thesis",
		url: ""
	}
	// Add more publications as needed
];