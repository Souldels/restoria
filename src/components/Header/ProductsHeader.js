import CartIcon from './CartIcon';
import Button from '../Buttons/Button';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from '../Header/productsHeader.module.css'

export default function ProductsHeader() {

	const { items, totalPrice } = useSelector(state => state.cart);

	const totalPriceCount = items.reduce((sum, item) => sum + item.count, 0);

	const nav = useNavigate();

	const logout = () => {
		nav('/');
	}

	//============Форматтер склонения===========

	let goods = 'товар'

	if (totalPriceCount === 0) {
		goods = 'товаров';
	}

	if (totalPriceCount >= 2) {
		goods = 'товара';
	}

	if (totalPriceCount % 100 > 4 && totalPriceCount % 100 <= 20) {
		goods = 'товаров';
	}

	if (totalPriceCount === 21) {
		goods = 'товар'
	}

	// ============================================
	return (
		<header className={style.header}>
			<div className={`${style.header__container} container`}>
				<h1 className={style.header__title}>наша продукция</h1>
				<div className={`${style.header__cart} flex`}>
					<div className={`${style.header__total} flex`}>
						<span className={style.header__totalProducts}>{totalPriceCount} {goods}</span>
						<span className={style.header__totalPrice}>на сумму {totalPrice} ₽</span>
					</div>
					<Link to={'/cart'}>
						<button className={style.header__btn}>
							<CartIcon />
						</button>
					</Link>
					<Button
						use={'logout'}
						title={'Выйти'}
						handleClick={logout}
					/>
				</div>
			</div>
		</header>
	)
}