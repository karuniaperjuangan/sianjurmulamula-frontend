import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArtikelKatalogModel } from "../models/models";
import sanitizeHtml from "sanitize-html";
import HtmlHeader from "../components/HtmlHead";
import PlaceholderImage from "../assets/PlaceholderImage.jpg";
import { Pagination, Stack } from "@mui/material";

const wp_url = "https://sianjur-mulamula.com/wordpress/graphql"
const query = `query getPostsBudaya {
  posts(where: {categoryId: 7}) {
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
    const [showPosts, setShowPosts] = useState<ArtikelKatalogModel[]>([])
    const [loading, setLoading] = useState(true)
    const [pageCount, setPageCount] = useState(1)
    useEffect(() => {
      async function getPosts() {
        const response = await axios.post(wp_url, { query })
        let all_posts = response.data.data.posts.edges
        //every page contain 3 post
        setPageCount(Math.ceil(all_posts.length/3))
        setPosts(all_posts)
        setShowPosts(all_posts.slice(0,3))
        setLoading(false)
      }
      getPosts()
    }, [])



    return (
      <>
      <HtmlHeader title="Kegiatan KKN-PPM UGM 2023" description="Kegiatan KKN-PPM UGM 2023 Sianjur Mula-Mula adalah kegiatan pengabdian yang dilaksanakan oleh tim KKN Universitas Gadjah Mada di Desa Boho dan Aek Sipitudai, Kecamatan Sianjur Mula-Mula pada tanggal 24 Juni-11 Agustus 2023."/>
      <div className="min-h-screen w-screen flex flex-col py-24 bg-white">
      <h1 className="smm-title font-made-sunflower text-3xl md:text-5xl pb-6">Kegiatan KKN-PPM UGM 2023 <br/> Sianjur Mula-Mula</h1>
      <div className="w-full px-6 md:px-[10%] mx-auto">
      <div className=" max-w-4xl mx-auto">
        {
           posts.length >0 && !loading? 
           <>
           {showPosts.map((item, _) => {
                return(
                    <Link to={`/artikel/${item.node.databaseId}`} className="my-8 md:flex justify-center md:align-middle font-made-sunflower transition-all text-smm-pink text-center hover:scale-105">
                        <img src={item.node.featuredImage?.node?.link ?? PlaceholderImage} className="aspect-square object-cover rounded-md w-full mx-auto md:w-44 transition-all"/>
                        <div className="md:my-auto md:ml-6">
                          <h2 className="font-montserrat text-black transition-all text-2xl font-bold text-left">{item.node.title}</h2>
                          <div className=" text-black font-montserrat text-justify" dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.node.excerpt,{allowedTags: ['p']}) }} />
                        </div>
                        
                    </Link>
                )
            })}
            <Stack alignItems={'center'}>
            <Pagination count={pageCount} variant="outlined" shape="circular" className="mx-auto" onChange={(e,page)=>{
              setShowPosts(posts.slice((page-1)*3,page*3))
            }}/>
            </Stack>
            </>
            : 
            <div className="w-full">
            <h1 className=" text-black align-middle items-center font-made-sunflower text-center my-auto">Loading...</h1>
            </div>
        }
      </div>  
      </div>  
      </div>
      </>
    );
  }