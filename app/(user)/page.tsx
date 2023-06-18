import { previewData } from "next/headers"
import { groq } from "next-sanity" 
import { client } from "@/lib/sanity.client";
import PreviewSuspence from "@/components/PreviewSuspence";
import PreviewBlogList from "../../components/PreviewBlogList"
import BlogList from "@/components/BlogList";

 const query = groq`
   *[_type=='post']{
     ...,
     author->,
     categories[]->
   } | order(_createdAt desc )
 `;

export default async function HomePage(){

  if(previewData()){
    return(
      <PreviewSuspence
      fallback={
        <div role="status">
          <p className="text-center text-lg animate-pulse text-[#0C1B33]">Carregando postagens para visualização...</p>
        </div>
      }>
        <PreviewBlogList query={query}/>
      </PreviewSuspence>
    )
  }

 const posts = await client.fetch(query);
  return <BlogList posts={posts}/>;
  
}