import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      <h1>Error</h1>
      <p>The route you specified is not found <Link to="/">Go back to Home Page</Link></p>
    </div>
  )
}

export default ErrorPage