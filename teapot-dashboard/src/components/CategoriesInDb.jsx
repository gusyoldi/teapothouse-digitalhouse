import { Link } from "react-router-dom";

function CategoriesInDb({ cbc }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Categorías
                    </h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {cbc.map((e, i) => {
                            return (
                                <div className="col-lg-6 mb-4" key={i}>
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">
                                            <Link to={`/ProductsByCategory/${e}`} className="text-decoration-none text-reset">
                                                {e.toUpperCase()}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesInDb;
