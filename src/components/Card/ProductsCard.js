import CardButton from './CardButton';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import style from './productsCard.module.css';


function ProductsCard({ id, imgUrl, title, desc, price, weight, amount, clickOnCard }) {

	// Изменяем г или шт с помощью инструкции if
	let portionText

	if (weight) {
		portionText = weight + ' г.'
	} else {
		portionText = amount + ' шт.'
	}

	const dispatch = useDispatch();

	// Событие по клику на btn для добавления товара в корзину
	const addProduct = (e) => {
		e.stopPropagation();
		const item = {
			id,
			title,
			price,
			imgUrl,
		};
		dispatch(addItem(item));
	}

	return (
		<div className={style.card} onClick={clickOnCard} tabIndex={0}>
			<img src={imgUrl} alt="продукт" className={style.card__img} />
			<h2 className={style.card__title}>{title}</h2>
			<p className={style.card__desc}>{desc}</p>
			<div className={style.card__bottom}>
				<div className={style.card__bottomWrap}>
					<span className={style.card__price}>{price} ₽</span>
					<span className={style.card__weight}> / {portionText}</span>
				</div>
				<CardButton
					use={'addToCart'}
					clickOnBtn={addProduct} // props для изменения действия при нажатии на кнопку
				/>
			</div>
		</div>
	);
}

export default ProductsCard;