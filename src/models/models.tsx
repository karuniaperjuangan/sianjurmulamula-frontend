interface ArtikelKatalogModel {
    node: {
        id: string,
        databaseId: number,
        title: string,
        excerpt: string,
        featuredImage: {
            node: {
                id: string,
                link: string
            }
        }
    }
}

interface ArtikelBacaModel{
    id: string,
    title: string,
    content: string,
    excerpt: string,
}

export {type ArtikelKatalogModel, type ArtikelBacaModel}