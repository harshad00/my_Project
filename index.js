console.log("harshad hello");

const btn = document.getElementById("btn");
const joke_show = document.getElementById("joke");
const ApiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
btn.addEventListener("click", myjoke);
// Api key:
const ApiKey = "HVn9TvKiSuyH9nx3+YW9+w==qjS0kYLQmVIqEzpe";

//
const options = {
  mathod: "GET",
  headers: { "X-Api-Key": ApiKey },
};
// function for jokes show in html page.
async function myjoke() {
  joke_show.innerHTML = "Updating...";
  btn.disabled = true;
  btn.innerHTML = "Loading..."
  const res = await fetch(ApiURL, options);
  const data = await res.json();
  btn.disabled = false;
  btn.innerHTML = "Tell me a joke";
//   console.log(data[0].joke);
  const joke_daata = data[0].joke;
  joke_show.innerHTML = joke_daata;
  // console.log("hello");
}
