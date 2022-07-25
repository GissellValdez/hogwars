export default function HPBookDataTile(props){
    const image_url=props.resourceData.image_url

    return(
        <>
            <div>
                <h4>{props.resourceData.title}</h4>
                <img src={image_url}/>
            </div>
        </>
    )
}