'use client'
import { useEffect, useState } from "react";

const API_key = "27893043a68163b5d21d621ed4f8ba26";

interface Movie {
    id: number;
    original_title: string;
}

const Movie = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=1`);
                const data = await result.json();

                const fetchedMovies: Movie[] = data.results;
                setMovies(fetchedMovies);
            } catch (error) {
                console.log('에러 떴으니까 다시 해봅시다ㅠ');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div key={movie.id}>{movie.original_title}</div>
            ))}
        </div>
    );
};

export default Movie;