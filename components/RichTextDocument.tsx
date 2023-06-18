import Link from "next/link";
import urlFor from "@/lib/urlFor";
import Image from "next/image";

export const RichTextDocument = {
  types:{
    image:({value}: any)=>{
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Imagem da postagem"
            fill
            />
        </div>
      );
    },
  },
  list:{
    bullet:({children}:any)=>(
      <ul className="ml-10 py-5 list-disc spacey-5">{children}</ul>
    ),
    number: ({children}: any) =>(
      <ol className="mt-lg list-decimal">{children}</ol>
    )
  },
  block: {
    h1:({children}: any)=>(
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2:({children}: any)=>(
      <h1 className="text-4xl py-10 font-bold">{children}</h1>
    ),
    h3:({children}: any)=>(
      <h1 className="text-3xl py-10 font-bold">{children}</h1>
    ),
    h4:({children}: any)=>(
      <h1 className="text-2xl py-10 font-bold">{children}</h1>
    ),
    blockquote: ({children}: any)=> (
      <blockquote className="border-l-[#2E5EAA] border-l-3 pl-5 py-5 my-5">{children}</blockquote>
    )
  },
  marks:{
    link: ({children, value}:any)=>{
      const rel = !value.href.startsWith("/")?"noreferrer noopener":undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#2E5EAA] hover:decoration-[#0C1B33]">{children}</Link>
      );
      },
  },
}