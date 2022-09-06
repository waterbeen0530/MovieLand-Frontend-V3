interface directorType {
  peopleNm: string;
}

interface companyType {
  companyCd: string;
  companyNm: string;
}

export interface movieType {
  movieCd: string;
  movieNm: string;
  movieNmEn: string;
  prdtYear: string;
  openDt: string;
  typeNm: string;
  prdtStatNm: string;
  nationAlt: string;
  genreAlt: string;
  repNationNm: string;
  repGenreNm: string;
  directors: directorType[];
  companys: companyType[];
}
