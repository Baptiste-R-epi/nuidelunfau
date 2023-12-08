export const SHAPES = [
	[
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[
		[1, 1, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	[
		[1, 1],
		[1, 1]
	]
]

export const COLORS = [
	"#9b5fe0",
	"#16a4d8",
	"#60dbe8",
	"#8bd346",
	"#efdf48",
	"#f9a52c",
	"#d64e12",
	"#fff"
]

export const ROWS = 20;
export const COLS = 10;


export function new_game_state(scoreboard, game_props, ctx) {
	check_grid(scoreboard);
	if (!game_props.falling_piece_obj) {
		game_props.falling_piece_obj = random_piece_object();
		render_piece(ctx);
	}
	move_down(game_props);
}

export function check_grid(scoreboard, game_props) {
	let count = 0;

	for (let y = 0; y < game_props.grid.length; y++) {
		let all_filled = true;
		for (let x = 0; x < game_props.grid[0].length; x++) {
			if (game_props.grid[y][x] === 0) {
				all_filled = false
			}
		}
		if (all_filled) {
			count++;
			game_props.grid.splice(y, 1);
			game_props.grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		}
	}
	if (count === 1) {
		game_props.score += 10;
	} else if (count === 2) {
		game_props.score += 30;
	} else if (count === 3) {
		game_props.score += 50;
	} else if (count > 3) {
		game_props.score += 100;
	}
	scoreboard.innerHTML = ("Score: " + game_props.score);
}

export function generate_grid() {
	let grid = [];

	for (let y = 0; y < ROWS; y++) {
		grid.push([]);
		for (let x = 0; x < COLS; x++) {
			grid[y].push(0)
		}
	}
	return grid;
}

export function random_piece_object() {
	let random = Math.floor(Math.random() * 7);
	let piece = SHAPES[random];
	let color = random + 1;
	let x = 4;
	let y = 0;

	return { piece, color, x, y }
}

export function render_piece(game_props, ctx) {
	let piece = game_props.falling_piece_obj.piece;

	for (let y = 0; y < piece.length; y++) {
		for (let x = 0; x < piece[y].length; x++) {
			if (piece[y][x] === 1) {
				ctx.fillStyle = COLORS[game_props.falling_piece_obj.color];
				ctx.fillRect(game_props.falling_piece_obj.x + x, game_props.falling_piece_obj.y + y, 1, 1);
			}
		}
	}
}

export function move_down(game_props, ctx) {
	if (!collision(game_props.falling_piece_obj.x, game_props.falling_piece_obj.y + 1)) {
		game_props.falling_piece_obj.y += 1;
	} else {
		let piece = game_props.falling_piece_obj.piece

		for (let y = 0; y < piece.length; y++) {
			for (let x = 0; x < piece[y].length; x++) {
				if (piece[y][x] === 1) {
					let p = game_props.falling_piece_obj.x + x;
					let q = game_props.falling_piece_obj.y + y;

					game_props.grid[q][p] = game_props.falling_piece_obj.color;
				}
			}
		}
		if (game_props.falling_piece_obj.y === 0) {
			alert("You haven't reach 404 score");
			game_props.grid = generate_grid();
			game_props.score = 0;
		}
		if (game_props.score >= 404) {
			alert("Congratulation you have lost your time :)");
			game_props.grid = generate_grid();
			game_props.score = 0;
		}
		game_props.falling_piece_obj = null;
	}
	render_game(game_props, ctx);
}

export function move_left(game_props, ctx) {
	if (!collision(game_props.falling_piece_obj.x - 1, game_props.falling_piece_obj.y)) {
		game_props.falling_piece_obj.x -= 1;
	}
	render_game(game_props, ctx);
}

export function move_right(game_props, ctx) {
	if (!collision(game_props.falling_piece_obj.x + 1, game_props.falling_piece_obj.y)) {
		game_props.falling_piece_obj.x += 1;
	}
	render_game(game_props, ctx);
}

export function rotate(game_props, ctx) {
	let rotated_piece = [];
	let piece = game_props.falling_piece_obj.piece;

	for (let y = 0; y < piece.length; y++) {
		rotated_piece.push([]);
		for (let x = 0; x < piece[y].length; x++) {
			rotated_piece[y].push(0);
		}
	}
	for (let y = 0; y < piece.length; y++) {
		for (let x = 0; x < piece[y].length; x++) {
			rotated_piece[y][x] = piece[x][y]
		}
	}
	for (let index = 0; index < rotated_piece.length; index++) {
		rotated_piece[index] = rotated_piece[index].reverse();
	}
	if (!collision(game_props, game_props.falling_piece_obj.x, game_props.falling_piece_obj.y, rotated_piece)) {
		game_props.falling_piece_obj.piece = rotated_piece
	}
	render_game(game_props, ctx);
}

export function collision(game_props, x, y, rotated_piece) {
	let piece = rotated_piece || game_props.falling_piece_obj.piece

	for (let i = 0; i < piece.length; i++) {
		for (let j = 0; j < piece[i].length; j++) {
			if (piece[i][j] === 1) {
				let p = x + j;
				let q = y + i;
				if (p >= 0 && p < COLS && q >= 0 && q < ROWS) {
					if (game_props.grid[q][p] > 0) {
						return true;
					}
				} else {
					return true;
				}
			}
		}
	}
	return false;
}

export function render_game(game_props, ctx) {
	for (let y = 0; y < game_props.grid.length; y++) {
		for (let x = 0; x < game_props.grid[y].length; x++) {
			ctx.fillStyle = COLORS[game_props.grid[y][x]];
			ctx.fillRect(x, y, 1, 1)
		}
	}
	render_piece(ctx);
}
