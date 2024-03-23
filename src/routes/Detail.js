import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            {
                loading
                    ? <h2>Loading...</h2>
                    : (
                        <div>
                            <h2>{movie.title}</h2>
                            <span>{movie.id}</span>
                        </div>
                    )
            }
        </div>
    );
}

export default Detail;