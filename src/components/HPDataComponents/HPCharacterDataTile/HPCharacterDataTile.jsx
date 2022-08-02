import { Link } from 'react-router-dom'

export default function HPCharacterDataTile(props){
    const image_url=props.resourceData.image_url
    
    return(
        <>
            <div>
                <Link to={`/characters/${props.resourceData.id}`}>
                    <h4>{props.resourceData.name}</h4>
                    <img src={image_url} alt="Not Available"/>
                </Link>
            </div>
        </>
    )
}