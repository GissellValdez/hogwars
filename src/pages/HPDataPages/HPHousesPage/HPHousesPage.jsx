import * as harryPotterService from "../../../utilities/harry-potter-other-info/harry-potter-other-info-service"
import { useEffect, useState } from 'react'
import HPHouseDataTile from "../../../components/HPDataComponents/HPHouseDataTile/HPHouseDataTile"


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
            <p>Below are are the houses all students are sorted in to in their first year at Hogwarts.</p>
            <p>Click on any of the houses to get more information on the house you might be sorted in to when you get your Hogwarts letter!</p>
            <div className="house-grid">
                {potterDataList?.map((d, idx) =>
                (
                    <HPHouseDataTile resourceData={d} key={idx} />
                ))}
            </div>
        </>
    )
}
