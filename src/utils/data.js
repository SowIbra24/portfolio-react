export const SKILLS = [
  {
	title: "Backend",
	icon: "./assets/images/backend-icon.png",
	skills: [
		{ skill: "Spring Boot", percentage: "55%" },
		{ skill: "C & C++", percentage: "65%" },
		{ skill: "Node.js", percentage: "30%" },
		{ skill: "Express.js", percentage: "30%" },
	],
  },
  {
    title: "Frontend",
    icon: "./assets/images/frontend-icon.png",
    skills: [
      { skill: "Angular", percentage: "45%" },
      { skill: "CSS3 & SCSS", percentage: "60%" },
      { skill: "JavaScript", percentage: "50%" },
      { skill: "React.js", percentage: "25%" },
    ],
  },
  {
    title: "Tools",
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Vim", percentage: "60%" },
      { skill: "Responsive Design", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "./assets/images/soft-skills-icon.png",
    skills: [
		{ "skill": "Résolution de problèmes", "percentage": "80%" },
		{ "skill": "Travail en équipe", "percentage": "85%" },
		{ "skill": "Adaptabilité", "percentage": "90%" },
		{ "skill": "Autonomie", "percentage": "80%" }
    ],
  },
];

export const EDUCATION = [
	{
		title: "Étudiant en Programmation",
		institution: "",
		date: "École 42 Lyon (2024 - Présent)",
		responsibilities: [
		  "Formation approfondie en programmation avec une pédagogie innovante et rigoureuse.",
		  "Travail sur des projets concrets couvrant les systèmes, l'algorithmique et le développement logiciel.",
		  "Développement de compétences en gestion de projet et en travail d'équipe.",
		  "Approfondissement des connaissances en C, en développement web et en architecture logicielle.",
		],
    },
	{
		title: "Piscine 42",
		institution: "",
		date: "École 42 Lyon (Août 2024)",
		responsibilities: [
		  "Apprentissage intensif du langage C en seulement un mois.",
		  "Développement d'une capacité d'adaptation rapide face à des problématiques algorithmiques complexes.",
		  "Travail en autonomie et en collaboration dans un environnement de peer-learning exigeant.",
		  "Expérience marquante du concours de sélection de l'école 42, axé sur la persévérance et la résolution de problèmes.",
		],
	},
	{
		title: "Licence 2 - Informatique",
		institution: "",
		date: "Université Claude Bernard Lyon 1 (2023 - 2024)",
		responsibilities: [
		  "Développement des bases du développement web avec HTML, CSS, JavaScript et PHP.",
		  "Initiation aux bases de données relationnelles avec MySQL et PostgreSQL.",
		  "Étude des structures avancées de données et des algorithmes d'optimisation.",
		  "Premiers pas dans le développement d'applications et de systèmes d'information.",
		  "Année validée avec mention Très Bien.",
		],
	},
	{
		title: "Licence 1 - Informatique",
		institution: "",
		date: "Université Claude Bernard Lyon 1 (2022 - 2023)",
		responsibilities: [
		  "Étude approfondie des bases de la programmation en Python et Java.",
		  "Apprentissage des structures de données et algorithmes fondamentaux.",
		  "Introduction à l'algèbre linéaire et à la logique mathématique pour l'informatique.",
		  "Développement de projets académiques en programmation orientée objet.",
		  "Année validée avec mention Très Bien.",
		],
	},
	{
	  title: "Licence 1 - Remédiation en Informatique",
	  institution: "",
	  date: "Université de Bourgogne, Dijon (2021 - 2022)",
	  responsibilities: [
		"Acquisition des bases fondamentales en algorithmique et en mathématiques appliquées à l'informatique.",
		"Apprentissage des structures de contrôle et des concepts fondamentaux de la programmation.",
		"Développement de la rigueur mathématique et logique nécessaire pour la programmation.",
		"Année validée avec mention Assez Bien.",
	  ],
	},
  ];
  

export const WORK_EXPERIENCE = [
	{
		title: "Minishell (En cours)",
		date: "17 Fevrier 2025 - Présent",
		git: "https://github.com/mbah24-dev/",
		responsibilities: [
		  "Développement d'un shell simplifié en C, inspiré des fonctionnalités de bash.",
		  "Implémentation des fonctionnalités de base : exécution de commandes, gestion de l'environnement, redirection et pipes.",
		  "Amélioration continue du projet avec l'ajout de nouvelles fonctionnalités comme l'autocomplétion et la gestion des variables d'environnement.",
		  "Travail sur la robustesse du projet et la gestion des erreurs pour rendre le shell le plus stable et fonctionnel possible.",
		],
	},
	{
	  title: "FdF (Fil de Fer)",
	  date: "8 Janvier 2025 - 20 Janvier 2025",
	  git: "https://github.com/mbah24-dev/FdF",
	  responsibilities: [
		"Développement d'un programme en C permettant de créer une carte en 3D à partir d'un fichier texte représentant un terrain.",
		"Gestion des transformations géométriques (translation, rotation, zoom) pour afficher la carte sous différents angles.",
		"Optimisation du rendu graphique avec la bibliothèque MiniLibX pour un affichage fluide et interactif.",
		"Mise en place d'une gestion des erreurs et des tests pour assurer la stabilité et la performance du programme.",
	  ],
	},
	{
	  title: "Push_Swap",
	  date: "15 Decembre 2024 - 5 Janvier 2025",
	  git: "https://github.com/mbah24-dev/push_swap",
	  responsibilities: [
		"Développement d'un programme en C permettant de trier des piles d'entiers à l'aide de commandes simples.",
		"Implémentation d'algorithmes de tri efficaces pour optimiser le temps d'exécution (complexité minimale).",
		"Gestion de la mémoire et des ressources pour un fonctionnement optimal, même avec de grandes quantités de données.",
		"Réalisation de tests de performance et d'optimisation pour améliorer l'efficacité du tri dans différents cas de figure.",
	  ],
	},
	{
	  title: "Pipex",
	  date: "2 Fevrier 2025 - 15 Fevrier 2025",
	  git: "https://github.com/mbah24-dev/Pipex",
	  responsibilities: [
		"Création d'un projet en C permettant d'exécuter plusieurs commandes en chaîne via des pipes (pipex).",
		"Développement de la gestion de processus et de la redirection de flux entre les commandes pour une exécution fluide.",
		"Implémentation de la gestion des erreurs et de la communication inter-processus.",
		"Optimisation de la consommation mémoire et de la gestion des ressources pour garantir la stabilité du programme.",
	  ],
	},
	{
		title: "A-Start",
		date: "20 Juillet 2024 - 30 Aout 2024",
		git: "https://github.com/mbah24-dev/A-Start",
		responsibilities: [
		  "Implémentation en C++ d'une simulation de flux de terrain utilisant la bibliothèque SDL pour la gestion graphique.",
		  "Développement d'un algorithme A* pour simuler le déplacement d'unités sur une carte en fonction de différents types de terrains.",
		  "Création d'une interface graphique permettant de visualiser en temps réel le chemin parcouru par les unités et les obstacles rencontrés.",
		  "Optimisation des performances pour gérer des simulations avec un grand nombre d'unités sans perte de fluidité.",
		],
	},
  ];
  
