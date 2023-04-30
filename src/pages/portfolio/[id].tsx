// dynamic page for viewing individual experiences under portfolio

import { useRouter } from "next/router";

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
    
        <h1>{id} Experience</h1>
        <img src={Exp.image} />
        
    </>)

}

export async function getStaticProps({params}: {params: Exp}) {

    const req = await fetch(`https://localhost:3000/portfolio/${params.id}.json`);
    const data = await req.json();

    return {
        props: { Exp: data }
    }

}