//datas
import accountInfos from '../../datas/accountInfos';

//components
import AccountInfos from '../AccountInfos';

function AccountList() {
	return (
		<>
			<h2 className="sr-only">Accounts</h2>
			{accountInfos.map((account, index) => (
				<AccountInfos key={index} title={account.title} amount={account.amount} description={account.description} />
			))}
		</>
	);
}

export default AccountList;
