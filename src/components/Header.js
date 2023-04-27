import { Link } from 'react-router-dom';
import NavMain from './NavMain';

function Header() {
    return (
        <header>
            <h1><Link to='/'>Movie Mania</Link></h1>
            <NavMain />
        </header>
    )
}

export default Header;
