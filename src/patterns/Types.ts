export interface PatternStitch {
	name: string
}

export interface PatternStitchGroup {
	repeat: boolean
	stitches: PatternStitch[]
}

export interface PatternRow {
	repeat: boolean
	annotation?: string
	groups: PatternStitchGroup[]
}

export interface Pattern {
	setup_row?: PatternRow
	rows: PatternRow[]
}
