import * as harryPotterService from "../../../utilities/harry-potter-other-info/harry-potter-other-info-service"
import { useEffect, useState } from 'react'
import HPSpecieDataTile from "../../../components/HPDataComponents/HPSpecieDataTile/HPSpecieDataTile"

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
            <p>Below is a list of species/creatures from the Harry Potter series.</p>
            <p>Click on any of the species to see more information about them...</p>
            <div className="specie-grid">
                {potterDataList?.map((d, idx) =>
                (
                    <HPSpecieDataTile resourceData={d} key={idx} />
                ))}
            </div>
        </>
    )
}
