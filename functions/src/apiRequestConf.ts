import { AxiosRequestConfig } from "axios";

export const unireqopt: AxiosRequestConfig = {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,cs;q=0.6",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "upgrade-insecure-requests": "1",
      "cookie": "_ga=GA1.2.346357717.1583843884; _fbp=fb.1.1588256000072.238969421; _gid=GA1.2.1478861873.1589101885"
    },
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    "mode": "cors"
  } as any;
  
  export const requestOptions: AxiosRequestConfig = {
    headers: {
      accept: "*/*",
      "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,cs;q=0.6",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      cookie:
        "_ga=GA1.2.346357717.1583843884; _fbp=fb.1.1588256000072.238969421; _gid=GA1.2.1478861873.1589101885",
    },
    referrerPolicy: "no-referrer-when-downgrade",
    body: null,
    method: "GET",
    mode: "cors",
  } as any;