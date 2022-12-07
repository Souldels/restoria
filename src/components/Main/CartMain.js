import CartCard from '../Card/CartCard';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import style from '../Main/cartMain.module.css';


function CartMain() {

	const items = useSelector((state) => state.cart.items);

	const nav = useNavigate();

	const clickOnCard = (id) => {
		nav(`/product/${id}`);
	}

	return (
		<>
			<main className={style.main}>
				<div className={`${style.main__container} flex`}>

					{items.map((item) => (
						<CartCard key={item.id} {...item}
							clickOnCard={() => clickOnCard(item.id)}
						/>
					))}
				</div>
			</main>
		</>
	);
}

export default CartMain;