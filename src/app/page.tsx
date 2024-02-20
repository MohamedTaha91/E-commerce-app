'use client'
import Image from "next/image";
import styles from "./page.module.css";
import data from "@/app/scripts/mockData"
import ProductGrid from "@/app/(components)/ProductGrid"

export default function Home(props: any) {
    console.log('props', props)
    return (
        <>
            <h1>Home Page</h1>
            <ProductGrid data={data} />
        </>
    );
}