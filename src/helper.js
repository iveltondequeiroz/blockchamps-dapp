import Countries from './json/countries.json'

export function playSound(_sound){
  //console.log("playSound playSound playSound playSound playSound")
  let sound = 'none', audio='none' 
  switch(_sound) {
    case 'champ': 
      sound = "sounds/shortcheer.mp3"
      break;
    case 'goal': 
      sound = "sounds/ball_hit_goal.mp3"
      break;
    case 'whistle': 
      sound = "sounds/whistle.mp3"
      break;
    default:
      sound = "sounds/ball_hit_goal.mp3"
      break;
  }
  audio = new Audio(sound)
  audio.play()
  return true
}  


export function compare(a, b){
  //console.log("comparing")
  const goalA = a.goals;
  const goalB = b.goals;
    
  let comparison = 0;
  if (goalA > goalB) {
    comparison = -1;
  } else if (goalA < goalB) {
    comparison = 1;
  }
  return comparison;
}  

export function daysLeft(){
  var today=new Date(); 
  var cmas=new Date(today.getFullYear(), 11, 25);
  var one_day=1000*60*60*24;
  return(Math.ceil((cmas.getTime()-today.getTime())/(one_day)));
}

export function findCountryName(_country){
  let countryName="none"
  let countries = Countries
  //console.log("HELPER", )
  for(var c=0; c<countries.length; c++ ) {
    if(countries[c].value.toLowerCase() === _country) {
      countryName = countries[c].label;
    }
  }
  return countryName
}

