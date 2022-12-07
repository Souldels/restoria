import { useFormik } from "formik"
import { SignInSchema } from './index';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import '../../Pages/login.scss';

export default function SignIn() {
	const [errorMessage, setErrorMessage] = useState('');

	const nav = useNavigate();
	let user = JSON.parse(localStorage.getItem("User"));

	const onSubmit = (values) => {

		if (user === null) {
			setErrorMessage('Нет такого пользователя');
		} else if (values.email === user.email && values.password === user.password) {
			nav('/menu');
		} else {
			setErrorMessage('Логин или пароль неверен');
		}
	}

	const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: SignInSchema,
		onSubmit,
	});

	return (

		<form onSubmit={handleSubmit} className="form">
			<legend className="form__title">Вход</legend>
			<div className="form__wrap">
				<input
					className={`${errors.email && touched.email ? 'input-error' : ''} form__input`}
					type="email" id="email"
					placeholder="Логин"
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.email && touched.email && <span className="msg-error">{errors.email}</span>}
			</div>
			<div className="form__wrap">
				<input
					className={`${errors.password && touched.password ? 'input-error' : ''} form__input`}
					type="password" id="password" placeholder="Пароль"
					value={values.password}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.password && touched.password && <span className="msg-error">{errors.password}</span>}
			</div>
			{errorMessage && (
				<p className="error"> {errorMessage} </p>
			)}
			<button className="form__btn" type="submit">Войти</button>
		</form>
	)
}