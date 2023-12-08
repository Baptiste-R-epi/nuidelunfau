import React from "react";
import QuizComponent from "../components/Quiz.js";
import quiz_1 from "../datas/Quiz09";
import quiz_2 from "../datas/Quiz10";

export default function Quizz() {
	return (
		<>
			<div>
				<h1>
					Les déchets plastiques
				</h1>
				<QuizComponent quiz={quiz_1} />
				<QuizComponent quiz={quiz_2} />
			</div>
		</>
	)
}