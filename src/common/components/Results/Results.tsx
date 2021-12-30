import Thumbnail from "./Thumbnail"
interface ResultsProps {
  results: any[]
}


const Results = ({ results }: ResultsProps) => {
  //if (!results) return 'no data';
  //if (!Array.isArray(results)) return 'results are not array'
  return (
    <div className="px-5 my-10 sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
}
export default Results