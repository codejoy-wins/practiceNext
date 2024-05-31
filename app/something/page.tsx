import MagicImage from "@/components/MagicImage";
import Link from "next/link";

export default function Page(){
    return(
        <>
        <h1 className="">Nothing in the world belongs to me</h1>
        <MagicImage url="https://www.maxjann.com" src="/bh.png" alt=""/>
        <MagicImage src="/layla4.jpeg" alt=""/>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/sQRsVN2EFBU?si=h4UZW7z3JbEhECqW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        < Link href={'/datareader' } > Data </Link >
        <div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
/>
<div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-red border-l-transparent border-r-transparent"
/>
        </>
        
    )
}