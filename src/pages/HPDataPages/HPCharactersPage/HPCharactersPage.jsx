import * as harryPotterService from "../../../utilities/harry-potter-other-info/harry-potter-other-info-service"
import { useEffect, useState } from 'react'
import HPCharacterDataTile from "../../../components/HPDataComponents/HPCharacterDataTile/HPCharacterDataTile"

export default function HPCharactersPage({resource}){
    const [potterDataList, setPotterDataList] = useState([])

    async function getHarryPotterResourceData(resource){
        const potterDataList = await harryPotterService.getHarryPotterResourceData(resource)
        //const potterDataListJson = await potterDataList.Json()
     setPotterDataList(potterDataList)
        console.log(potterDataList)
    }

    useEffect(() => {
        getHarryPotterResourceData(resource)
    }, [])

    return(
        <>
            <p>Get to know the characters of your favorite characters!</p>
            <p>Click on any of the characters below!</p>
            <br />
            <div className="character-grid">
                {potterDataList?.map((d, idx) =>
                (
                    <HPCharacterDataTile resourceData={d} key={idx} />
                ))}
            </div>
        </>
    )
}
