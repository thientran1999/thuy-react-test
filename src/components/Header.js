import Proptypes from 'prop-types'

const Header = (props.) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<botton className='bnd'>Add</botton>
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

Header.proptypes = {
	title: Proptypes.string.isRequired,
}
export default Header
