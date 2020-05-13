import axios, { AxiosRequestConfig } from "axios";
import { IResponse, IUniversity, IUniversityDetail } from "./interfaces";
import * as functions from "firebase-functions";
// const cheerio = require('cheerio');
import * as cheerio from "cheerio";
import { unireqopt, requestOptions } from "./apiRequestConf";

const check = (somesth: any) => (somesth ? somesth : "Unable to parse");

export async function getUniversities(pageCount: number) {
  const universities: IResponse[] = [];
  for (let i = 1; i < pageCount+1; i++) {
    const el = await getPage(i);
    universities.push(el);
  }
  const universitiesDOM = universities
    .map((el) => el.snippets["snippet--contentSnippet"])
    .join("");
  return parseUniversities(universitiesDOM);
}

function parseUniversities(uniDom: string) {
  const parsedUni: IUniversity[] = [];
  const $ = cheerio.load(uniDom);
  $(".instituions-item").each(async (_, item) => {
    const link = $("a", item).attr("href");
    if (link) {
      const detail: IUniversityDetail = await getUniversity(link);
      const stars = $(".icon-star-1.active", item);
      const inst: IUniversity = {
        name: check($("h3", item).text()),
        stars: stars && stars.length ? stars.length : 1,
        country: check($(".country-name", item).text()),
        city: check($("h4", item).text()),
        detail: detail,
      };
      parsedUni.push(inst);
    }
  });
  return parsedUni;
}

async function getUniversity(link: string) {
  const pagedom = await handleRequest('https://xchange.utb.cz'+link, unireqopt);
  const $ = cheerio.load(pagedom);
  const detail: IUniversityDetail = {
    link: check($("a.nowrap").attr('href')),
    speciality: check($(".text.column.large-12.small-12.text-trunacate.margin-bottom")
      .text()
      .split('•')
      .map(item => item.trim()).filter(item => item.length > 4)),
  };
  return detail;
}

async function getPage(page: number) {
  const url = `https://xchange.utb.cz/studijni-pobyty?institution-page=${page}&rows=1`;
  return await handleRequest(url, requestOptions);
}

const handleRequest = async (url: string, options: AxiosRequestConfig) => {
  let item;
  try {
    const { data } = await axios(url, options);
    item = data;
  } catch (e) {
    throw new functions.https.HttpsError(e.code, e);
  }
  return item;
};
