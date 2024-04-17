import PropTypes from "prop-types";

function Product({ clickedProduct }) {
  return (
    <>
      {clickedProduct && (
        <div className="max-w-screen-lg mx-auto my-8 px-4">
          <h1 className="text-3xl font-semibold mb-4">
            {clickedProduct.title}
          </h1>
          <img
            src={clickedProduct.image}
            alt="product image"
            className=" w-1/4 h-min rounded-2xl"
          />
          <p className="text-lg text-gray-800 mb-2">
            <span className="font-bold">Price:</span> ${clickedProduct.price}
          </p>
          <p className="text-lg text-gray-800 mb-2">
            <span className="font-bold">Category:</span>{" "}
            {clickedProduct.category}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-bold">Description:</span>{" "}
            {clickedProduct.description}
          </p>
        </div>
      )}
    </>
  );
}

Product.propTypes = {
  clickedProduct: PropTypes.object,
};

export default Product;
