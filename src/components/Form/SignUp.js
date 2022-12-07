import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import { Checkbox } from "@mui/material";
import { useFormik } from "formik";
import { SignUpSchema } from "./index";
import { useNavigate } from 'react-router-dom';
import '../../Pages/login.scss';


export default function SignUp() {

	const nav = useNavigate();

	const onSubmit = (values) => {
		localStorage.setItem('User', JSON.stringify(values));
		nav('/menu');
	}

	const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: SignUpSchema,
		onSubmit,
	});

	return (
		<form onSubmit={handleSubmit} className="form">
			<legend className="form__title">Регистрация</legend>
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
			<label htmlFor="checkbox" className="form__label">
				<Checkbox
					icon={<RadioButtonUncheckedOutlinedIcon />}
					checkedIcon={<RadioButtonCheckedOutlinedIcon />}
					id='checkbox'
				/>
				Я согласен получать обновления на почту
			</label>
			<button className="form__btn" type="submit">Зарегистрироваться</button>
		</form>
	)

}
