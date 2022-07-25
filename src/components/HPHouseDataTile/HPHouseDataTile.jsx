export default function HPHouseDataTile(props){
    const image_url=props.resourceData.image_url

    return(
        <>
            <div>
                <h4>{props.resourceData.name}</h4>
                <img src={image_url}/>
            </div>
        </>
    )
}