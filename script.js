let input = document.querySelector("form input");
let form = document.querySelector("form");
let results = document.querySelector(".result");
let showBtn = document.querySelector(".ShowMore");

let page;
const key = "VcR6J3P30H9KD_UBF8usgpLwnaasnS2PperUY-9k-Qo";

const searchImage = async () => {
  const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${input.value}&client_id=${key}&per_page=12`;
  const response = await fetch(URL);
  const data = await response.json();

  data.results.map((value) => {
    const image = document.createElement("IMG");
    image.src = value.urls.small;

    const imgLink = document.createElement("a");
    imgLink.href = value.links.html;
    imgLink.target = "_blank";

    imgLink.appendChild(image);
    results.appendChild(imgLink);

});

showBtn.style.display = "block";
};

form.addEventListener("submit", (e) => {
  results.innerHTML = "";
  e.preventDefault();
  page = 1;
  searchImage();
});

showBtn.addEventListener("click",()=>{
    page++;
    searchImage();
});
