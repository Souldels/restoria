import ProductsCard from '../Card/ProductsCard';
import { products } from '../../menuList';
import { useNavigate } from 'react-router-dom';
import styles from '../Main/productsMain.module.css';

function ProductsMain() {

	const nav = useNavigate();

	const clickOnCard = (id) => {
		nav(`/product/${id}`);
	}

	return (
		<>
			<main className={styles.main}>
				<div className={`container ${styles.main__container} flex`}>
					{products.map(obj => {
						return (
							<ProductsCard
								key={obj.id} //id для map
								id={obj.id} // для работы логики в корзине и чтобы добавлялся счетчик
								imgUrl={obj.img}
								title={obj.name}
								desc={obj.description}
								price={obj.price}
								weight={obj.weight}
								amount={obj.amount}
								clickOnCard={() => clickOnCard(obj.id)}
							/>
						)
					})
					}
				</div>
			</main>
		</>
	);
}

export default ProductsMain;