import { useNavigate, useRouteError } from "react-router-dom";
import ErrImg from "../../public/img/err404.jpg";
import "./ErrorPage.css";

const ErrorPage = () => {
    const error = useRouteError();
    // console.error(error);

    const navigate = useNavigate();

    return (
        <div id="error-page" className="text-center mt-5">
            <img className="err-img rounded mb-4" src={ErrImg} alt="" />
            <div>
                <p className="fw-bold">Search Valid URL</p>
                <p>or <br /> Back To</p>
                <button onClick={() => navigate(-1)} className="btn btn-warning fw-bold">&larr; Previous Page</button>
                {/* <i>{error.statusText || error.message}</i> */}
            </div>
        </div>
    );
};

export default ErrorPage;