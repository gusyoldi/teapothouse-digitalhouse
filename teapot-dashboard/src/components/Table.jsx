import TableRow from "./TableRow";

function Table({ products }) {
    return (
        /* <!-- DataTales Example --> */
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
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {products.map((row, i) => {
                                return <TableRow {...row} key={i} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;
