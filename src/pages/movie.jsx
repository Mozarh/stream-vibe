import MovieBanner from "@/sections/MovieBanner"
import MovieDetails from "@/sections/MovieDetails"
import {
  castItems,
  reviewItems,
  movieDetailsItems,
} from "@/sections/MovieDetails/Data/movieData"

export const metadata = {
  title: "Movie - Kantara",
}

export default function MoviePage() {
  const { releasedYear, availableLanguages, ratings, gernes, director, music } =
    movieDetailsItems

  return (
    <>
      <MovieBanner />
      <MovieDetails
        castItems={castItems}
        description="A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."
        reviewItems={reviewItems}
        dateTime={releasedYear}
        languages={availableLanguages}
        ratings={ratings}
        genres={gernes}
        director={director}
        music={music}
      />
    </>
  )
}
