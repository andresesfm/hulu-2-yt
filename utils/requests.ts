const API_KEY = process.env.API_KEY;

export default{
    fetchTrending:{
        title: 'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchAction:{
        title: 'Action',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchComedy:{
        title: 'Comedy',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchHorror:{
        title: 'Horror',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title: 'Top Rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchMistery:{
        title: 'Mistery',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchVWestern:{
        title: 'Western',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    }
}