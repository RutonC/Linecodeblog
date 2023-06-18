import {client} from "./sanity.client"
import imageUrlBuilder from '@sanity/image-url'
import { ImageUrlBuilder } from "sanity";



const builder = imageUrlBuilder(client);



function urlFor(source: any){
  return builder.image(source);
}

export default urlFor;

