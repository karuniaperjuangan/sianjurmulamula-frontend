import Slider from "react-slick";
import AOS from "aos";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArtikelKatalogModel } from "../../models/models";
import axios from "axios";


const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    initialSlide: 0,
    
  };


const wp_url = "https://sianjur-mulamula.com/wordpress/graphql"
const query = `query getPostsBudaya {
  posts(where: {categoryId: 4}) {
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

  export default function DaftarArtikelBoho(){

    const [posts, setPosts] = useState<ArtikelKatalogModel[]>([])
    const [loading, setLoading] = useState(true)

    AOS.init();
    AOS.refresh();
    
    useEffect(() => {
      async function getPosts() {
        const response = await axios.post(wp_url, { query })
        setPosts(response.data.data.posts.edges)
        setLoading(false)
      }
      getPosts()
    }, [])
    
    return(
      
        <div className='w-screen'>
          {!loading&&
          <div className=" my-auto md:min-h-screen bg-white p-[5%]">
        <h1 className=' h-1/5 text-3xl sm:text-6xl smm-title mx-auto font-made-sunflower text-smm-red stroke-white hover:scale-110 transition-all'
        data-aos="fade-down"
        data-aos-duration="1000"
        >Artikel Selengkapnya</h1>
        <div className="my-8 max-w-4xl mx-auto">
          <Slider {...sliderSettings}>
            {posts.map((item, _) => {
                return(
                    <Link to={`/artikel/${item.node.databaseId}`} target="_blank" rel="noopener noreferrer" className="px-4 flex relative hover:scale-105 transition-all">
              <img className="rounded-2xl w-full cursor-pointer brightness-50 aspect-[3] object-cover" src={item.node.featuredImage.node.link} alt="rectangle"></img>
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 m-auto text-center align-middle items-center text-xl md:text-3xl text-white font-made-sunflower">{item.node.title}</p>
            </Link>
                )
            })}
          </Slider>
        </div>
        </div>
        }
      </div>
    )
}