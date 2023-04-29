export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [0,2];

export const dictionary = {
		"/": [~3],
		"/act/new": [~5],
		"/act/[actId]": [~4],
		"/admin": [~6],
		"/login/admin": [~7],
		"/my/ratings": [8],
		"/my/settings": [~9,[2]],
		"/my/settings/account": [~10,[2]],
		"/my/settings/profile": [~11,[2]],
		"/my/settings/security": [12,[2]],
		"/overview": [~13],
		"/rating/[actId]": [~14],
		"/register": [~15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';