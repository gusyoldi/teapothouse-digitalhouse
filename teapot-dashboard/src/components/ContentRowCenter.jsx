import LastProductInDb from "./LastProductInDb";
import CategoriesInDb from "./CategoriesInDb";

function ContentRowCenter({ cbc, lastProduct }) {
    return (
        <div className="row">
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb lastProduct={lastProduct} />
            {/*<!-- End content row last product in Data Base -->*/}

            {/*<!-- Categories in DB -->*/}
            <CategoriesInDb cbc={cbc} />
        </div>
    );
}

export default ContentRowCenter;
