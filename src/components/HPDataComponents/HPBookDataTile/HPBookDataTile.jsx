import { Link } from 'react-router-dom'
export default function HPBookDataTile(props){
    const image_url=props.resourceData.image_url

    return(
        <>
            <div>
                <Link to={`/books/${props.resourceData.id}`}>
                    <h4>{props.resourceData.title}</h4>
                    <img src={image_url} alt="Not Available"/>
                </Link>
            </div>
        </>
    )
}