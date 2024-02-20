import Link from "next/link";
import Image from "next/image";
import "./ProductCard.css"
import { useRouter } from "next/navigation";

interface ProductCardProps {
    image: string;
    title: string;
    price: number;
    key: string;
    id: string;
}

const ProductCard = (props: ProductCardProps) => {
    const router = useRouter()
    console.log(props)
    return (
        <div className="productCard" onClick={() => router.push(`/products/${props.id}`)}>
            <h3>{props.title}</h3>
            <Image src={props.image} alt="T-shirt-1" height={250} width={250} />
        </div>
    )
}

export default ProductCard;