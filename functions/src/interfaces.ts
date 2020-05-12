export interface IResponse {
    state: string;
    snippets: {
      "snippet--contentSnippet": string;
    };
  }

export interface IUniversity {
    name: string,
    stars: number,
    country: string,
    city: string,
    detail: IUniversityDetail,
} 

export interface IUniversityDetail {
    link: string
    // photoLinks: string[],
    // information: string,
    speciality: string,
}