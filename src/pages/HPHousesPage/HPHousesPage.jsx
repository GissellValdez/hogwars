import * as harryPotterService from "../../utilities/harry-potter-service"
import { useEffect, useState } from 'react'
import HPHouseDataTile from "../../components/HPHouseDataTile/HPHouseDataTile"

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
                    <HPHouseDataTile resourceData={d} key={idx} />
                ))}
                <h1>Hi</h1>
            </div>
        </>
    )
}




