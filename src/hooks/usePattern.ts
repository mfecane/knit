import { defineStore } from 'pinia'

const ID = 'PATTERN'

// OMG
const MAX_ROWS = 2

interface State {
	index: number
}

interface Actions {
	next(): void

	back(): void
}

export const usePattern = defineStore<typeof ID, State, {}, Actions>(ID, {
	state: (): State => ({ index: 0 }),

	actions: {
		next() {
			this.index++
			if (this.index >= MAX_ROWS) {
				this.index = 0
			}
		},

		back() {
			this.index--
			if (this.index < 0) {
				this.index = MAX_ROWS - 1
			}
		},
	},

	getters: {},
})
