
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    // console.error(error);

    const navigate = useNavigate();

    return (
        <div id="error-page" className="text-center mt-5">
            <h1>404</h1>
            <p>Page Not Found!</p>
            <div>
                <p className="fw-bold">Search Valid URL</p>
                <p>or</p>
                <button onClick={() => navigate(-1)} className="btn btn-warning fw-bold">Go To Previous Page</button>
                {/* <i>{error.statusText || error.message}</i> */}
            </div>
        </div>
    );
};

export default ErrorPage;