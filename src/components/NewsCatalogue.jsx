// import { useState, useEffect } from "react";
// import NewsElement from "./NewsElement";
// import axios from "axios";
// import SearchBar from "./SearchBar";


// const apiKey = import.meta.env.VITE_API_KEY;

// function NewsCatalogue() {
//   const [articles, setArticles] = useState([]);
//   useEffect(() => {
//     const getArticles = async () => {
//       const res = await axios.get(
//         `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKeya}`
//       );
//       setArticles(res.data.articles);
//       // console.log(res);
//     };
//     getArticles();
//   }, []);
//   return (
//     <>
//       <div className=" flex flex-wrap justify-center">
//         {articles.map((article) => {
//           return (
//             <>
//               <NewsElement
//                 key={article.title}
//                 imgUrl={article.urlToImage}
//                 title={article.title}
//                 desc={article.description}
//                 url={article.url}
//               />
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default NewsCatalogue;
