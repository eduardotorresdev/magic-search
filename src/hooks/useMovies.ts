import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'preact/hooks';

interface Movie {
    image: string;
    title: string;
    genres: string[];
    score: number;
}

interface MovieResponse {
    title: string;
    poster_path: string;
    vote_average: number;
}

export const useMovies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function request() {
            if(searchTerm === '') {
                setMovies([]);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);

                const response:AxiosResponse<{
                    page: number,
                    results: MovieResponse[]
                }> = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8f95b906b4ba79c7206d222a84808e9b&language=pt-BR&query=${searchTerm}&page=1&include_adult=false`)

                setMovies(response.data.results.map(movie => ({
                    image: "https://image.tmdb.org/t/p/w92" + movie.poster_path,
                    title: movie.title,
                    score: movie.vote_average,
                    genres: []
                })))
            } catch (e) {
                alert('Ops! Something went wrong!');
            } finally {
                setLoading(false);
            }
        }
        request();
    }, [searchTerm]);

    return {
        loading,
        movies,
        search: setSearchTerm
    }
}
