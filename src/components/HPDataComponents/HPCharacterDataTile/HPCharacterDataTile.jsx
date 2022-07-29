export default function HPCharacterDataTile(props){
    return(
        <>
            <div>
                <h4>{props.potterCharacter.name}</h4>
                <img src={props.potterCharacter.image} alt="Not Available"/>
            </div>
        </>
    )
}