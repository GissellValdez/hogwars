import HPYearbookCharacterDataTile from "../HPYearbookCharacterDataTile/HPYearbookCharacterDataTile";

export default function HPCharacterList({ potterCharacters }) {
  return (
    <>
      <div>
        {potterCharacters.map((pc, idx) => (
           <HPYearbookCharacterDataTile potterCharacter={pc} key={idx} />
        ))}
      </div>
    </>
  );
}
