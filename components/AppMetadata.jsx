const author = "Quyet James";
const description =
	"Software developer from Moldova, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://simple-portfolio-omega.vercel.app/";
export const AppMetadata = {
	metadataBase: new URL("https://simple-portfolio-omega.vercel.app//"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Quyet - James",
		"Quyet - James - software developer",
		"Frontend developer",
		"Swift developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://simple-portfolio-omega.vercel.app//screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://simple-portfolio-omega.vercel.app//screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
