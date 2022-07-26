import HPCharacterDataTile from "../HPCharacterDataTile/HPCharacterDataTile";

export default function HPCharacterList({ potterCharacters }) {
  return (
    <>
      <div>
        {potterCharacters.map((pc, idx) => (
           <HPCharacterDataTile potterCharacter={pc} key={idx} />
        ))}
      </div>
    </>
  );
}
