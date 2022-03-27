import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as each } from "../../chunks/index-13c0de55.js";
var index = "";
const header = {
  name: "Micheal Parks",
  title: "Software Engineer",
  portrait: "me.jpg",
  description: `
		I have an ongoing love affair with science and artistic communication, yet I\u2019m pragmatic and an engineer at heart.
		I love the craft of storytelling, which makes me sensitive to user experience and fuels my passion for video game development.
		I\u2019m fascinated by the web and it\u2019s transformative power for society.
		I\u2019m a tactile learner, so I often need to play with concepts before understanding them;
		however, I have been told that learning agility is one of my strengths,
		so it doesn\u2019t take me long to pick up a new concept after getting my hands dirty.
		I like the mantra that one should make their work \u201Cas simple as possible, but no simpler\u201D,
		which makes programming for me a continual joy and challenge.
	`
};
const contact = {
  email: "michealparks1989@gmail.com",
  phone: "1-718-362-7680",
  location: "Brooklyn, NY",
  website: "parks.lol",
  github: "github.com/michealparks",
  linkedin: "linkedin.com/in/michealparks"
};
const jobs = [
  {
    title: "Senior Sofware Engineer - Frontend",
    company: "Bowery Farming",
    duration: "June 2021 - April 2022",
    description: `
			I established code standards, design patterns, and helped grow a Frontend engineering culture for BoweryOS: the app that orchestrates and monitors
			Bowery's farms. I mentored engineers and set up tools and practices that increased the overall reliability and positive developer experience when
			building upon and maintaining the app.
		`
  },
  {
    title: "Lead Software Engineer",
    company: "MongoDB",
    duration: "May 2015 \u2013 Nov 2020",
    description: `
			I led a team that worked on mongodb.com, an internal MongoDB-backed CMS, and engineering projects within the larger marketing team.
			We regularly collaborated with other engineering teams on projects such as <a class="link" target="_tab" href="https://www.mongodb.com/atlas/data-lake-demo">interactive web apps</a> that demoed MongoDB cloud products.
			I onboarded, mentored, and collaborated with multiple front-end and full-stack developers on my team.
		`
  },
  {
    title: "Lead Frontend Developer",
    company: "Pixbi",
    duration: "Nov 2013 \u2013 Apr 2015",
    description: `
			Pixbi enabled users to view, share, and purchase products from images in blogs and digital magazines.
			I led the development of the embedded javascript applications that powered Pixbi.
		`
  },
  {
    title: "New Media Web Developer",
    company: "University of Central Florida",
    duration: "2012 - 2013",
    description: `
			I wrote educational javascript games and embeddable widgets - like <a class="link" target="_tab" href="https://materia.ucf.edu/widgets/12-hangman">Hangman</a> and <a class="link" target="_tab" href="https://materia.ucf.edu/widgets/9-flash-cards">Flashcards</a> - alongside Lego models and some fantastic people.
		`
  }
];
const education = [
  {
    institution: "Brooklyn College",
    duration: "2017 - 2020",
    concentration: "Mathematics"
  },
  {
    institution: "University of Central Florida",
    duration: "2008 - 2013",
    concentration: "Biology, Computer Science and Psychology Minor"
  }
];
const projects = [
  {
    title: "Galeri",
    link: "https://galeri.io",
    description: `
			Galeri is an electron desktop app and a browser extension that changes your desktop background or browser's new tab page into 
			a stream of artworks selected from open art APIs provided by museums and other institutions.
		`
  },
  {
    title: "Renewal",
    link: "https://github.com/michealparks/global-game-jam-2021",
    description: `
			Renewal is a small 3d simulation game made for the 2021 global game jam using ThreeJS.
			The gameplay is focused on turning an abandoned lot into a community garden.
		`
  },
  {
    title: "House Party",
    link: "https://github.com/michealparks/global-game-jam-19",
    description: `
			House Party is a small 2d pixel art game made for the 2018 global game jam featuring a minimal self-made WebGL rendering engine.
			You play as an enraged dad who - upon finding that your kids threw a house party without your knowledge - vanguishes troublesome teens
			with your parental powers.
		`
  }
];
const skills = [
  { name: "Untyped Typescript", mastery: 1e5 },
  { name: "CSS, HTML, The Web\u2122", mastery: 95e3 },
  { name: "ThreeJS, Game Engines", mastery: 9e4 },
  { name: "Blender (donut making)", mastery: 85e3 }
];
const interests = [
  "3D Graphics",
  "VR + AR",
  "UI Engineering",
  "UX Design",
  "App Design",
  "Game Development",
  "People-first work culture",
  "Science",
  "Art"
];
var data = {
  header,
  contact,
  jobs,
  education,
  projects,
  skills,
  interests
};
var Header_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "header.svelte-1b227ln{display:grid;grid-template:auto 1fr / 1fr 10fr;background:var(--header-bg);color:white;padding:20px;margin:0 0 20px 0;column-gap:30px;border-radius:4px}@media(max-width: 760px){header.svelte-1b227ln{display:block}}img.svelte-1b227ln{width:200px;height:200px;border-radius:4px;grid-row:1 / span 3;box-shadow:-1px 26px 27px -8px rgba(0,0,0,0.51)}h1.svelte-1b227ln{font-size:26px;margin:5px 0}p.svelte-1b227ln{margin:0}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { portrait } = $$props;
  let { name } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.portrait === void 0 && $$bindings.portrait && portrait !== void 0)
    $$bindings.portrait(portrait);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$8);
  return `



<header class="${"svelte-1b227ln"}"><img${add_attribute("src", portrait, 0)} alt="${"That's Me!"}" class="${"svelte-1b227ln"}">
	<h1 class="${"svelte-1b227ln"}">${escape(name)}, ${escape(title)}</h1>
	<p class="${"svelte-1b227ln"}">${escape(description)}</p>
</header>`;
});
var Title_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "h2.svelte-1udkkcx{margin:10px 0}.divider.svelte-1udkkcx{height:5px;width:100%;background:var(--title-bg);margin-bottom:10px}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<h2 class="${"svelte-1udkkcx"}">${slots.default ? slots.default({}) : ``}</h2>

<div class="${"divider svelte-1udkkcx"}"></div>`;
});
var Contact_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "section.svelte-185fhda{grid-row:1 / auto;grid-column:1 / span 1}div.svelte-185fhda{display:flex;margin:8px 0}span.svelte-185fhda{margin-right:5px;display:flex;align-items:center}a.svelte-185fhda,p.svelte-185fhda{font-size:13px}a.svelte-185fhda{color:inherit;text-decoration:none}a.svelte-185fhda:hover{text-decoration:underline}p.svelte-185fhda{margin:0}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { email } = $$props;
  let { phone } = $$props;
  let { location } = $$props;
  let { website } = $$props;
  let { github } = $$props;
  let { linkedin } = $$props;
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.phone === void 0 && $$bindings.phone && phone !== void 0)
    $$bindings.phone(phone);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.website === void 0 && $$bindings.website && website !== void 0)
    $$bindings.website(website);
  if ($$props.github === void 0 && $$bindings.github && github !== void 0)
    $$bindings.github(github);
  if ($$props.linkedin === void 0 && $$bindings.linkedin && linkedin !== void 0)
    $$bindings.linkedin(linkedin);
  $$result.css.add(css$6);
  return `



<section class="${"svelte-185fhda"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `Contact`;
    }
  })}
	<div class="${"svelte-185fhda"}"><span class="${"icon-envelope svelte-185fhda"}"></span>
		<a${add_attribute("href", `mailto:${email}`, 0)} class="${"svelte-185fhda"}">${escape(email)}</a></div>

	<div class="${"svelte-185fhda"}"><span class="${"icon-phone svelte-185fhda"}"></span>
		<a${add_attribute("href", `tel:${phone}`, 0)} class="${"svelte-185fhda"}">${escape(phone)}</a></div>

	<div class="${"svelte-185fhda"}"><span class="${"icon-location svelte-185fhda"}"></span>
		<p class="${"svelte-185fhda"}">${escape(location)}</p></div>

	<div class="${"svelte-185fhda"}"><span class="${"icon-website svelte-185fhda"}"></span>
		<a target="${"_tab"}"${add_attribute("href", `https://${website}`, 0)} class="${"svelte-185fhda"}">${escape(website)}</a></div>
	
	<div class="${"svelte-185fhda"}"><span class="${"icon-github svelte-185fhda"}"></span>
		<a target="${"_tab"}"${add_attribute("href", `https://${github}`, 0)} class="${"svelte-185fhda"}">${escape(github)}</a></div>

	<div class="${"svelte-185fhda"}"><span class="${"icon-linkedin svelte-185fhda"}"></span>
		<a target="${"_tab"}"${add_attribute("href", `https://${linkedin}`, 0)} class="${"svelte-185fhda"}">${escape(linkedin)}</a></div>
</section>`;
});
var Experience_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "section.svelte-dpmrg3{grid-row:1 / span 3;grid-column:2 / span 1}li.svelte-dpmrg3{margin:20px 0}",
  map: null
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { jobs: jobs2 } = $$props;
  if ($$props.jobs === void 0 && $$bindings.jobs && jobs2 !== void 0)
    $$bindings.jobs(jobs2);
  $$result.css.add(css$5);
  return `



<section class="${"svelte-dpmrg3"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `Work Experience`;
    }
  })}
	<ul>${each(jobs2, ({ title, company, duration, description }, _) => {
    return `<li class="${"svelte-dpmrg3"}"><h3>${escape(title)}, ${escape(company)}</h3>
				<p>${escape(duration)}</p>
				<!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END -->
			</li>`;
  })}</ul>
</section>`;
});
var Education_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "section.svelte-17ooj69{grid-row:2 / auto;grid-column:1 / span 1}h3.svelte-17ooj69{font-size:14px}",
  map: null
};
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { education: education2 } = $$props;
  if ($$props.education === void 0 && $$bindings.education && education2 !== void 0)
    $$bindings.education(education2);
  $$result.css.add(css$4);
  return `



<section class="${"svelte-17ooj69"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `Education`;
    }
  })}
	<ul>${each(education2, ({ institution, duration, concentration }, _) => {
    return `<li><h3 class="${"svelte-17ooj69"}">${escape(institution)}</h3>
				<p>${escape(duration)}</p>
				<p>${escape(concentration)}</p>
			</li>`;
  })}</ul>
</section>`;
});
var Projects_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "section.svelte-154sh5v{grid-row:4 / auto;grid-column:2 / span 1}a.svelte-154sh5v{display:inline-block}li.svelte-154sh5v{margin:20px 0}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects: projects2 } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects2 !== void 0)
    $$bindings.projects(projects2);
  $$result.css.add(css$3);
  return `



<section class="${"svelte-154sh5v"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `Selected Projects`;
    }
  })}
	<ul>${each(projects2, ({ link, title, description }, _) => {
    return `<li class="${"svelte-154sh5v"}"><div><a class="${"link svelte-154sh5v"}" target="${"_tab"}"${add_attribute("href", link, 0)}><h3>${escape(title)}</h3>
					</a></div>
				
				<!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END -->
			</li>`;
  })}</ul>
</section>`;
});
var Interests_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-1jski51{grid-row:3 / auto;grid-column:1 / span 1}ul.svelte-1jski51{display:flex;flex-wrap:wrap;gap:0.25rem}li.svelte-1jski51{font-size:12px;padding:0.25rem 0.5rem;background-color:var(--bg-shade-1);border-radius:0.5rem}",
  map: null
};
const Interests = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { interests: interests2 } = $$props;
  if ($$props.interests === void 0 && $$bindings.interests && interests2 !== void 0)
    $$bindings.interests(interests2);
  $$result.css.add(css$2);
  return `



<section class="${"svelte-1jski51"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `Interests`;
    }
  })}
	<ul class="${"svelte-1jski51"}">${each(interests2, (interest, _) => {
    return `<li class="${"svelte-1jski51"}">${escape(interest)}
			</li>`;
  })}</ul>
</section>`;
});
var Skills_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-6kjzgw{--gray:#546E7A;--salmon:#FFCCBC;grid-row:4 / auto;grid-column:1 / span 1}li.svelte-6kjzgw{position:relative;overflow:hidden;margin:5px 0;padding:5px 10px;border:1px solid var(--accent);border-radius:4px;font-size:12px}small.svelte-6kjzgw{position:absolute;right:5px}.progress.svelte-6kjzgw{top:0;left:0;position:absolute;height:100%;background:var(--accent);z-index:-1}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { skills: skills2 } = $$props;
  if ($$props.skills === void 0 && $$bindings.skills && skills2 !== void 0)
    $$bindings.skills(skills2);
  $$result.css.add(css$1);
  return `



<section class="${"svelte-6kjzgw"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `Skillz`;
    }
  })}
	<ul>${each(skills2, ({ name, mastery }, _) => {
    return `<li class="${"svelte-6kjzgw"}"><div class="${"progress svelte-6kjzgw"}" style="${"width: " + escape(mastery / 1e5 * 100) + "%"}"></div>
				${escape(name)}
				<small class="${"svelte-6kjzgw"}">${escape(mastery.toLocaleString("en-US"))}%</small>
			</li>`;
  })}</ul>
</section>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1v9oume{display:grid;grid-template:auto auto auto auto / 2fr 8fr;column-gap:30px}@media(max-width: 760px){main.svelte-1v9oume{display:block}}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `



${validate_component(Header, "Header").$$render($$result, Object.assign(data.header), {}, {})}

<main class="${"svelte-1v9oume"}">${validate_component(Contact, "Contact").$$render($$result, Object.assign(data.contact), {}, {})}
	${validate_component(Experience, "Experience").$$render($$result, { jobs: data.jobs }, {}, {})}
	${validate_component(Education, "Education").$$render($$result, { education: data.education }, {}, {})}
	${validate_component(Projects, "Projects").$$render($$result, { projects: data.projects }, {}, {})}
	${validate_component(Interests, "Interests").$$render($$result, { interests: data.interests }, {}, {})}
	${validate_component(Skills, "Skills").$$render($$result, { skills: data.skills }, {}, {})}
</main>`;
});
export { Routes as default };
