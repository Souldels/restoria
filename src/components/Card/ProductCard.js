import Button from '../Buttons/Button'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cartSlice'
import '../../Pages/product.scss'

export default function ProductCard({ id, imgUrl, title, desc, price, weight, amount }) {

	let portionText

	if (weight) {
		portionText = weight + ' г.'
	} else {
		portionText = amount + ' шт.'
	}

	const dispatch = useDispatch();

	// Событие по клику на btn для добавления товара в корзину
	const addToCart = () => {
		const item = {
			id,
			title,
			price,
			imgUrl,
		};
		dispatch(addItem(item));
	}

	return (
		<div className="card">
			<div className="card__left">
				<img src={imgUrl} alt="продукт" className="card__img" />
			</div>
			<div className="card__right">
				<h2 className='card__title'>{title}</h2>
				<p className='card__desc'>{desc}</p>
				<div className="card__bottom">
					<div className="card__bottom-wrap">
						<span className='card__price'>{price} ₽</span>
						<span className='card__weight'> / {portionText}</span>
					</div>
					<Button
						title={'В корзину'}
						handleClick={addToCart}
					/>
				</div>
			</div>
		</div>
	)
}