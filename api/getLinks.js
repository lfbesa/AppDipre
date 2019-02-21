import { Platform } from "react-native";
LINKS='https://app-dipre-dashboard.herokuapp.com/api/v1/links'
TOKEN = 'AppDipre'
const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ff7cb49265dc4191b9d0f7a7ffcb768a";



export default async function getLinks() {
  

  var header = {
    method: "GET",
    body: "",
    headers: {
      TOKEN: TOKEN
    }
  };
  //let result = await fetch(url).then(response => response.json());
  //return result.articles;

  return Promise.race([
    new Promise((resolve, reject) => {
      fetch(LINKS, header)
        .then(newsList => {
          return newsList
            .json()
            .then(newsListJson => {
              return resolve(newsListJson);
            })
            .catch(e => {
              // console.log(e);
              return reject();
            });
        })
        .catch(() => {
          // console.log("CATCH");
          return reject();
        });
    }),
    new Promise((_, reject) =>
      setTimeout(() => {
        return reject(new Error("Timeout"));
      }, 9000)
    )
  ]);
}
