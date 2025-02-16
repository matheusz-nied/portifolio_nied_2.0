

const title = 'Skills';



// skills.ts
 const skills = [
	{
	  id: 1,
	  title: "Desenvolvimento Web",
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
	  image: "/images/development.png",
	  skills: [
		{ name: "Flutter", icon: "/images/flutter.png" },
		{ name: "React Native", icon: "/images/dart.png" },
		{ name: "Firebase", icon: "/images/firebase.png" },
	  ],
	},
	{
		id: 3,
		title: "Problem Solving",
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
  
  const SkillsData ={
	title,
	skills

  }

export default SkillsData;
