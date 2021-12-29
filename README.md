# Variant aspects

## Board Geometry

### Rectangular
    - Micro chess (4x4)
    - Mini chess (5x5)
    - Western Chess (8x8)
    - Capablanca Chess (8x10)
    - Grand Chess (10x10)
    - Terachess (16x16)

###	Historical
    - Xiang Qi
    - Shogi
    - Janggi
    - Chaturanga
    - Shatranj

### Other
    - Omega Chess (10x10 + 4 extra squares)
    - Alice Chess (two 8x8 boards)
    - Fortress (8x8 + 8x2x4 + 4x4x4)
    - Four-player chess (8x8 + 8x3x4)
	- Hexagonal (nxm)
	- Triangular (n)
	- Pentagons?
	- Circular
	- Cylindrical
	- Vertical Mirror
	- Torus
	- Möbius?
	- Cube (Chess 360)
	- Sphere
	- 3D
	- Infinite (mostly theoretical)

## Armies / Piece set
	- Definition of each piece:
		- Initial position
		- Extra initial movement (pawns)
		- How it moves or captures
            - Slider
            - Leeper
            - Hopper
            - Rider
            - Locust
		- Is it royal (cannot be put or left in check)
		- What it promotes to when reaching promotion zone
		- Special rules involving a combination of pieces:
			- Castle
			- En passant
		- Abbreviation (For game annotations)
		- Visual Representation (Image)
        - Description
            - Name(s)
            - Ethytmology
            - Origins
	- Definition of each army, if different for different players

## Promotion zones
	- Last rank
	- Last 3 ranks
	- Half-way (like pawns promoting to soldiers past the river in Xiang Qi)
    - 8th rank (like in Four-people chess)
	- Specific region (central 2x2 square)

## Number of players/armies, teams and boards
	- Classic Bughouse: 2 teams of 2 players, with 2 boards
	- Bughouse 3 or 4: 2 teams of 3 or 4 players, with 3 or 4 boards
	- Three-player chess
	- Four-player chess (teams or free for all)

## Game Mechanics
	- Drop Chess
		- Shogi
		- Crazyhouse
		- Chessgi
	- Double or more moves:
		- Marseillais Chess
		- Extra Move Chess
		- Twinmove Chess
		- Progressive Chess
	- Anti-King

## Capture
	- Regular
	- Decay (pieces soon after capture)
	- Atomic (explodes around)

## Visibility
	- Fully Visible (normal)
	- Fog of war (discover as you play)
	- Blindfolded (rely on player's memory)

## Initial Setup
	- Preset (Most variations)
	- Random (Fisher variation)
	- Placement (Players place pieces in turns)
	- Inverse placement (Opponent places your pieces)
	- Blind Placement (Cannot see Opponent's placement)

## Win Goal for 2 player games
	- Mate (or capture) one or several or all present royal pieces
    - Stalemate (Xiang Qi or Antichess)
	- Capture all material (Horde)
	- Lose all material (Antichess)
	- A designated piece reaches a region
		- King of the hill - King reaches middle 2x2 square in a 8x8
		- Racing Kings (King reaches last rank + King cannot be put in check)
	- Carry out n checks (Three-check)

## Win Goal for multiple players
	- Win against all opponents (4 player chess)
	- Win against one opponent from opposite team (bughouse)

## Draw conditions
    - 50 move rule (no pawn moves or captures)
    - Three repetition rule
    - Condition to win can no longer be met (mate not possible)

## Time controls
    - Sudden Death (5 min, 30 min, 1h)
    - Increment / move (3 min + 2 sec / move)
    - Time per move (1 min / move)

### Implementation Ideas
	- Serverless, Peer-to-peer
		- Game sharing via URL
		- Game definitions export / import
		- Common Variations and Graphic Assets
	- Restrict geometry to single board rectangular
	- Restrict to 2 players
	- Restrict Visibility to visible
	- Restrict Initial Setup to preset
	- Restrict Capture and Mechanics to normal

