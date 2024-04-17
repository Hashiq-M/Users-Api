import PropTypes from "prop-types";
function Card({ image, title, price, onClick }) {
  return (
    <>
      <div
        className="bg-white rounded-2xl p-5 m-10 w-80 h-4/5 cursor-pointer"
        onClick={onClick}
      >
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="mt-4">
          <hr className="border-gray-300" />
          <p className="text-xl font-bold mt-2">{title}</p>
          <p className="text-orange-400 text-lg font-bold">&#36; {price}</p>
        </div>
      </div>
    </>
  );
}
Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Card;
