'use client'
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const API_key = "27893043a68163b5d21d621ed4f8ba26";

interface Movie {
    id: number;
    original_title: string;
}

const MovieContentWrap = styled('div')`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 80vw;
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
`
const MovieContent = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
`

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
        <MovieContentWrap>
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <MovieContent key={movie.id}>{movie.original_title}</MovieContent>
            ))}
        </MovieContentWrap>
    );
};

export default Movie;