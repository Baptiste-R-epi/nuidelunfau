import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Quizz01 from "./pages/Quizz01";
import Quizz02 from "./pages/Quizz02";
import Quizz03 from "./pages/Quizz03";
import Quizz04 from "./pages/Quizz04";
import Quizz05 from "./pages/Quizz05";

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/quiz01" element={<Quizz01 />} />
				<Route path="/quiz02" element={<Quizz02 />} />
				<Route path="/quiz03" element={<Quizz03 />} />
				<Route path="/quiz04" element={<Quizz04 />} />
				<Route path="/quiz05" element={<Quizz05 />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	)
}