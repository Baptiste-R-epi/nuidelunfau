import React from "react";
import { useRef } from "react";
import "../css/Tetris.css";
import {
	SHAPES,
	COLORS,
	ROWS,
	COLS,
	new_game_state,
	check_grid,
	generate_grid,
	random_piece_object,
	render_piece, move_down,
	move_left, move_right,
	rotate, collision,
	render_game
} from "../utils/tetris.js"

export default function Tetris() {

const canvas = useRef(null);

	// let canvas = document.querySelector("#tetris");
	let scoreboard = document.querySelector("h3");
	let ctx = canvas.current.getContext("2d");
	ctx.scale(30, 30);

	let game_props = {
		grid: generate_grid(),
		falling_piece_obj: null,
		score: 0,
	}

	setInterval(() => new_game_state(scoreboard, game_props), 500);

	document.addEventListener("keydown", function (e) {
		let key = e.key;

		if (key === "ArrowDown") {
			move_down();
		} else if (key === "ArrowLeft") {
			move_left();
		} else if (key === "ArrowRight") {
			move_right();
		} else if (key === "ArrowUp") {
			rotate();
		}
	})

	return (
		<>
			<div id="game-info">
				<h1>404 score</h1>
				<h3>Score: 0</h3>
			</div>
			<canvas ref={canvas} height="600" width="300"></canvas>
			<script src="app.js"></script>
		</>
	)
}