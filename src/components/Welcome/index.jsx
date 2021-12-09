//redux
import { useSelector } from 'react-redux';

//selectors
import { selectFirstname, selectLastname } from '../../utils/selectors';

function Welcome({ identified }) {
	const firstname = useSelector(selectFirstname);
	const lastname = useSelector(selectLastname);

	return (
		<>
			{identified ? (
				<h1>
					Welcome back
					<br />
					{firstname + ' ' + lastname}
				</h1>
			) : (
				<h1>Welcome back</h1>
			)}
		</>
	);
}

export default Welcome;
