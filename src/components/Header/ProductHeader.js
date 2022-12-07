import CardButton from '../Card/CardButton'
import CartIcon from './CartIcon';
import Button from '../Buttons/Button';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../Pages/product.scss';


export default function ProductHeader() {

	const { items, totalPrice } = useSelector(state => state.cart);

	const totalPriceCount = items.reduce((sum, item) => sum + item.count, 0);

	const nav = useNavigate();

	const backTo = () => {
		nav(-1);
	}

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
		<header className="header">
			<div className="header__container">
				<CardButton
					use={`backToProducts`}
					clickOnBtn={backTo}
				/>
				<div className='header__cart'>
					<div className='header__total'>
						<span className='header__total-products'>{totalPriceCount} {goods}</span>
						<span className='header__total-price'>на сумму {totalPrice} ₽</span>
					</div>
					<Link to={'/cart'}>
						<button className='header__btn'>
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