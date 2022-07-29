import * as harryPotterService from "../../../utilities/harry-potter-other-info/harry-potter-other-info-service"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export default function HPHouseDetailPage({resource}){
    const [potterData, setPotterData] = useState([])
    const { id } = useParams();
    
    async function getHarryPotterResourceData(resource){
        resource+=id
        const potterData = await harryPotterService.getHarryPotterResourceData(resource)
        //const potterDataListJson = await potterDataList.Json()
        setPotterData(potterData)
        console.log(potterData)
    }

    useEffect(() => {
        getHarryPotterResourceData(resource)
    }, [])

    return(
        <>
            <div>
                <img src={potterData.image_url} alt="Not Available"/>
            </div>
            <div>
                <h1>House: {potterData.name}</h1>
                <h3>Founder: {potterData.founder}</h3>
                <h3>Animal: {potterData.animal}</h3>
                <h3>Official Colors: {potterData.colors}</h3>
                <h3>Element: {potterData.element}</h3>
                <h3>Ghost: {potterData.ghost}</h3>
                <h3>Common Room: {potterData.common_room}</h3>
            </div>
        </>
    )
}
