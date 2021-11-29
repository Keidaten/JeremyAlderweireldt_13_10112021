import { useEffect, useState } from 'react';

//redux
import { useDispatch, useStore, useSelector } from 'react-redux';

//features
import { identification } from '../../features/profile';

//axios
import axios from 'axios';

//selectors
import { selectFirstname, selectLastname } from '../../utils/selectors';

//components
import AccountInfos from '../../components/AccountInfos';

//datas
import accountInfos from '../../datas/accountInfos';

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
			{accountInfos.map((account, index) => (
				<AccountInfos index={index} title={account.title} amount={account.amount} description={account.description} />
			))}
		</main>
	);
}

export default UserPage;
