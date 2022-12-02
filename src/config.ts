export const SITE = {
	title: 'Loving Jamstack',
	description: 'A digital garden for learning about Jamstack',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'jamstack.svg',
		alt:
			'A Jamstack logo with a heart in the middle. The heart is made of the letters J, A, and M.',
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

export const SHOULD_SHOW_COMMITS = false;

export const GITHUB_EDIT_URL = `https://github.com/watthem/loving-jamstack/tree/master`;

// uncomment to enable link to chat
// export const COMMUNITY_INVITE_URL = `https://discord.gg/`;

export const SHOULD_SHOW_SEARCH = false;

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
			{ text: 'Jamstack Frameworks', link: 'en/jamstack-frameworks', 
		 },
			{ text: 'Hosting Options', link: 'en/hosting-options' },
			{ text: 'Check out all the guides', link: 'en/guides' },

		],
		'Tutorials': [
			{ text: 'Building a Better Portfolio', link: 'en/tutorials/building-a-better-portfolio' },
			{ text: 'Migrating from WordPress', link: 'en/tutorials/migrating-from-wordpress' }],
			
		'Resources': [
			{ text: 'Jamstack Resources', link: 'en/resources' },
		],
	},
};
