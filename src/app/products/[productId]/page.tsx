'use client'
import data from "@/app/scripts/mockData"
import Image from "next/image"
import { useRouter } from "next/navigation"

const page = (props: any) => {
    console.log('params', props.params)

    const selectedProduct = data.find((product) => product.id === props.params.productId);
    console.log(selectedProduct)
    return (
        <div>
            {selectedProduct ? (
                <>
                    <h1>Product Details</h1>
                    <h3>{selectedProduct.title}</h3>
                    <Image src={selectedProduct.image} alt={selectedProduct.title} height={250} width={250} />
                    <p>Price: ${selectedProduct.price}</p>
                </>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
}
export default page;