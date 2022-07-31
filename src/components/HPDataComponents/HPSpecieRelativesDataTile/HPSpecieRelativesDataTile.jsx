import { Link } from 'react-router-dom'
export default function HPSpecieRelativesData(props){

    return(
        <>
            <div>
                <Link to={`/species/${props.specieRelative.id}`}>
                    <li>{props.specieRelative.name}</li>
                </Link>
            </div>
        </>
    )
}