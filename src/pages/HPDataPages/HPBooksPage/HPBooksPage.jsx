import * as harryPotterService from "../../../utilities/harry-potter-other-info/harry-potter-other-info-service"
import { useEffect, useState } from 'react'
import HPBookDataTile from "../../../components/HPDataComponents/HPBookDataTile/HPBookDataTile"

export default function HPBooksPage({resource}){
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
                    <HPBookDataTile resourceData={d} key={idx} />
                ))}
            </div>
        </>
    )
}