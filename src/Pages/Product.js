import ProductHeader from "../components/Header/ProductHeader";
import ProductCard from "../components/Card/ProductCard";
import { useParams } from "react-router-dom";
import { products } from '../menuList';
import './product.scss';

function Product() {

	const { id } = useParams();

	return (
		<>
			<ProductHeader />
			<main className='main'>
				<div className="main__container">
					{products.filter(prod => prod.id === id).map(item => {
						return (
							<ProductCard
								key={item.id}
								id={item.id}
								imgUrl={item.img}
								title={item.name}
								desc={item.longDesc}
								price={item.price}
								weight={item.weight}
								amount={item.amount}
							/>
						)
					})}
				</div>
			</main>
		</>
	);
}

export default Product;