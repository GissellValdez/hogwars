import { Link } from 'react-router-dom'

export default function HPWandDataTile(props){
    return(
        <>
            <div>
                <Link to={`/wands/${props.resourceData.id}`}>
                    <h4>{props.resourceData.name}</h4>
                </Link>
            </div>
        </>
    )
}