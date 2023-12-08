import React from "react";
import Button from '@mui/material/Button';
import "../css/Header.css";

export default function Headers() {


	return (
		<div className="header">
			<Button variant="contained" color="success" href="/">
				Menu
			</Button>
			<Button variant="contained" color="success" href="/quiz01">
				Quiz 1
			</Button>
			<Button variant="contained" color="success" href="/quiz02">
				Quiz 2
			</Button>
			<Button variant="contained" color="success" href="/quiz03">
				Quiz 3
			</Button>
			<Button variant="contained" color="success" href="/quiz04">
				Quiz 4
			</Button>
			<Button variant="contained" color="success" href="/quiz05">
				Quiz 5
			</Button>
		</div>
	)
}