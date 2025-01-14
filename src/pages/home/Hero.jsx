import { useEffect, useState } from "react";
import api from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Link } from "react-router-dom";
import { baseImgUrl } from "../../constants";
import SaveButton from "../../components/savebtn";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  //*Popüler filmler
  useEffect(() => {
    api
      .get("/movie/popular")
      .then((res) => {
        //*Filmler dizisi
        const movies = res.data.results;

        //*Rastgele film tercihi
        const i = Math.floor(Math.random() * movies.length);

        //*Rastgele filmi alıp state aktarma
        setMovie(movies[i]);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <Error info={error} />;

  if (!movie) return <Loader />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:maxh-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-start text-gray-300">{movie.overview} </p>
        <p>
          <span>IMDB</span>
          <span className="text-yellow-400 ms-2 font-semibold">
            {movie.vote_average.toFixed(2)}
          </span>
        </p>
        <div className="flex gap-5">
          <Link
            className="py-2 px-4 bg-red-600 rounded transition hover:bg-red-700"
            to={`/movie/${movie.id}`}
          >
            Filmi İzle
          </Link>
          <button className="px-2 bg-blue-600 rounded transition hover:bg-blue-700">
            <SaveButton movie={movie} />
          </button>
        </div>
      </div>
      <div>
        <h1></h1>
        <img
          className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] my-4 object-contain rounded max-h-[300px]"
          src={baseImgUrl + movie.backdrop_path}
          alt="populer-picture"
        />
      </div>
    </div>
  );
};

export default Hero;
