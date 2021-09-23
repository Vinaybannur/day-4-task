const getBlogs = ()=> {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3/all");
    xhr.responseType = "json";
    xhr.onload = () => {
        const blogs = xhr.response;
        for (let blog of blogs){
            console.log(blog.name,blog.region,blog.subregion);
        }

    };
    xhr.send();
};
getBlogs();