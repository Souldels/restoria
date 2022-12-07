import style from './button.module.css'

export default function Button({ use, title, handleClick }) {

	let btnStyle = style.btn;

	if (use === 'default') {
		btnStyle = style.btn;
	} else if (use === 'logout') {
		btnStyle = style.btn__logout;
	}

	return (
		<button onClick={handleClick} className={btnStyle}>{title}</button>
	)
}