import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Table from "./Table";

export default function ProductsByCategory({ products }) {
    let location = useLocation();
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(
            products.filter(
                (product) =>
                    `${product.category.category}` ===
                    location.pathname.split("/")[2]
            )
        );
    }, [products, location]);

    return <Table products={data} />;
}
