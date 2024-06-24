import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'weather-ln',
  styleUrl: 'weather-ln.css',
})




export class WeatherLn {
 
 

  render() {
 function  widenClose(){
  if(document.getElementById("weather").style.visibility==="unset"){
    document.getElementById("weather").style.visibility="hidden";
  } else {
    document.getElementById("weather").style.visibility="unset";
  }
 }



    const appId: string="9ca27b3b3c74c643772ca6556ca4a8a7";
    let statusSvg : string;

  
    fetch('https://extreme-ip-lookup.com/json/')
  .then( res => res.json())
  .then(response => {
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${response.country}&appid=${appId}`).then(result => result.json())
    .then(data => {
        
      let temp = data.weather[0].description;
      if (temp.includes('snow')){
          statusSvg = 'lightsnow';
      } else if (temp.includes('clear sky')){
          statusSvg = 'clearsky';
      } else if (temp.includes('few clouds')){
          statusSvg = 'fewclouds';
      } else if (temp.includes('scattered clouds')){
          statusSvg = 'scatteredclouds';
      } else if (temp.includes('broken clouds')){
          statusSvg = 'brokenclouds';
      } else if (temp.includes('shower rain')){
          statusSvg = 'showerrain';
      } else if (temp.includes('rain')){
          statusSvg = 'rain';
      } else if (temp.includes('thunderstorm')){
          statusSvg = 'thunderstorm';
      } else if (temp.includes('mist')){
          statusSvg = 'mist';
      }
      
      
      document.getElementById("weather").innerHTML=`<div class=${statusSvg}></div><p>${Math.round(data.main.temp-273.15)} Grad${response.country}</p>`;
    });
  
  })
  const divStyle = {
    visibility: 'hidden'
  };
  return (
    <Host>
      <slot>
        
        <div class="OpenWeather"  onClick={widenClose}>GO</div>


      <div id="weather" style={divStyle}></div>


      </slot>
    </Host>
  );
  }

}
