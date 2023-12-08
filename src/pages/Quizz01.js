import React from "react";
import QuizComponent from "../components/Quiz.js"; 
import quiz_1 from "../datas/Quiz01";
import quiz_2 from "../datas/Quiz02";

export default function Quizz() {
	return (
		<>
			<div>
				<h1>
					La consommation domestique et les émissions de gaz à effet de serre
				</h1>
				<QuizComponent quiz={quiz_1}/>
				<QuizComponent quiz={quiz_2}/>
			</div>
		</>
	)
}