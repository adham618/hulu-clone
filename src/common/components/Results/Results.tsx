import { Key } from "react"
import FlipMove from "react-flip-move"
import Thumbnail from "./Thumbnail"

interface ResultsProps {
  results: any[]
}


const Results = ({ results }: ResultsProps) => {
  //if (!results) return 'no data';
  //if (!Array.isArray(results)) return 'results are not array'
  return (
    <FlipMove className="px-5 my-10 sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  )
}
export default Results