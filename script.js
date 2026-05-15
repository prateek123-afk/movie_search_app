const apiKey = "d35a5773";
const input=document.getElementById("movieInput");
const searchButton=document.getElementById("searchBtn");
const resultDiv=document.getElementById("movieResult");
async function search(){
    const movieTitle=input.value;
    const url=`https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;
    try{
        const response=await fetch(url);
        const data=await response.json();   
        if(data.Response==="True"){
            resultDiv.innerHTML = `<h2>${data.Title}</h2>
            <p>year:${data.Year}</p>
            <p>Genre:${data.Genre}</p>
            <p>Director:${data.Director}</p>
            <p>Actors:${data.Actors}</p>
            <p>Plot:${data.Plot}</p>
            <img src="${data.Poster}" alt="Movie Poster">`;
        } else {
            resultDiv.innerHTML = "Movie not found.";
        }
    } catch (error) {
        console.error("Error fetching movie data:", error);
        resultDiv.innerHTML = "An error occurred while fetching movie data.";
    }
}
searchButton.addEventListener("click", search);