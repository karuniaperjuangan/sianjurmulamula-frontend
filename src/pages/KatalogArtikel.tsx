import { Link } from "react-router-dom";
import BG from '../assets/BG.jpg'
import { useEffect, useState } from "react";
import axios from "axios";

const wp_url = "https://sianjur-mulamula.com/wordpress/graphql"
const query = `query getPostsBudaya {
  posts(where: {categoryId: 3}) {
    edges {
      node {
        id
        databaseId
        title
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

export default function KatalogArtikel() {

    const [posts, setPosts] = useState([])
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
      <h1 className="smm-title font-made-sunflower">Ensiklopedia</h1>
      <div className="w-full p-14 md:p-[10%] mx-auto">
      <h2 className=" text-smm-pink text-4xl font-bold mx-4 py-6">Budaya</h2>
      <div className="md:grid md:grid-cols-4">
        {
           posts.length >0? posts.map((item, index) => {
                return(
                    <Link to={`/artikel/${item.node.databaseId}`} className="text-2x mx-4 my-4 font-made-sunflower text-smm-pink text-center">
                        <img src={item.node.featuredImage.node.link} className="aspect-square object-cover rounded-md w-full transition-all hover:scale-105"/>
                        <h2 className=" py-4 font-montserrat text-black transition-all hover:scale-105 text-2xl font-bold text-left">{item.node.title}</h2>
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