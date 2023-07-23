import { useNavigate, useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArtikelBacaModel } from "../models/models";
import HtmlHeader from "../components/HtmlHead";

export default function Artikel() {
  const navigate = useNavigate();
    const { id } = useParams();

    const wp_url = "https://sianjur-mulamula.com/wordpress/graphql"
    const query = `query getPost {
        post(id: "${id}", idType: DATABASE_ID) {
          id
          title
          content
          excerpt
        }
      }`

      const [post, setPost] = useState<ArtikelBacaModel>()
  
      useEffect(() => {
        async function getPosts() {
          const response = await axios.post(wp_url, { query })
          if (!response.data.data.post) navigate('/404');
          setPost(response.data.data.post)
        }
        getPosts()
      }, [])


    return (
        <div className="min-h-screen w-screen bg-smm-black py-14">
        <HtmlHeader title={post?.title ?? "Artikel"} description={post?.excerpt} />
        {
            post && <div>
                <h1 className="smm-title font-made-sunflower py-4">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content,
        {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
            //allow classes
            allowedAttributes: {
                ...sanitizeHtml.defaults.allowedAttributes,
                'img': ['src', 'alt']
            
            }
        })        
        }} className="px-10 max-w-4xl text-justify mx-auto flex items-center flex-col" />
        </div>   
        }
        {!post && <h1 className="mx-auto my-auto text-center">Loading...</h1>}
        </div>
    );
    }