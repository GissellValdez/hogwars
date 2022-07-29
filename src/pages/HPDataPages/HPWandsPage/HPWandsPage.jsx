import * as harryPotterService from "../../../utilities/harry-potter-other-info/harry-potter-other-info-service"
import { useEffect, useState } from 'react'
<<<<<<< HEAD:src/pages/HPDataPages/HPWandsPage/HPWandsPage.jsx
import HPWandDataTile from "../../../components/HPDataComponents/HPWandDataTile/HPWandDataTile"
=======
import HPWandDataTile from "../../components/HPWandDataTile/HPWandDataTile"
>>>>>>> parent of 1233361 (organized the HP Data components into their own folder):src/pages/HPWandsPage/HPWandsPage.jsx

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
