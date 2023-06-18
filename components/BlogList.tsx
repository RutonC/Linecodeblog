import urlFor from "../lib/urlFor";
import Image from "next/image";
import category from "@/schemas/category";
import ClientSideRoute from "./ClientSideRoute";
import { AiOutlineFolderOpen, AiFillFolderOpen } from "react-icons/ai";

type Props ={
  posts:Post[];
};

function BlogList({posts}:Props) {
 
  return (
    <div>
      <hr className="border-[#000] mb-10"/>

      <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-10 gap-y-16 pb-24" >
        {/*POsts*/}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
          <div  className="bg-[#D9D9D9] flex flex-col group cursor-pointer pb-2 rounded-lg ">
           
           
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image 
              className="rounded-lg"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name} fill 
                />
            </div>

            {/* Category */}
            <div className="flex align-middle px-3 py-3 ">
              <AiFillFolderOpen className="" size={24}/> <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2">
                  {post.categories.map((category) =>(
                  <p key={category._id} className="text-black px-3 py-1 rounded-sm text-sm font-semibold uppercase">{category.title}</p>
              ))}
              </div>
            </div>
          
          {/* Title */}
          <div className="px-3 flex-1">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p className="line-clamp-2 text-gray-500">{post.description}</p>
          </div>
          <div className="flex justify-between px-3 py-2">
            <p className="bg-[#2E5EAA] text-center text-white rounded-md px-1 py-1">{post.author.name}</p>
            <p className="bg-[#2E5EAA] text-center text-white rounded-md px-1 py-1">{new Date(post._updatedAt).toLocaleDateString("en-Us",{day:"numeric", month:"long",year:"numeric"})}</p>
          </div>
          </div>




          </ClientSideRoute>
        ))}
      </div>
    </div>
  )
}

export default BlogList