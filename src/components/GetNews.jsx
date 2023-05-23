import { useState } from "react";
import searchIcon from "../assets/magnifying-glass-solid.svg";
import NewsElement from "./NewsElement";

const apiKey = import.meta.env.VITE_API_KEY;

function GetNews() {
  const [inputValue, setInputValue] = useState("");
  const [data, setdata] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=${inputValue}&sortBy=popularity&apiKey=${apiKey}`
    // `http://api.mediastack.com/v1/news&?access_key=${apiKeya}&keywords=${inputValue}&countries=gb,us`
    )
      .then((res) => res.json())
      .then((jsonData) => setdata(jsonData.data))
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  return (
    <>
      {/* {console.log(data)} */}
      <header className="flex flex-col items-center mb-10">
        <h1>Header Goes Here</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter topic"
            className="border-black rounded-s-full border-solid border-2 p-2 my-6 text-lg placeholder:text-center text-center "
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={fetchNews}>
            <img
              src={`${searchIcon}`}
              alt="search icon"
              className="hover:bg-black ml-1 w-11 p-2 rounded-e-full bg-white"
            />
          </button>
        </div>
      </header>

      {data && (
        <div className=" flex flex-wrap justify-center">
          {data.map((article) => {
            return (
              <>
                <NewsElement
                  key={article.title}
                //   imgUrl={article.urlToImage}
                imgUrl={article.image}
                  title={article.title}
                  desc={article.description}
                  url={article.url}
                />
              </>
            );
          })}
        </div>
      )}
    </>
  );
}

export default GetNews;
