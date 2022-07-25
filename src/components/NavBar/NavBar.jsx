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
      <Link to="/book">Books</Link>
      &nbsp; | &nbsp;
      <Link to="/link2">Link 2</Link>
      &nbsp; | &nbsp;
      <Link to="/" onClick={handleLogOut}>Logout</Link>
      <br />
      Welcome, {user.firstname} {user.lastname}
    </nav>
  );
}