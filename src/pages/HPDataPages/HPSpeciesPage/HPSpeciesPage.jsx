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
            <div className="specie-grid">
                {potterDataList?.map((d, idx) =>
                (
                    <HPSpecieDataTile resourceData={d} key={idx} />
                ))}
            </div>
        </>
    )
}
