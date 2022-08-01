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
            <p>The first Harry Potter book, Harry Potter and the Philosopher’s Stone, was published by Bloomsbury in 1997 to immediate popular and critical acclaim. Six further best-selling books, three companion books, a playscript and two screenplays have since followed. The Harry Potter books have been translated into over 80 languages, won multiple awards, and sold more than 500 million copies worldwide, becoming the best-selling book series in history...</p>
            <p>Please click on any one of the books below for extra info on that book!</p>

            <div className="books-grid">
                {potterDataList?.map((d, idx) =>
                (
                    <HPBookDataTile resourceData={d} key={idx} />
                ))}
            </div>
        </>
    )
}
