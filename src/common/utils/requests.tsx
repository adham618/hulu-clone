const API_KEY = process.env.API_KEY
export interface IRequest {
  [name: string]: {
    title: string;
    url: string;
  };
}

const data: IRequest = {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchComedyMovies: {
    title: "Comdey",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10740`
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37878`
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
  },
  fetchAnimations: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
  },
  fetchTv: {
    title: "Tv Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
  }
}

export default data
