import * as harryPotterService from "../../../utilities/harry-potter-other-info/harry-potter-other-info-service"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export default function HPSpecieDetailPage({resource}){
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
                <h1>Name: {potterData.name}</h1>
                <h3>Main Location: {potterData.native}</h3>
                <h3>Mortality: {potterData.mortality}</h3>
                <h3>Eyes: {potterData.eyes}</h3>
                <h3>Hair: {potterData.hair}</h3>
                <h3>height: {potterData.height}</h3>
                {/* // do another map for these 2
                <h3>Distinctions: {potterData.distinctions}</h3>
                <h3>Relates Species: {potterData.related_species}</h3> */}
            </div>
        </>
    )
}
