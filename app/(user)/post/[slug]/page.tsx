import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react"; 
import { RichTextDocument } from "@/components/RichTextDocument";

type Props = {
  params:{
    slug:string;
  }
}

async function Post({params:{slug}}: Props){
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
      ...,
      author->,
      categories[]->
    }`;

    const post: Post = await client.fetch(query,{slug});
   
  return (
    <article className="px-10 pb-10">
      <section className="space-y-1 border-[#2E5EAA] text-white">
        <div className="relative mini-h-56 flex flex-col md:flex-row justify-center">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            {post.mainImage && <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />}
          </div>
          <section className="p-5 bg-[#2E5EAA] w-full rounded-lg">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <h1 className="text-4xl font-extrabold">{post.title}</h1>
              
            </div>
            <div className="flex items-center space-x-2">

            </div>
            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mx-auto space-x-2">{post.categories.map((category)=> (
              <p key={category._id} className="bg-[#0C1B33] text-center text-white px-3 py-1 rounded-md text-sm font-semibold mt-4">{category.title}</p>))}</div>
            </div>

          </section>
          
        </div>
          <section className="grid lg:grid-cols-4 lg:grid-rows-2 gap-6">
            <div className="relative rounded-lg col-span-3 row-span-2 justify-center h-80">
                <div className="absolute top-0 h-full w-full">
                  {post.mainImage && <Image
                  className="object-cover object-center mx-auto rounded-lg"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                  />}
                </div>         
            </div>
            
            <div className="flex-row col-span-3 lg:col-span-1">
            <div className="relative flex justify-center h-20 bg-[#2E5EAA] w-full text-white text-center rounded-lg  content-center mb-4">
              
              <div className="absolute top-3 w-[17rem] text-white text-center text-2xl font-bold rounded-lg">{post.author.name}</div>
              <div className="absolute bottom-1 bg-[#fff] w-[17rem]  text-black text-center font-bold rounded-lg">Autor</div>
            </div>

            <div className="relative flex justify-center h-20 bg-[#2E5EAA] w-full text-white text-center rounded-lg content-center">
              <div className="absolute top-3 w-full text-white text-center text-2xl font-bold rounded-lg">{new Date(post._updatedAt).toLocaleDateString("en-US",{day:"numeric", month:"long", year:"numeric"})}</div>
              <div className="absolute bottom-1 bg-[#fff] w-[17rem]  text-black font-bold text-center rounded-lg">Data</div>
            </div>
            </div>

          </section>
          
      </section>

        <PortableText value={post.body} components={RichTextDocument}/>

    </article>
  )
}

export default Post;