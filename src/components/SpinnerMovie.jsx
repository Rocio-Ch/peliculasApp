// Images
import movieSpinner from "../assets/movieSpinner.gif"

export default function SpinnerMovie() {
  return (
    <div className="w-full flex items-start justify-center mt-[200px]">
      <img
        src={movieSpinner}
        alt="Loading..."
        className="w-[50px] lg:w-[100px]"
      />
    </div>
  )
}
