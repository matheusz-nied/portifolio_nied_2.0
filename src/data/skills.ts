

const title = 'Skills';



// skills.ts
const skills = [
	{
		id: 1,
		title: "Web Development",
		description: "Desenvolvimento de aplicações web modernas.Tenho experiência na criação de interfaces dinâmicas e responsivas, utilizando as tecnologias mais modernas do mercado como VueJs, ReactJs, Php/Laravel e Django/Python.  Meu foco é entregar aplicações eficientes, seguras e otimizadas para proporcionar a melhor experiência ao usuário.",
		techs: "🛠️ Tecnologias: Vue.js, PHP, React.js, Node.js, TypeScript, Python, PostgreSQL.",
		image: "/images/edge.png",
		skills: [
			{ name: "Vue Js", icon: "/images/vue.png" },
			{ name: "Php", icon: "/images/php.png" },
			{ name: "React Js", icon: "/images/react.png" },
			{ name: "NodeJs", icon: "/images/node.png" },
			{ name: "Typescript", icon: "/images/typescript.png" },
			{ name: "Python", icon: "/images/python.png" },
			{ name: "Postgres", icon: "/images/postgres.png" },
		],
	},
	{
		id: 2,
		title: "Mobile App",
		description: "Criação de aplicativos móveis intuitivos e fluidos para Android e iOS. Trabalho com frameworks poderosos para desenvolver apps de alto desempenho, garantindo uma experiência envolvente para os usuários, seja para startups ou grandes empresas.",
		techs: "🔧 Tecnologias: Flutter, Dart, Firebase.",
		image: "/images/development.png",

		skills: [
			{ name: "Flutter", icon: "/images/flutter.png" },
			{ name: "Dart", icon: "/images/dart.png" },
			{ name: "Firebase", icon: "/images/firebase.png" },
		],
	},
	{
		id: 3,
		title: "Problem Solving",
		description: "Habilidade em resolver problemas complexos de forma eficiente e criativa. Minha abordagem analítica e adaptativa me permite encontrar soluções para desafios técnicos e de negócio. Adaptabilidade para aprender e lidar com novas tecnologias.",
		techs: "💡 Habilidades: Pensamento estratégico, adaptabilidade, resolução criativa de problemas.",
		image: "/images/problem-solving.png",

		skills: [
			{ name: "Ideias", icon: "/images/idea.png" },
			{ name: "Adptação", icon: "/images/adaptation.png" },
			{ name: "Smart", icon: "/images/brain.png" },
		],
	},
	{
		id: 4,
		title: "Blockchain",
		description: "Desenvolvimento e integração de soluções baseadas em blockchain. Tenho experiência na criação de contratos inteligentes, aplicações descentralizadas (DApps) e implementação de sistemas seguros e confiáveis na Web3.",
		techs: "🔗 Tecnologias: Solidity, Golang, Ethereum, Ether.js, Blockchain.",
		image: "/images/blockchain1.png",
		skills: [
			{ name: "Blockchain", icon: "/images/blockchain.png" },
			{ name: "Solidity", icon: "/images/solidity.png" },
			{ name: "Golang", icon: "/images/go.png" },
			{ name: "Ether", icon: "/images/ether.png" },
			{ name: "Etherum", icon: "/images/etherum.png" },
		],
	},
];

const SkillsData = {
	title,
	skills

}

export default SkillsData;
