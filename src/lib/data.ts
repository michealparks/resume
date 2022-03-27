import type { Education, Job, Project, Skill } from './types'

const header = {
	name: 'Micheal Parks',
	title: 'Software Engineer',
	portrait: 'me.jpg',
	description: `
		I have an ongoing love affair with science and artistic communication, yet I’m pragmatic and an engineer at heart.
		I love the craft of storytelling, which makes me sensitive to user experience and fuels my passion for video game development.
		I’m fascinated by the web and it’s transformative power for society.
		I’m a tactile learner, so I often need to play with concepts before understanding them;
		however, I have been told that learning agility is one of my strengths,
		so it doesn’t take me long to pick up a new concept after getting my hands dirty.
		I like the mantra that one should make their work “as simple as possible, but no simpler”,
		which makes programming for me a continual joy and challenge.
	`
}

const contact = {
	email: 'michealparks1989@gmail.com',
	phone: '1-718-362-7680',
	location: 'Brooklyn, NY',
	website: 'parks.lol',
	github: 'github.com/michealparks',
	linkedin: 'linkedin.com/in/michealparks'
}

const jobs: Job[] = [
	{
		title: 'Senior Sofware Engineer - Frontend',
		company: 'Bowery Farming',
		duration: 'June 2021 - April 2022',
		description: `
			I established code standards, design patterns, and helped grow a Frontend engineering culture for BoweryOS: the app that orchestrates and monitors
			Bowery's farms. I mentored engineers and set up tools and practices that increased the overall reliability and positive developer experience when
			building upon and maintaining the app.
		`,
	}, {
		title: 'Lead Software Engineer',
		company: 'MongoDB',
		duration: 'May 2015 – Nov 2020',
		description: `
			I led a team that worked on mongodb.com, an internal MongoDB-backed CMS, and engineering projects within the larger marketing team.
			We regularly collaborated with other engineering teams on projects such as <a class="link" target="_tab" href="https://www.mongodb.com/atlas/data-lake-demo">interactive web apps</a> that demoed MongoDB cloud products.
			I onboarded, mentored, and collaborated with multiple front-end and full-stack developers on my team.
		`
	}, {
		title: 'Lead Frontend Developer',
		company: 'Pixbi',
		duration: 'Nov 2013 – Apr 2015',
		description: `
			Pixbi enabled users to view, share, and purchase products from images in blogs and digital magazines.
			I led the development of the embedded javascript applications that powered Pixbi.
		`
	}, {
		title: 'New Media Web Developer',
		company: 'University of Central Florida',
		duration: '2012 - 2013',
		description: `
			I wrote educational javascript games and embeddable widgets - like <a class="link" target="_tab" href="https://materia.ucf.edu/widgets/12-hangman">Hangman</a> and <a class="link" target="_tab" href="https://materia.ucf.edu/widgets/9-flash-cards">Flashcards</a> - alongside Lego models and some fantastic people.
		`
	}
]

const education: Education[] = [
	{
		institution: 'Brooklyn College',
		duration: '2017 - 2020',
		concentration: 'Mathematics'
	}, {
		institution: 'University of Central Florida',
		duration: '2008 - 2013',
		concentration: 'Biology, Computer Science and Psychology Minor'
	}
]

const projects: Project[] = [
	{
		title: 'Galeri',
		link: 'https://galeri.io',
		description: `
			Galeri is an electron desktop app and a browser extension that changes your desktop background or browser's new tab page into 
			a stream of artworks selected from open art APIs provided by museums and other institutions.
		`
	}, {
		title: 'Renewal',
		link: 'https://github.com/michealparks/global-game-jam-2021',
		description: `
			Renewal is a small 3d simulation game made for the 2021 global game jam using ThreeJS.
			The gameplay is focused on turning an abandoned lot into a community garden.
		`
	}, {
		title: 'House Party',
		link: 'https://github.com/michealparks/global-game-jam-19',
		description: `
			House Party is a small 2d pixel art game made for the 2018 global game jam featuring a minimal self-made WebGL rendering engine.
			You play as an enraged dad who - upon finding that your kids threw a house party without your knowledge - vanguishes troublesome teens
			with your parental powers.
		`
	},
]

const skills: Skill[] = [
	{ name: 'Untyped Typescript', mastery: 100000 },
	{ name: 'CSS, HTML, The Web™', mastery: 95000 },
	{ name: 'ThreeJS, Game Engines', mastery: 90000 },
	{ name: 'Blender (donut making)', mastery: 85000 },
]

const interests: string[] = [
	'3D Graphics',
	'VR + AR',
	'UI Engineering',
	'UX Design',
	'App Design',
	'Game Development',
	'People-first work culture',
	'Science',
	'Art',
]

export default {
	header,
	contact,
	jobs,
	education,
	projects,
	skills,
	interests,
}
