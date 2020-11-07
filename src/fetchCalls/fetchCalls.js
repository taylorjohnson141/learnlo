export let getWord = async (word) =>{
  let response = await fetch(`https://www.dictionaryapi.com/api/v3/references/spanish/json/${word}?key=${process.env.REACT_APP_API_KEY
}`)
let definition = response.json()
console.log(definition)
return definition
}