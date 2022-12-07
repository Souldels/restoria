import SignIn from '../components/Form/SignIn'
import SignUp from '../components/Form/SignUp';
import { useState } from 'react'
import './login.scss'

export default function Login() {
	const [change, setChange] = useState('singIn');


	return (
		<main className="login">
			<div className="login__container">
				<ul className='login__list'>
					<li
						onClick={() => setChange('singIn')}
						style={{ color: change === 'singIn' ? '#d58c51' : '' }}
						className='login__item'>Вход</li>
					<li
						onClick={() => setChange('singUp')}
						style={{ color: change === 'singUp' ? '#d58c51' : '' }}
						className='login__item'>Регистрация</li>
				</ul>
				{change === 'singIn' ? <SignIn /> : <SignUp />}
			</div>
		</main>
	)
}