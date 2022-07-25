// Don't forget the import
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({user}, {setUser}) {
  function handleLogOut(){
    userService.logOut()
    setUser(null)
  }
  return (
    <nav>
      <Link to="/books">Books</Link>
      &nbsp; | &nbsp;
      <Link to="/characters">Characters</Link>
      &nbsp; | &nbsp;
      <Link to="/houses">Houses</Link>
      &nbsp; | &nbsp;
      <Link to="/species">Species</Link>
      &nbsp; | &nbsp;
      <Link to="/hogwars">HogWARS</Link>
      &nbsp; | &nbsp;
      <Link to="/" onClick={handleLogOut}>Logout</Link>
      <br />
      Welcome, {user.firstname} {user.lastname}
    </nav>
  );
}