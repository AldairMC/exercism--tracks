// Bob exercise
export const hey = (message) => {
  let aux = message.trim()
  let regExp = /^[A-Z]+$/.test(message.replace(/\W|\d/g, ''))
//   let regExp = aux.toUpperCase() === aux
  
  if(aux === '') return 'Fine. Be that way!'
  if(aux.slice(-1) === '?')
return !regExp? 'Sure.' : 'Calm down, I know what I\'m doing!' 
  if(aux.slice(-1) !== '?' && regExp) return 'Whoa, chill out!'
  return 'Whatever.'
}
