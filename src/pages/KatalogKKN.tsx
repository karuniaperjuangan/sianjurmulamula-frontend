import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArtikelKatalogModel } from "../models/models";
import sanitizeHtml from "sanitize-html";

const wp_url = "https://sianjur-mulamula.com/wordpress/graphql"
const query = `query getPostsBudaya {
  posts(where: {categoryId: 3}) {
    edges {
      node {
        id
        databaseId
        title
        excerpt
        featuredImage {
          node {
            id
            link
          }
        }
      }
    }
  }
}`

export default function KatalogKKN() {

    const [posts, setPosts] = useState<ArtikelKatalogModel[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      async function getPosts() {
        const response = await axios.post(wp_url, { query })
        setPosts(response.data.data.posts.edges)
        setLoading(false)
      }
      getPosts()
    }, [])



    return (
      <>
      <div className="min-h-screen w-screen flex flex-col py-24 bg-white">
      <h1 className="smm-title font-made-sunflower text-3xl md:text-5xl pb-6">Kegiatan KKN-PPM UGM 2023 <br/> Sianjur Mula-Mula</h1>
      <div className="w-full px-6 md:px-[10%] mx-auto">
      <div className=" max-w-4xl mx-auto">
        {
           posts.length >0 || loading? posts.map((item, _) => {
                return(
                    <Link to={`/artikel/${item.node.databaseId}`} className="my-8 md:flex justify-center md:align-middle font-made-sunflower transition-all text-smm-pink text-center hover:scale-105">
                        <img src={item.node.featuredImage.node.link} className="aspect-square object-cover rounded-md w-full mx-auto md:w-44 transition-all"/>
                        <div className="md:my-auto md:ml-6">
                          <h2 className="font-montserrat text-black transition-all text-2xl font-bold text-left">{item.node.title}</h2>
                          <div className=" text-black font-montserrat text-justify" dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.node.excerpt,{allowedTags: ['p']}) }} />
                        </div>
                        
                    </Link>
                )
            }) : <h1>Loading...</h1>
        }
      </div>  
      </div>  
      </div>
      </>
    );
  }