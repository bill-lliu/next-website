// dynamic page for viewing individual experiences under portfolio

import { useRouter } from "next/router";
import Head from "next/head";

interface Exp {
    id: string;
    type: string;
    image: string;
    description: string;
}

export default function Experience({Exp}: {Exp: Exp}) {
    
    const router = useRouter();
    const { id } = router.query;

    return (<>
    
        <Head>
            <title>{Exp.id}</title>
        </Head>

        <h1>The {id} Experience</h1>
        <img src={Exp.image} />
        
    </>);

}

// to tell NEXT.js to pre-render pages
export async function getStaticProps({params}: {params: Exp}) {

    const req = await fetch(`https://localhost:3000/portfolio/${params.id}.json`);
    const data = await req.json();

    return {
        props: { Exp: data }
    };

}

// to tell NEXT.js which dynamic pages to render (providing ids from local .json's)
export async function getStaticPaths() {

    const req = await fetch(`https://localhost:3000/portfolio/index.tsx`);
    const data = await req.json();

    // map values to array of objects 
    const paths = data.map((Exp: Exp) => {
        return { params: {id: Exp}}
    });

    return {
        paths,
        fallback: false
    };

}

// server side rendering for rendering on every request instead of at build time
// export async function getServerSideProps({params}: {params: Exp}) {

//     const req = await fetch(`https://localhost:3000/portfolio/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props: { Exp: data }
//     };

// }