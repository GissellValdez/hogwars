import * as potterAPI from "./harry-potter-api"

export async function getHarryPotterResourceData(resource){
    const potterDataList = await potterAPI.getHarryPotterResourceData(resource)
    return potterDataList
}