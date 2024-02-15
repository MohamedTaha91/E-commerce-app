import Image from "next/image";
import "./ProductCard.css" 



interface ProductCardProps {
    image: string;
    title: string;
    price: number;
    key: string;
}

const ProductCard = (props: ProductCardProps) => {
    return (
        <div className="productCard">
            <h3>{props.title}</h3>
            <Image src={props.image} alt="T-shirt-1" height={250} width={250} />
        </div>
    )
}

export default ProductCard;