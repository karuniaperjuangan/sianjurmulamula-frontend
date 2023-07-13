import { useParams } from "react-router-dom";
import { placeholderWordpressContent } from "../components/placeholder_html";
import sanitizeHtml from "sanitize-html";

export default function Artikel() {
    const { id } = useParams();
    return (
        <div className="min-h-screen w-screen bg-smm-black py-14">
        <h1 className="smm-title font-made-sunflower py-4">{id}</h1>
        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(placeholderWordpressContent,
        {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
            allowedAttributes: {
                ...sanitizeHtml.defaults.allowedAttributes,
                'img': ['src', 'alt']
            }
        })        
        }} className="px-10 max-w-4xl text-justify mx-auto" />
        </div>
    );
    }