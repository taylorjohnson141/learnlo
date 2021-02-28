import { object } from "prop-types"

export const getWord = async (word) =>{
  let response = await fetch(`https://www.dictionaryapi.com/api/v3/references/spanish/json/${word}?key=${process.env.REACT_APP_API_KEY}`)
  let definition = await response.json()
  if(typeof definition[0] !== "object"){
    return "Sorry we can't find that word"
  }
  let lang = definition[0].meta.lang
  console.log(lang)
  let nextCal  = definition[0].def[0].sseq[0][0][1].dt[0][1]
  let pipeIndex = nextCal.indexOf('|')
  let endCurlyIndex;
  for(let i = pipeIndex; i<nextCal.length; i++){
    if(nextCal.charAt(i) === '}'){
      endCurlyIndex = i
      break
    }
  }
  let nextQueryWord = nextCal.slice(pipeIndex+1,endCurlyIndex)
  console.log(nextQueryWord)
  let secondResponse = await fetch(`https://www.dictionaryapi.com/api/v3/references/spanish/json/${nextQueryWord}?key=${process.env.REACT_APP_API_KEY}`)
  let secondDefinition = await secondResponse.json()
  console.log(secondDefinition)
  if(typeof secondDefinition[0] !== "object" || Array.isArray(secondDefinition[0])){
    return "Sorry we can't find that word"
  }
  let secondLang = secondDefinition[0]
  if(secondDefinition[0].meta.lang === lang  ){
    return "Sorry we can't find that word"
  }
  let words = {
    [lang] : definition[0],
    [secondLang] : secondDefinition[0]
  }
return words
}