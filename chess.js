const Zero = leaper('O', 0, 0) // known as a `Tree` in ChessCraft

const Wazir = leaper('W', 1, 0)
const Ferz = leaper('F', 1, 1)
const King = piece({ name: 'K', moves: union(Wazir, Ferz), royal: true })

const Dabbaba = leaper('D', 2, 0)
const Knight = leaper('N', 2, 1)
const Alfil = leaper('A', 2, 2)

const Threeleaper = leaper('L3', 3, 0)
const Camel = leaper('C', 3, 1)
const Zebra = leaper('Z', 3, 2)
const Tripper = leaper('T', 3, 3)

const Fourleaper = leaper('L4', 4, 0)
const Giraffe = leaper('G', 4, 1)
const Stag = leaper('S', 4, 2)

const Anteloppe = leaper('A', 4, 3)

const Bishop = slider('B', n(1, 1))
const Rook = slider('R', n(1, 0))
const Queen = piece({ name: 'Q', moves: union(Bishop, Rook) })

const PawnUp = piece({ 
	name: 'P', 
	moves: ([x, y], initial) => initial ? [[x, y + 1], [x, y + 2]] : [x, y + 1], 
	captures: ([x, y]) => [[x - 1, y + 1], [x + 1, y + 1]],
})

const PawnDown = piece({ 
	name: 'p', 
	moves: ([x, y], initial) => initial ? [[x, y - 1], [x, y - 2]] : [x, y - 1], 
	captures: ([x, y]) => [[x - 1, y - 1], [x + 1, y - 1]],
})

const translate = (x, y) => ([u, v]) => [u + x, v + y]
const rotate = (x, y) => [[x, y], [-x, y], [x, -y], [-x, -y]]
const fullSymmetry = (x, y) => x === y ? rotate([x, x]) : [ ...rotate([x, y]), ...rotate([y, x]) ]

const leaper = (name, x, y) => piece({ name, moves: ([x, y]) => fullSymmetry(x, y) })
const slider = (name, x, y) => piece({ name, moves: fullSymmetry(x, y) })
// const hopper = (x, y) => combine(leaper(x, y), { hop: true }) // must jump over a piece
// const rider = a "sliding" leaper
// const locust = a moving leaper / capturing hopper

const range = (p1, p2) => [p1, p2]
const rank = (n, width) => range([0,  n - 1], [width - 1, n - 1])
const r8 = n => n => rank(n, 8)

const OrthodoxChess = buildGame({
	board: [8, 8],
	opponents: {
		w: {
            name: 'White',
			pieces: {
				[r8(1)]: 'RNBQKBNR',
				[r8(2)]: 'PPPPPPPP',
            },
			promotion: {
				'p': {
					zone: r8(8),
					selection: 'NBRQ',
				}
			}
		},
		b: {
            name: 'Black',
			pieces: {
				[r8(7)]: 'pppppppp',
				[r8(8)]: 'RNBQKBNR',
            },
			promotion: {
				'p': {
					zone: r8(1),
					selection: 'NBRQ',
				}
			}
		},
	},
	extraMoves: {
		'short castle': {
			name: 'O-O',
			pieces: 'KR',
			moves: (board, pieces, opponent) => {
                if (
                    pieces.every(p => p.moves.length === 0) &&
                    !intersect(opponent.pieces.coverage, range(pieces))
			    ) return {
                    'K': [King.x, King.y + 2],
                    'R': [King.x, King.y + 1]
                }
            }
		},
		'long castle': {
			name: 'O-O-O',
			pieces: 'KR',
			moves: (board, pieces, opponent) => {
                if (
				    pieces.every(p => p.moves.length === 0) &&
				    !intersect(opponent.pieces.coverage, range(pieces))
			    ) return {
                    'K': [King.x, King.y - 2],
                    'R': [King.x, King.y - 1]
                }
            }
		},
		'en passant': {
			name: 'e.p.',
			pieces: 'p',
			moves: (board, pieces, opponent) => { 
				const lp = opponent.moves[length - 1].piece
				const isDownPawnTwo = lp.name === 'p' && lp.positions[0].y === lp.positions[lp.positions.length - 1].y - 2
				const isUpPawnTwo = lp.name === 'P' && lp.positions[0].y === lp.positions[lp.positions.length - 1].y + 2
				if (isDownPawnTwo || isUpPawnTwo) {
                    return pieces.filter(p => (p.y === lp.y && (p.x === lp.x + 1 || p.x === lp.x - 1))).map(p => capture(p, lp))
                }
			},
		},
	},
	start: 'w',
	win: (opponent) => opponent.pieces.filter(_.royal).length == 0
})