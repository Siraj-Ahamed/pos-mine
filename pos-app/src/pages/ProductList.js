import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("/api/products")
            .then((res) => {
                // setProducts(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Error fetching products: ", err);
            });
    }, []);
    // console.log("data: ", products);
    return (
        <>
            <div>Product List</div>
        </>
    );
};

export default ProductList;
