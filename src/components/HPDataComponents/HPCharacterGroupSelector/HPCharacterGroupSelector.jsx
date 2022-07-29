import { useState } from 'react'
import HPCharacterList from "../HPCharacterList/HPCharacterList"
import * as potterCharacterAPI from "../../../utilities/harry-potter-characters/harry-potter-characters-service"

export default function HPCharacterSearchBar(){
    const [potterCharacters, setPotterCharacters] = useState([])
    const [characterGroup, setCharacterGroup] = useState("");
    

    function handleChange(event) {
        setCharacterGroup(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        async function getPotterCharacters(characterGroup) {
            const potterCharacterList = await potterCharacterAPI.getHarryPotterCharacterData(characterGroup)
            setPotterCharacters(potterCharacterList)
            console.log(potterCharacterList)
        }
        getPotterCharacters(characterGroup)
    }

    return (
        <>
        <form value={potterCharacters} onSubmit={handleSubmit}>
            <label>Enter a search word:</label>
            <select onChange={handleChange}>
                <option value="characters">All Characters</option>
                <option value="characters/students">Students</option>
                <option value="characters/staff">Staff</option>
                <option value="characters/house/gryffindor">Characters from Gryffindor</option>
                <option value="characters/house/slytherin">Characters from Slytherin</option>
                <option value="characters/house/hufflepuff">Characters from Hufflepuff</option>
                <option value="characters/house/ravenclaw">Characters from Ravenclaw</option>
            </select>
            <button type="submit">Submit</button>
        </form>

        <HPCharacterList potterCharacters={potterCharacters} />
        </>
    );
}
