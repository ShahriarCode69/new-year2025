import "./App.css";

function BlogPoints(props) {
  return (
    <>
      <div className="md:w-[750px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] mx-auto mt-10">
        <h2 className="text-left mx-5 md:mx-10 lg:mx-15 xl:mx-20 font-bold text-2xl sm:text-4xl md:text-5xl lg:w-3/4 mt-16 mb-4 text-emerald-950">
          {props.blogHeader}
        </h2>
        <p className="text-left font-regular text-base mx-5 md:mx-10 lg:mx-15 xl:mx-20 mb-4 max-w-[60ch] md:max-w-[70ch] lg:max-w-[100ch]">
          {props.blogDescription}
        </p>
        <img
          className="mx-auto md:w-[40rem] lg:w-[45rem] mt-4"
          src={props.blogImg}
          alt=""
        />
      </div>
    </>
  );
}

export default BlogPoints;
