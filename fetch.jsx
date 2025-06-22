import { useState, useEffect } from "react";

function Apifetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let apidata = await fetch("https://dummyjson.com/quotes");
      let res = await apidata.json();
      setData(res.quotes.slice(0, 10));
    };
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        data.map((quote) => (
          <div key={quote.id}>
            <h4>{quote.id}: {quote.quote}</h4>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Apifetch;
