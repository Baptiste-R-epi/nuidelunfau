import React from "react";
import QuizComponent from "../components/Quiz.js";
import quiz_1 from "../datas/Quiz07";
import quiz_2 from "../datas/Quiz08";

export default function Quizz() {
	return (
		<>
			<div>
				<h1>
					Les énergies renouvelables
				</h1>
				<QuizComponent quiz={quiz_1} />
				<QuizComponent quiz={quiz_2} />
			</div>
		</>
	)
}