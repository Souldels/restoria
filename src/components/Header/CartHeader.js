import CardButton from '../Card/CardButton'
import Button from '../Buttons/Button';
import { useNavigate } from 'react-router-dom';
import style from './cartHeader.module.css'

export default function CartHeader() {

	const nav = useNavigate();

	const backTo = () => {
		nav(-1);
	}

	const logout = () => {
		nav('/');
	}

	return (
		<header className={style.header}>
			<div className={style.header__container}>
				<CardButton
					use={`backToProducts`}
					clickOnBtn={backTo}
				/>
				<h1 className={style.header__title}>Корзина с выбранными товарами</h1>
				<Button
					use={'logout'}
					title={'Выйти'}
					handleClick={logout}
				/>
			</div>
		</header>
	)
}