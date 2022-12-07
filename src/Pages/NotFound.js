import { Link } from "react-router-dom";
import './notFound.scss';

function NotFound() {
	return (
		<>
			<div className="wrapper">
				<div className="noise"></div>
				<div className="overlay"></div>
				<div className="terminal">
					<h1>Ошибка <span className="errorcode">404</span></h1>
					<p className="output">Страница, которую Вы пытаетесь найти, не существует, либо была удалена или не доступна.</p>
					<p className="output">Попробуйте <Link to={'/'}><span className="text">вернуться на главную</span></Link></p>
					<p className="output">Удачи!</p>
				</div>
			</div>
		</>
	);
}

export default NotFound;