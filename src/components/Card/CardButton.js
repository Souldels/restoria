import style from './cardButton.module.css';

function CardButton({ use, clickOnBtn }) {

	let btnState = style.card__btn;

	if (use === 'addToCart') {
		btnState = style.card__btn;
	} else if (use === 'delFromCart') {
		btnState = style.card__btn_del;
	} else if (use === 'backToProducts') {
		btnState = style.card__btn_back;
	}

	return (
		<button onClick={clickOnBtn} className={`${btnState} btn__reset`}></button>
	);
}

export default CardButton;

// Событие onClick передаем в props для изменения поведения 