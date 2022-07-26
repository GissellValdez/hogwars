import { Link } from 'react-router-dom'
export default function HPHouseDataTile(props){
    const image_url=props.resourceData.image_url

    return(
        <>
            <div>
                <Link to={`/houses/${props.resourceData.id}`}>
                <h4>{props.resourceData.name}</h4>
                <img src={image_url} alt="Not Available"/>
                </Link>
            </div>
        </>
    )
}