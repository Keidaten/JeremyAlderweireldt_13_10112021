import { useEffect, useState } from 'react';

//redux
import { useDispatch, useStore, useSelector } from 'react-redux';

//features
import { identification } from '../../features/profile';

//axios
import axios from 'axios';

//selectors
import { selectFirstname, selectLastname } from '../../utils/selectors';

function UserPage() {
	const store = useStore();
	const dispatch = useDispatch();
	const [identified, setIdentified] = useState(false);

	const firstname = useSelector(selectFirstname);
	const lastname = useSelector(selectLastname);

	useEffect(() => {
		const { token } = store.getState().signIn;
		const authorization = { Authorization: `Bearer ${token}` };

		axios
			.post('http://localhost:3001/api/v1/user/profile', {}, { headers: authorization })
			.then((response) => {
				setIdentified(true);
				dispatch(identification(response.data.body));
			})
			.catch(() => setIdentified(false));
	}, [dispatch, store]);

	return (
		<main className="main bg-dark">
			<div className="header">
				{identified ? (
					<h1>
						Welcome back
						<br />
						{firstname + ' ' + lastname}
					</h1>
				) : (
					<h1>Welcome back</h1>
				)}
				<button className="edit-button">Edit Name</button>
			</div>
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
		</main>
	);
}

export default UserPage;
