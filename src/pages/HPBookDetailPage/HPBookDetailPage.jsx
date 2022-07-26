import * as harryPotterService from "../../utilities/harry-potter-other-info/harry-potter-other-info-service"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export default function HPBookDetailPage({resource}){
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
                <h1>Book #: {potterData.id}</h1>
                <h3>Title: {potterData.title}</h3>
                <h3>Page Count: {potterData.pages}</h3>
                <h3>Release Date: {potterData.release_date}</h3>
                <h3>Publisher: {potterData.publisher}</h3>
                <h3>Previous Book: {potterData.preceded_by}</h3>
                <h3>Next Book: {potterData.followed_by}</h3>
            </div>
        </>
    )
}
