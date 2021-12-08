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
	const [userEdit, setUserEdit] = useState(false);
	const [newFirstName, setNewFirstName] = useState('');
	const [newLastName, setNewLastName] = useState('');
	const [editFeedBack, setEditFeedBack] = useState('');

	const firstname = useSelector(selectFirstname);
	const lastname = useSelector(selectLastname);

	const handleChange = (e, type) => {
		if (type === 'firstname') {
			setNewFirstName(e.target.value);
		}
		if (type === 'lastname') {
			setNewLastName(e.target.value);
		}
	};

	//get user name from API
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

	//update user name
	const updateUser = (e) => {
		e.preventDefault();

		const { token } = store.getState().signIn;
		const authorization = { Authorization: `Bearer ${token}` };

		const bodyData = {
			firstName: newFirstName,
			lastName: newLastName,
		};

		return axios.put('http://localhost:3001/api/v1/user/profile', bodyData, { headers: authorization }).then((response) => {
			dispatch(identification(response.data.body));
			setEditFeedBack('Votre nom a bien été modifié');
		});
	};

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
				<button className="edit-button" onClick={() => setUserEdit(userEdit === false ? true : false)}>
					Edit Name
				</button>
				{userEdit && (
					<form className="edit-form" onSubmit={(e) => updateUser(e)}>
						<div className="input-wrapper">
							<label htmlFor="Firstname">Firstname</label>
							<input type="text" id="Firstname" onChange={(e) => handleChange(e, 'firstname')} />
						</div>
						<div className="input-wrapper">
							<label htmlFor="Lastname">Lastname</label>
							<input type="text" id="Lastname" onChange={(e) => handleChange(e, 'lastname')} />
						</div>
						<button className="sign-in-button --updateButton">Update</button>
						<span>{editFeedBack}</span>
					</form>
				)}
			</div>
			<h2 className="sr-only">Accounts</h2>
			{accountInfos.map((account, index) => (
				<AccountInfos key={index} title={account.title} amount={account.amount} description={account.description} />
			))}
		</main>
	);
}

export default UserPage;
