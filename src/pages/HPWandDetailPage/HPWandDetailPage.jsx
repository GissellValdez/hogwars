import * as harryPotterService from "../../utilities/harry-potter-other-info/harry-potter-other-info-service"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export default function HPWandDetailPage({resource}){
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
                <h1>Name: {potterData.name}</h1>
                <h3>Manufacturer: {potterData.manufacturer}</h3>
                <h3>Made: {potterData.made}</h3>
                <h3>Wood: {potterData.wood}</h3>
                <h3>Core: {potterData.core}</h3>
                <h3>Length: {potterData.length}</h3>
                <h3>Characteristics: {potterData.characteristics}</h3>
            </div>
        </>
    )
}
