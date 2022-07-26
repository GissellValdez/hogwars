export async function getHarryPotterCharacterData(characterGroup){
	// This is the base url of the harry potter characters api
	// information about this api can be found at http://hp-api.herokuapp.com
	const BASE_URL = 'http://hp-api.herokuapp.com/api'
	// this api has a lot more information on the characters, so using this for the characters page
	const URL = `${BASE_URL}/${characterGroup}`
	console.log(URL)

	const res = await fetch(URL)
	//console.log(res)

	let resJson = await res.json()
	console.log(resJson)

	if (res.ok) {
		// res.json() will resolve to the JWT
		return resJson
	} else {
		throw new Error('Invalid Request')
	}
}
