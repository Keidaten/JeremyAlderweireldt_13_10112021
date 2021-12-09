import { useState } from 'react';

//redux
import { useStore, useDispatch } from 'react-redux';

//features
import { identification } from '../../features/profile';

//utils
import { putUser } from '../../utils/serviceAPI';

function UserEdit() {
	const store = useStore();
	const dispatch = useDispatch();

	const [newFirstName, setNewFirstName] = useState('');
	const [newLastName, setNewLastName] = useState('');
	const [editFeedBack, setEditFeedBack] = useState('');
	const [userEdit, setUserEdit] = useState(false);

	//Handle button click
	const handleChange = (e, type) => {
		if (type === 'firstname') {
			setNewFirstName(e.target.value);
		}
		if (type === 'lastname') {
			setNewLastName(e.target.value);
		}
	};

	//update user name
	const updateUser = (e) => {
		e.preventDefault();

		const { token } = store.getState().signIn;
		const authorization = { Authorization: `Bearer ${token}` };

		const bodyData = {
			firstName: newFirstName,
			lastName: newLastName,
		};

		putUser(bodyData, authorization).then((response) => {
			dispatch(identification(response.data.body));
			setEditFeedBack('Votre nom a bien été modifié');
		});
	};

	return (
		<>
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
		</>
	);
}

export default UserEdit;
