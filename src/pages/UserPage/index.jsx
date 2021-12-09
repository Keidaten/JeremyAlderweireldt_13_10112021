import { useEffect, useState } from 'react';

import { useStore, useDispatch } from 'react-redux';

//features
import { identification } from '../../features/profile';

//components
import AccountList from '../../components/AccountList';
import UserEdit from '../../components/UserEdit';
import Welcome from '../../components/Welcome';
import { postUser } from '../../utils/serviceAPI';

function UserPage() {
	const store = useStore();
	const dispatch = useDispatch();
	const [identified, setIdentified] = useState(false);

	//get user profile
	useEffect(() => {
		const { token } = store.getState().signIn;
		const authorization = { Authorization: `Bearer ${token}` };

		postUser(authorization)
			.then((response) => {
				setIdentified(true);
				dispatch(identification(response.data.body));
			})
			.catch(() => setIdentified(false));
	}, [dispatch, store]);

	return (
		<main className="main bg-dark">
			<div className="header">
				<Welcome identified={identified} />
				<UserEdit />
			</div>
			<AccountList />
		</main>
	);
}

export default UserPage;
