// Don't forget the import
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({user}, {setUser}) {
  function handleLogOut(){
    userService.logOut()
    setUser(null)
  }
  return (
    <>
      <div>
        <Link to="/" className='clickable-banner'>
          <img src="https://fontmeme.com/permalink/220802/58fe3af4cfdd9d03c56596b7d44e627c.png" alt="harry-potter-font" border="0" />
        </Link>
      </div>
      <nav>
        <Link to="/characters">Characters | </Link>
        &nbsp;
        <Link to="/yearbook">Yearbook | </Link>
        &nbsp;
        <Link to="/books">Books | </Link>
        &nbsp;
        <Link to="/houses">Houses | </Link>
        &nbsp;
        <Link to="/species">Creatures | </Link>
        &nbsp; 
        <Link to="/wands">Wands | </Link>
        &nbsp;
        <Link to="/hogwars">HogWARS | </Link>
        &nbsp;
        <Link to="/myaccount">My Account | </Link>
        &nbsp;
        <Link to="/" onClick={handleLogOut}>Logout</Link>
        <br />
        <br />
        <br />
      </nav>
    </>
  );
}