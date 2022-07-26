import * as potterCharacterAPI from "./harry-potter-characters-api"

export async function getHarryPotterCharacterData(characterGroup){
    const potterCharacterList = await potterCharacterAPI.getHarryPotterCharacterData(characterGroup)
    return potterCharacterList
}