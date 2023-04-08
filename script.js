const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ea505839db5afa486a9ef093ddbf391c&page=1';
const IMG_PATH='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI='https://api.themoviedb.org/3/search/movie?&api_key=ea505839db5afa486a9ef093ddbf391c&query=';

try{
const main=document.getElementById("section");
const form=document.getElementById("form");
const search=document.getElementById("query");

returnMovies(APILINK);
function returnMovies(url){
    fetch(url).then(res=> res.json()).then(function(data){
        console.log(data.results);
        data.results.forEach(ele=>{
            const div_card=document.createElement('div');
            div_card.setAttribute('class','card');
            // const div_flipcard=document.createElement('div');
            // div_flipcard.setAttribute('class','flipcard');
            // div_flipcard.setAttribute('z-index','1');
            const div_row=document.createElement('div');
            div_row.setAttribute('class','row');
            const div_column=document.createElement('div');
            div_column.setAttribute('class','column');
            const image=document.createElement('img');
            image.setAttribute('class','thumbnail');
            image.setAttribute('id','image');
            const title=document.createElement('h3');
            title.setAttribute('id','title');


            const center=document.createElement('center');
            title.innerHTML=`${ele.title}`
            image.src=IMG_PATH+ele.poster_path;
            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.appendChild(div_row);
            // main.appendChild(div_flipcard);

            
            

        })

    })
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML=''
    const searchItem=search.value;
    if(searchItem){
        returnMovies(SEARCHAPI+searchItem);
        search.value="";
    }

})
}catch(err){
    console.log(err.message);
}
