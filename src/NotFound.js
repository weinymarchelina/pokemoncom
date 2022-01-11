import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>Sorry!</h1>
      <p>The page cannot be found.</p>
      <Link to="/">Back to the home page</Link>
    </div>
  );
};

export default NotFound;
