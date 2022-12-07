import Button from '../Buttons/Button'
import { useSelector } from 'react-redux';
import style from './cartFooter.module.css'

export default function CartFooter() {

	const { totalPrice } = useSelector(state => state.cart);

	return (
		<footer className={style.footer}>
			<div className={style.footer__container}>
				<div className={style.footer__wrap}>
					<h2 className={style.footer__title}>Заказ на сумму: </h2>
					<span className={style.footer__total}>{totalPrice}  ₽</span>
				</div>
				<Button
					title='Оформить заказ'
				/>
			</div>
		</footer>
	)
}