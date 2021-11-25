import argentBankLogo from '../../assets/argentBankLogo.png';
import { NavLink } from 'react-router-dom';

//Redux
import { useSelector, useDispatch } from 'react-redux';

//Selectors
import { selectToken } from '../../utils/selectors';

//features
import { logout } from '../../features/authentification';

function Header() {
	const dispatch = useDispatch();
	const token = useSelector(selectToken);

	return (
		<nav className="main-nav">
			{token ? (
				<div className="main-nav-logo">
					<img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
					<h1 className="sr-only">Argent Bank</h1>
				</div>
			) : (
				<NavLink to="/" className="main-nav-logo">
					<img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
					<h1 className="sr-only">Argent Bank</h1>
				</NavLink>
			)}
			<div>
				{token ? (
					<NavLink to="/" className="main-nav-item" onClick={() => dispatch(logout())}>
						<i className="fa fa-user-circle"></i>
						Sign out
					</NavLink>
				) : (
					<NavLink to="/login" className="main-nav-item">
						<i className="fa fa-user-circle"></i>
						Sign In
					</NavLink>
				)}
			</div>
		</nav>
	);
}

export default Header;
