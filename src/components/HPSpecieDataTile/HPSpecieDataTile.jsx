export default function HPSpecieDataTile(props){
    const image_url=props.resourceData.image_url

    return(
        <>
            <div>
                <h4>{props.resourceData.name}</h4>
            </div>
        </>
    )
}