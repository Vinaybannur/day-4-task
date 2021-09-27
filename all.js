const getBlogs = ()=> {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json";
    xhr.onload = () => {
        const blogs = xhr.response;
        for (let blog of blogs){
            console.log(blog.name,blog.region,blog.subregion,blog.population);
        }

    };
    xhr.send();
};
getBlogs();
