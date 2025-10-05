function convertToCelsius(Fahrenheit) {
  return (Fahrenheit - 32)* 5 / 9;
}


function describeTemperature(Fahrenheit) {
  const celcius = convertToCelsius(Fahrenheit);

  let description;

  if (celcius < 0){
    description = "very cold"
  }
  else if (celcius < 20){
    description = "cold"
  }
  else if (celcius < 30){
    description = "warm"
  }
  else if (celcius < 40){
    description = "hot"
  }
  else if (celcius >= 40){
    description = "very hot"
  }
  
  return `${Fahrenheit} is equal to ${celcius} in Celcius and is ${description}`

}


const Fahrenheit = prompt("Enter temperature in Fahrenheit");
const description = describeTemperature(Fahrenheit);
alert(description);

