import CardButton from "./CardButton";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/cartSlice";
import style from './cartCard.module.css'

function CartCard({ id, imgUrl, title, price, count, clickOnCard }) {

	const dispatch = useDispatch();

	// Событие по клику на btn для удаления из корзины товара
	const removeProduct = (e) => {
		e.stopPropagation();
		dispatch(
			removeItem({
				id,
			}),
		)
	}

	return (
		<div className={style.card}>
			<div className={style.card__left} onClick={clickOnCard}>
				<img src={imgUrl} alt="продукт" className={style.card__img} />
				<h2 className={style.card__title}>{title}</h2>
			</div>
			<span className={style.card__count}>{count}x</span>
			<div className={style.card__wrap}>
				<span className={style.card__price}>{price} ₽</span>
				<CardButton
					use={'delFromCart'}
					clickOnBtn={removeProduct} // props для изменения действия при нажатии на кнопку
				/>
			</div>
		</div>
	);
}

export default CartCard;