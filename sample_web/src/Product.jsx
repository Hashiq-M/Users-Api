import PropTypes from "prop-types";

function Product({ clickedProduct }) {
  return (
    <div className="bg-blue-900 text-white ">
      {clickedProduct && (
        <div className="max-w-screen-lg mx-auto h-screen text-center font-mono">
          <h1 className="text-3xl pt-6 pb-8 font-bold mb-4 ">
            {clickedProduct.title}
          </h1>
          <img
            src={clickedProduct.image}
            alt="product image"
            className=" size-72 rounded-2xl mb-4 mx-auto"
          />
          <p className="text-lg  mb-2 mx-auto">
            <span className="font-bold text-xl">Price : $</span>
            {clickedProduct.price}
          </p>
          <p className="text-lg mb-2 mx-auto">
            <span className="font-bold text-xl">Category : </span>
            {clickedProduct.category}
          </p>
          <p className="text-lg  mb-2 mx-auto">
            <span className="font-bold text-xl">Description : </span>
            {clickedProduct.description}
          </p>
        </div>
      )}
    </div>
  );
}

Product.propTypes = {
  clickedProduct: PropTypes.object,
};

export default Product;
