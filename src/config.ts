export const SITE = {
	title: 'Loving JAMStack',
	description: 'A digital garden for learning about JAMStack',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'jamstack.svg',
		alt:
			'A JAMStack logo with a heart in the middle. The heart is made of the letters J, A, and M.',
	},
	twitter: 'lovingjamstack',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/watthem/loving-jamstack/tree/main`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Docs': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'JAMStack Frameworks', link: 'en/JAMStack-frameworks' },
			{ text: 'Hosting Options', link: 'en/hosting-options' },
		],
		'Tutorials': [
			{ text: 'Building a better portfolio', link: 'en/tutorials/building-a-better-portfolio' },
			{ text: 'Migrating from WordPress', link: 'en/tutorials/migrating-from-wordpress' }]
	},
};
