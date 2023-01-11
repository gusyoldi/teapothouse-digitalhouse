import {Link} from 'react-router-dom'

function LastProductInDb({ lastProduct }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4 ">
                <div className="card-header py-3 text-center">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Último producto ingresado
                    </h5>
                </div>
                <div className="card text-center p-2" style={{width: "18rem", margin: "0 auto"}}>
                        <img
                            className="card-img-top"      
                            src={lastProduct.firstImage}
                            alt={lastProduct.product_description}
                        />
                    <div className="card-body">
                        <p>{lastProduct.product_description}</p>
                        <Link className="btn btn-info" to="/ProductDetail">Detalle del producto</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastProductInDb;
