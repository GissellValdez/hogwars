import * as harryPotterService from "../../../utilities/harry-potter-other-info/harry-potter-other-info-service"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export default function HPCharacterDetailPage({resource}){
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
                <h3>Name: {potterData.name}</h3>
                <h3>Gender: {potterData.gender}</h3>
                <h3>Born: {potterData.born}</h3>
                <h3>Died: {potterData.died}</h3>
                <h3>Nationality: {potterData.nationality}</h3>
                <h3>Blood: {potterData.blood}</h3>
                <h3>Marital Status: {potterData.marital}</h3>
                <h3>Title: {potterData.title}</h3>
                <h3>Job: {potterData.job}</h3>
                <h3>Patronus: {potterData.patronus}</h3>
            </div>
        </>
    )
}
