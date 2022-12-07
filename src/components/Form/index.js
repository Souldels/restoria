import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

export const SignUpSchema = yup.object().shape({
	email: yup.string().email("Email не валиден").required("Поле не должно быть пустым"),
	password: yup
		.string()
		.min(4, 'Пароль должен содержать не менее 4-х символов')
		.matches(passwordRules, { message: "Ненадежный пароль" })
		.required("Поле не должно быть пустым"),
});

export const SignInSchema = yup.object().shape({
	email: yup.string().lowercase().trim().email("Email не валиден").required("Поле не должно быть пустым"),
	password: yup
		.string()
		.required("Поле не должно быть пустым"),
});

