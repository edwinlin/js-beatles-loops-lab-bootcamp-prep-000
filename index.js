// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArray = []
  for(var i=0; i< musicians.length; i++){
      emptyArray.push(musicians[i].toString() + " plays " + instruments[i].toString())
  }
  return emptyArray
}

function johnLennonFacts(facts){
  var array = []
  for(var i = 0; i< facts.length; i++){
    array.push(facts[i].toString() + "!!!")
  }
  return array
}

function iLoveTheBeatles(number){
  var strings = []
  do{
    empty.push("I love the Beatles!")
  } while(number<15 && number++)
  return strings
}