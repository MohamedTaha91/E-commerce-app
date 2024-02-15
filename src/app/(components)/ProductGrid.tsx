'use client'
import { ProductType } from "../scripts/mockData";
import ProductCard from "./ProductCard";
interface ProductGridProps {
    data: ProductType[]
}

const ProductGrid = (props: ProductGridProps) => {
    console.log("data", props.data)
    return (
        <div >
            <div className="ProductCardBox">
                {props.data.map((product) => {
                    return (
                    <ProductCard
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        key={product.id}
                    />
                    )
                })}

            </div>
        </div>

    )
}

export default ProductGrid;     