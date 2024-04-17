import Card from "./Card";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Api({ setClickedProduct }) {
  const apiUrl = "https://fakestoreapi.com/products";

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const fetchedData = await response.json();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  function handleClick(item) {
    setClickedProduct(item);
  }

  return (
    <>
      <h1 className="text-center text-white font-mono text-4xl font-bold tracking-widest p-10">
        THE MADRAS KADAI
      </h1>

      <div className="mx-auto max-w-screen-xl mt-4 sm:grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 justify-center">
        {data &&
          data.map((item) => (
            <Link to="/product" key={item.id}>
              <Card
                image={item.image}
                title={item.title}
                price={item.price}
                onClick={() => handleClick(item)}
              />
            </Link>
          ))}
      </div>
    </>
  );
}
Api.propTypes = {
  setClickedProduct: PropTypes.func.isRequired, // Define prop type for setClickedProduct
};
export default Api;
