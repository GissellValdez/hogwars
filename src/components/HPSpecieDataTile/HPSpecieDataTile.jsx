import { Link } from 'react-router-dom'
export default function HPSpecieDataTile(props){

    return(
        <>
            <div>
                <Link to={`/species/${props.resourceData.id}`}>
                    <h4>{props.resourceData.name}</h4>
                </Link>
            </div>
        </>
    )
}