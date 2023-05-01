async function getPortfolio() {
    // TODO: fetch from a database somewhere else
    // const res = await fetch();
    const data = {};
    return {data};
}

export default async function PortfolioPage() {

    const portfolio = await getPortfolio();


    return (
        <div>
            <h1>Portfolio</h1>
        </div>
    );
}