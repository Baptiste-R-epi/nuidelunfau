import React from "react";
import "../css/Quiz.css";

export default function Quiz({ quiz }) {
	return (
		<div className="quiz">
			<div className="quizLeftPart">
				{quiz?.ideeRecue}
			</div>
			<div className="quizRightPart">
				<div className="question">
					{quiz?.question}
				</div>
				{quiz?.proposition.map((data, index) => (
					<div className="radio">
						<input type="radio" value={data} name="test" />{data}
					</div>
				))}
				<div className="explication">
					{quiz?.explanation}
				</div>
			</div>
		</div>
	)
}