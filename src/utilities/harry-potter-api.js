
export async function getHarryPotterResourceData(resource){
    // This is the base url of the harry potter api
    // information about this api can be foudn at https://www.theboywholivedapi.fun/
    const BASE_URL = 'https://legacy--api.herokuapp.com/api/v1';
    // there are 7 resources in this api:
    // books: data on all harry potter books (i.e. title, img, pages, previous book, next book, release date)
    // characters: data on all characters from the books (i.e. name, img, house, loyalty, DOB, DOD, blood, etc)
    // houses: data on all houses (name, foudner, mascot animal, colors, img, ghost, etc.)
    // species
    // wand
    const URL = `${BASE_URL}/${resource}`
    console.log(URL)
    
    const res = await fetch(URL);
    //console.log(res)

    let resJson = await res.json();
    console.log(resJson)

    if (res.ok) {
        // res.json() will resolve to the JWT
        return resJson
      } else {
        throw new Error('Invalid Request');
      }

}
