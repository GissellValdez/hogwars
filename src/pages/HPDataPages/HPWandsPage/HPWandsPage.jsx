import * as harryPotterService from "../../../utilities/harry-potter-other-info/harry-potter-other-info-service"
import { useEffect, useState } from 'react'
import HPWandDataTile from "../../../components/HPDataComponents/HPWandDataTile/HPWandDataTile"

export default function HPWandsPage({resource}){
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
            <div>
                {potterDataList?.map((d, idx) =>
                (
                    <HPWandDataTile resourceData={d} key={idx} />
                ))}
            </div>
        </>
    )
}
