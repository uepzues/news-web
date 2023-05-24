import PropTypes from "prop-types";

function NewsElement(props) {
  return (
    <>
      <div className="first1 bg-slate-50 p-3  m-4 rounded-xl shadow-lg w-3/12 -sm:w-full ">
        <a href={`${props.url}`}>
          <div>
            <img src={`${props.imgUrl}`} alt="news image" />
            <h2 className="border-b-2 border-b-gray-400 pb-2 font-semibold text-lg line leading-5 my-3">
              {props.title}
            </h2>
          </div>

          <p className="text-slate-500">{props.desc}</p>
        </a>
      </div>
    </>
  );
}

NewsElement.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NewsElement;
