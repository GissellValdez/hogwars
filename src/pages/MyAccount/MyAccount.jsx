import { useState } from 'react'
import * as userService from "../../utilities/users-service"


export default function MyAccount(props) {

    const [updateUser, setUpdateUser] = useState({ firstname: props.user.firstname, lastname: props.user.lastname, email: props.user.email })


    function handleSubmit(evt) {
        evt.preventDefault()
        // hit the database to change something or to update things
        // hit the database
        // update the information
        // save the information
        userService.updateUser(updateUser)
        setUpdateUser(updateUser)
    }

    function formUser(evt) {
        const newFormUser = {...updateUser, [evt.target.name]: evt.target.value}
        setUpdateUser(newFormUser)
    }

    function handleDelete(){
        userService.deleteUser(updateUser)
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstname" value={updateUser.firstname} onChange={formUser}/>
                    <input type="text" name="lastname" value={updateUser.lastname} onChange={formUser}/>
                    <input type="text" name="email" value={updateUser.email} onChange={formUser} />
                    <button type="submit">EDIT ACCOUNT INFO</button>
                    <h3>Any changes will be reflected when you log back in the next time!</h3>
                    
                </form>
                <button onClick={handleDelete}>DELETE ACCOUNT</button>
                <h3>If you deleted your account, please refresh the page!</h3>
            </div>


        </>
    )
}
