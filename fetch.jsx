import { useEffect, useState } from "react";

function Apifetch (){
    const [data,currData]= useState(null);
    useEffect(() => {

        const fetchData = async () => {
            let adata= await fetch("https://dummyjson.com/quotes")
            let res = await adata.json();
            currData(res.quotes.slice(0,10));

        };
        fetchData();
    },[]);
    return (
        <div>
            {data?data.map((quote) => (
                <p key={quote.id}>
                    <h4>
                        {quote.id}:{quote.quote}
                    </h4>
                </p>
            ))
        :"working on progres..."}
        </div>
    );
}
export default Apifetch;