import { writable } from 'svelte/store'

// constants
export const up = { x: 0, y: -1 }
export const right = { x: 1, y: 0 }
export const down = { x: 0, y: 1 }
export const left = { x: -1, y: 0 }

// svelte stores
export const board = writable(undefined)
export const snake = writable({
	body: [{ x: 1, y: 1 }],
	direction: right,
	nextDirection: right
})
export const apple = writable({ pos: { x: 17, y: 1 } })
export const style = writable({
	canvasColor: '#232323',
	snakeColor: '#33CC33',
	appleColor: '#CC3333'
})
export const score = writable(0)
export const rules = writable({
	canvasSize: Math.min(
		600,
		Math.floor(window.innerWidth / 20) * 20,
		Math.floor(window.innerHeight / 20) * 20
	),
	frameTime: 100,
	controls: {
		up: ['w', 'ArrowUp'],
		right: ['d', 'ArrowRight'],
		down: ['s', 'ArrowDown'],
		left: ['a', 'ArrowLeft']
	},
	edgeWrap: true,
	pointsPerApple: 10
})
