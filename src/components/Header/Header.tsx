import HeaderTilte from './HeaderTilte';
import NumberHeader from './NumberHeader';
import RelatedHeader from './RelatedHeader';

const Header = () => {
	return (
		<div className="bg-gray-100 p-2 md:p-10">
			<HeaderTilte />
			<NumberHeader />
			<RelatedHeader/>
		</div>
	);
};

export default Header;
