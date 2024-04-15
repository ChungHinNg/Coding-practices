/*tab transition*/
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");
const content5 = document.getElementById("content5");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");


function Open1(){
    content1.style.transform = "translateX(120px)";
    content2.style.transform = "translateX(1000px)";
    content3.style.transform = "translateX(1000px)";
    content4.style.transform = "translateX(1000px)";
    content5.style.transform = "translateX(1000px)";
    content1.style.transitionDelay="0.2s";
    content2.style.transitionDelay="0s";
    content3.style.transitionDelay="0s";
    content4.style.transitionDelay="0s";
    content5.style.transitionDelay="0s";
    btn1.style.color="rgba(37, 37, 236, 0.364)";
    btn2.style.color="black";
    btn3.style.color="black";
    btn4.style.color="black";
    btn5.style.color="black";
    btn1.style.background="#d9e5f9";
    btn2.style.background="";
    btn3.style.background="";
    btn4.style.background="";
    btn5.style.background="";
}

function Open2(){
    content1.style.transform = "translateX(1000px)";
    content2.style.transform = "translateX(150px)";
    content3.style.transform = "translateX(1000px)";
    content4.style.transform = "translateX(1000px)";
    content5.style.transform = "translateX(1000px)";
    content1.style.transitionDelay="0s";
    content2.style.transitionDelay="0.2s";
    content3.style.transitionDelay="0s";
    content4.style.transitionDelay="0s";
    content5.style.transitionDelay="0s";
    btn1.style.color="black";
    btn2.style.color="rgba(37, 37, 236, 0.364)";
    btn3.style.color="black";
    btn4.style.color="black";
    btn5.style.color="black";
    btn1.style.background="";
    btn2.style.background="#d9e5f9";
    btn3.style.background="";
    btn4.style.background="";
    btn5.style.background="";
}
function Open3(){
    content1.style.transform = "translateX(1000px)";
    content2.style.transform = "translateX(1000px)";
    content3.style.transform = "translateX(180px)";
    content4.style.transform = "translateX(1000px)";
    content5.style.transform = "translateX(1000px)";
    content1.style.transitionDelay="0s";
    content2.style.transitionDelay="0s";
    content3.style.transitionDelay="0.2s";
    content4.style.transitionDelay="0s";
    content5.style.transitionDelay="0s";
    btn1.style.color="black";
    btn2.style.color="black";
    btn3.style.color="rgba(37, 37, 236, 0.364)";
    btn4.style.color="black";
    btn5.style.color="black";
    btn1.style.background="";
    btn2.style.background="";
    btn3.style.background="#d9e5f9";
    btn4.style.background="";
    btn5.style.background="";

}
function Open4(){
    content1.style.transform = "translateX(1000px)";
    content2.style.transform = "translateX(1000px)";
    content3.style.transform = "translateX(1000px)";
    content4.style.transform = "translateX(150px)";
    content5.style.transform = "translateX(1000px)";
    content1.style.transitionDelay="0s";
    content2.style.transitionDelay="0s";
    content3.style.transitionDelay="0s";
    content4.style.transitionDelay="0.2s";
    content5.style.transitionDelay="0s";
    btn1.style.color="black";
    btn2.style.color="black";
    btn3.style.color="black";
    btn4.style.color="rgba(37, 37, 236, 0.364)";
    btn5.style.color="black";
    btn1.style.background="";
    btn2.style.background="";
    btn3.style.background="";
    btn4.style.background="#d9e5f9";
    btn5.style.background="";

}
function Open5(){
    content1.style.transform = "translateX(1000px)";
    content2.style.transform = "translateX(1000px)";
    content3.style.transform = "translateX(1000px)";
    content4.style.transform = "translateX(1000px)";
    content5.style.transform = "translateX(270px)";
    content1.style.transitionDelay="0s";
    content2.style.transitionDelay="0s";
    content3.style.transitionDelay="0s";
    content4.style.transitionDelay="0s";
    content5.style.transitionDelay="0.2s";
    btn1.style.color="black";
    btn2.style.color="black";
    btn3.style.color="black";
    btn4.style.color="black";
    btn5.style.color="rgba(37, 37, 236, 0.364)";
    btn1.style.background="";
    btn2.style.background="";
    btn3.style.background="";
    btn4.style.background="";
    btn5.style.background="#d9e5f9";

}
/*tab transition end*/

/*logo*/
const logo = document.querySelector('.fixed-logo');

logo.addEventListener('mouseenter', () => {
    logo.classList.toggle('move');
});

logo.addEventListener('mouseleave', () => {
    // Do nothing on mouse leave to keep the logo in the moved position
});

/*to do list function*/
const addtest = document.getElementById("inputBox");
const listcontainer = document.getElementById("list-container");

function addlist(){
 if(addtest.value === ""){alert("it is empty")}
    else{
    let li= document.createElement("li")
    li.innerHTML=addtest.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        listcontainer.removeChild(li);
        saveDate();
    };

    li.appendChild(deleteBtn);

    listcontainer.appendChild(li);

    addtest.value="";
    saveDate();
    }

}

function deleteLi(button) {
    const  li = button.parentElement;
    li.parentElement.removeChild(li);
    saveDate();
}

function saveDate(){
    localStorage.setItem("data", listcontainer.innerHTML );
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");}


    function clearData() {
        localStorage.removeItem("data");
    }
    clearData();
/*to do list function end*/


/*Accordion*/



function showAccordionContent(contentId) {
    const content = document.getElementById(contentId);
    const allContents = document.querySelectorAll('.accordionContent');

    
 
    const computedStyle = window.getComputedStyle(content);
    const currentMaxHeight = computedStyle.getPropertyValue('max-height');
    

    if (currentMaxHeight == "300px") {
        content.style.maxHeight = "0px";
    } 
    allContents.forEach(function(item) {
        item.style.maxHeight = null;
});

content.style.maxHeight = "300px"

if (currentMaxHeight === "300px") {        content.style.maxHeight = "0px";
}
    
}





/*Accordion end*/
/*Content3 Carousel*/
document.addEventListener('DOMContentLoaded', function() {
    const pButton = document.getElementById("pB");
    const items = document.querySelectorAll('.item');
    let currentIndex = 0;

    function toggleOpacity() {
        const prevIndex = currentIndex;
        currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
        items[prevIndex].style.opacity = 0;
        items[currentIndex].style.opacity = 1;
    }

    pButton.addEventListener('click', toggleOpacity);
});

document.addEventListener('DOMContentLoaded', function() {
    const nButton = document.getElementById("nB");
    const items = document.querySelectorAll('.item');
    let currentIndex = 0;

    function showNextItem() {
        const prevIndex = currentIndex;
        currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
        items[prevIndex].style.opacity = 0;
        items[currentIndex].style.opacity = 1;
    }

    nButton.addEventListener('click', showNextItem);
});


/*Content3 Carousel end */


/* Weather app*/
const container = document.querySelector(".containerW");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIKey = "79fe0cf4a3e724e5447b03b24b67d899";
  const city = document.querySelector(".search-box input").value;
  const searchInv = document.querySelector("#search-inv");

  if (city === "") {
    return;
  }

  searchInv.value = "Searching ...";

  setTimeout(() => {
    searchInv.value = "";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.cod === "404") {
          container.style.height = "400px";
          weatherBox.style.display = "none";
          weatherDetails.style.display = "none";
          error404.style.display = "block";
          error404.classList.add("fadeIn");
          return;
        }

        error404.style.display = "none";
        error404.classList.remove("fadeIn");

        const image = document.querySelector(".weather-box img");
        const temperature = document.querySelector(".weather-box .temperature");
        const description = document.querySelector(".weather-box .description");
        const humidity = document.querySelector(
          ".weather-details .humidity span"
        );
        const wind = document.querySelector(".weather-details .wind span");

        switch (json.weather[0].main) {
          case "Clear":
            image.src = "pic/sun.png";
            break;

          case "Rain":
            image.src = "pic/rain.png";
            break;

          case "Snow":
            image.src = "pic/snow.png";
            break;

          case "Clouds":
            image.src = "pic/cloud.png";
            break;

          case "Mist":
            image.src = "pic/mist.png";
            break;

          default:
            image.src = "";
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)} KM/h`;

        weatherBox.style.display = "";
        weatherDetails.style.display = "";
        weatherBox.classList.add("fadeIn");
        weatherDetails.classList.add("fadeIn");
        container.style.height = "590px";
      });
  }, 1200);
});
/*Weather app end*/ 