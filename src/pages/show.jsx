import ShowBanner from "@/sections/ShowBanner"
import MovieDetails from "@/sections/MovieDetails"
import Seasons from "@/components/Seasons"
import {
  reviewItems,
  showDetailsItems,
  castItems,
} from "@/sections/MovieDetails/Data/showData"

export const metadata = {
  title: "Show - Stranger Things",
}

export default function ShowPage() {
  const { releasedYear, availableLanguages, ratings, gernes, director, music } =
    showDetailsItems

  return (
    <>
      <ShowBanner />
      <MovieDetails
        seasons={<Seasons />}
        castItems={castItems}
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
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
