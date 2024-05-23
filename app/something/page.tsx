import MagicImage from "@/components/MagicImage";
import Link from "next/link";

export default function Page(){
    return(
        <>
        <h1 className="">Nothing in the world belongs to me</h1>
        <MagicImage src="/bh.png" alt=""/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sQRsVN2EFBU?si=h4UZW7z3JbEhECqW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        < Link href={'/datareader' } > Data </Link >
        </>
    )
}