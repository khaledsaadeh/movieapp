import { useContext, useEffect, useState } from "react";
import {
  CardContainer,
  DateContainer,
  IconContainer,
  ImageContainer,
  InfoContainer,
  LoadMoreButton,
  LoadMoreText,
  MovieCard,
  Summary,
  TitleContainer,
} from "./Card.styles";
import cardbutton from "/home/khaled/Desktop/React/MovieApp/my-app/src/assets/cardbutton.svg";
import fetchMovies from "../Service/service";
import { SortContext } from "../Context/SortContext";
import ProgressCircle from "../ProgressCircle/ProgressCircle";

const Card = () => {
  const [responseData, setResponseData] = useState([]);
  const [page, setPage] = useState(1);
  const sortContext = useContext(SortContext);

  useEffect(() => {
    (async () => {
      const data = await fetchMovies(sortContext.sort, page);
      if (page === 1) setResponseData(data);
      else setResponseData([...responseData, ...data]);
    })();
  }, [sortContext.sort, page]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const progressCircleHandler = (vote) => {
    vote /= 10;
    const percentage = 116 - vote * 116;
    return Math.ceil(percentage);
  };

  return (
    <CardContainer>
      {responseData.map((movie) => (
        <MovieCard>
          <IconContainer>
            <img src={cardbutton}></img>
          </IconContainer>
          <ImageContainer
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />

          <InfoContainer>
            <ProgressCircle
              vote={progressCircleHandler(movie.vote_average)}
              fill={movie.vote_average * 10}
            />
            <TitleContainer>{movie.original_title}</TitleContainer>
            <DateContainer>{movie.release_date}</DateContainer>
            <Summary>{movie.overview}</Summary>
          </InfoContainer>
        </MovieCard>
      ))}
      <LoadMoreButton onClick={onLoadMore}>
        <LoadMoreText>Load More</LoadMoreText>
      </LoadMoreButton>
    </CardContainer>
  );
};

export default Card;
