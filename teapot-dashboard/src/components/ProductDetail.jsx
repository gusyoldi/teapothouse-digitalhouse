function ProductDetail({lastProduct}) {

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Tips</th>
                  <th>Envío</th>
                </tr>
              </thead>
              <tbody>
                {
                  <tr>
                    <td>{lastProduct?.id}</td>
                    <td>{lastProduct?.product_name}</td>
                    <td>{lastProduct?.product_description}</td>
                    <td>{lastProduct?.relations[0].category}</td>
                    <td>{lastProduct?.price}</td>
                    <td>{lastProduct?.tip}</td>
                    <td>{lastProduct?.relations[1].shipping}</td>
                  </tr>
                }
              </tbody>
            </table>
            <div>
              <img width="300" height="300" src={`${lastProduct.firstImage}`} alt="lastProduct-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
