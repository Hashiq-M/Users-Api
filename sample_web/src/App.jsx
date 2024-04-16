import { useState, useEffect } from "react";
function App() {
  const apiUrl = "https://fakestoreapi.com/products"; //apicall

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const fetchedData = await response.json();
      setData(fetchedData);
    };

    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-center text-white font-mono text-4xl font-bold tracking-widest p-10">
        THE MADRAS KADAI
      </h1>
      <div className="sm:mt-4 sm:grid grid-cols-1 sm:grid-cols-3">
        {data &&
          data.map((item) => (
            <div
              className="bg-white rounded-2xl pt-4  m-10  justify-center overflow-hidden"
              key={item.id}
            >
              <img className=" mx-auto pt-4 size-2/5" src={item.image} />
              <div className="pt-14 pl-6 pr-6">
                <hr />
                <br />
                <p className="font-bold">{item.title}</p>
                <p className="font-bold text-orange-400">&#36; {item.price}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
