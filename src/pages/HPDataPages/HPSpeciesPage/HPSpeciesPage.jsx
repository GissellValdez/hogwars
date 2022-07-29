import * as harryPotterService from "../../../utilities/harry-potter-other-info/harry-potter-other-info-service"
import { useEffect, useState } from 'react'
<<<<<<< HEAD:src/pages/HPDataPages/HPSpeciesPage/HPSpeciesPage.jsx
import HPSpellDataTile from "../../../components/HPDataComponents/HPSpecieDataTile/HPSpecieDataTile"
=======
import HPSpellDataTile from "../../components/HPSpecieDataTile/HPSpecieDataTile"
>>>>>>> parent of 1233361 (organized the HP Data components into their own folder):src/pages/HPSpeciesPage/HPSpeciesPage.jsx

export default function HPResourcePage({resource}){
    const [potterDataList, setResourceData] = useState([])

    async function getHarryPotterResourceData(resource){
        const potterDataList = await harryPotterService.getHarryPotterResourceData(resource)
        //const potterDataListJson = await potterDataList.Json()
        setResourceData(potterDataList)
        console.log(potterDataList)
    }

    useEffect(() => {
        getHarryPotterResourceData(resource)
    }, [])

    return(
        <>
            <div>
                {potterDataList?.map((d, idx) =>
                (
                    <HPSpellDataTile resourceData={d} key={idx} />
                ))}
            </div>
        </>
    )
}
