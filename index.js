console.log("harshad hello");


const btn = document.getElementById("btn");
btn.addEventListener("click",myjoke)

const ApiKey = "HVn9TvKiSuyH9nx3+YW9+w==qjS0kYLQmVIqEzpe";
const options = {
           mathod: "GET",
           headers: { 'X-Api-Key': ApiKey,
           },
};
const ApiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function myjoke() {

     const res = await fetch(ApiURL, options);
     const data = await res.json();
     console.log(data[0].joke);
        const joke_daata = data[0].joke;
        const joke_show  = document.getElementById("joke");
        joke_show.innerHTML = joke_daata
     
    // console.log("hello");
}