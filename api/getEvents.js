import { Platform } from "react-native";
import config from "../config";
import data from "./demoNewsData";
EVENTS='https://evening-refuge-97533.herokuapp.com/api/v1/events';
TOKEN = 'AppDipre';


export default async function getEvents() {
  if (config.enabledJson) {
    return Promise.race([
      new Promise((resolve, _) => {
        resolve(data);
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 4000)
      )
    ]);
  }

  var header = {
    method: "GET",
    body: "",
    headers: {
      TOKEN: TOKEN
    }
  };
  // fetch('URL_GOES_HERE', { 
  //   method: 'post', 
  //   headers: new Headers({
  //     'Authorization': 'Basic '+btoa('username:password'), 
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }), 
  //   body: 'A=1&B=2'
  // });
  return Promise.race([
    new Promise((resolve, reject) => {
      fetch(EVENTS, header)
        .then(eventList => {
          return eventList
            .json()
            .then(eventListJson => {
              return resolve(eventListJson);
            })
            .catch(e => {
              //console.log("C1", e);
              return reject();
            });
        })
        .catch(() => {
          //console.log("c2", e);
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
