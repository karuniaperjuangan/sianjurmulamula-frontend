import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArtikelKatalogModel } from "../models/models";
import HtmlHeader from "../components/HtmlHead";

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

export default function KatalogArtikel() {

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
      <HtmlHeader title="Ensiklopedia Budaya Batak" description="Sianjur Mula-Mula dipercaya sebagai tempat turunnya sang leluhur suku Batak, yaitu Siraja Batak. Oleh karena itu, berbagai adat dan budaya Batak yang unik dan beragam dapat dengan mudah dijumpai di sini. Contoh dari budaya tersebut adalah Rumah Bolon, Gorga, dan Ulos."/>
      <div className="min-h-screen w-screen flex flex-col bg-white">
      <h1 className="smm-title font-made-sunflower mt-24">Ensiklopedia Budaya Batak</h1>
      <p className=" text-black my-6 md:px-[10%] mx-auto font-montserrat">Klik salah satu artikel untuk mengetahui lebih lanjut mengenai budaya khas masyarakat Batak.</p>
      <div className="w-full px-6 md:px-[10%] mx-auto">
      <div className="md:grid md:grid-cols-4">
        {
           posts.length >0 || loading? posts.map((item, _) => {
                return(
                    <Link to={`/artikel/${item.node.databaseId}`} className="text-2x mx-4 my-4 font-made-sunflower transition-all text-smm-pink text-center hover:scale-105">
                        <img src={item.node.featuredImage.node.link} className="aspect-square object-cover rounded-md w-full transition-all"/>
                        <h2 className=" py-4 font-montserrat text-black transition-all text-2xl font-bold text-left">{item.node.title}</h2>
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