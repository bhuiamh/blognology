const fetchBlogs = async () => {
  const res = await fetch("http://localhost:3000/blog.json");
  return await res.json();
};
const Home = async () => {
  const blogs = await fetchBlogs();
  // console.log(blogs);
  return (
    <main className="">
      <div>
        <p className="text-center pt-24">OUR STORIES</p>
        <hr className="w-36 mx-auto mt-6" />
      </div>
      <div>
        {blogs.map(
          ({ id, blogHeader, publishedDate, blogger, blogContent }) => (
            <div key={id}>
              <h1 className="text-4xl">{blogHeader}</h1>
              <p>Published Date: {publishedDate}</p>
              <p>{blogContent}</p>
              <div className="py-16">
                <button className="border mr-6 text-red-600 bg-white w-44 h-10">
                  READ ON
                </button>
                <button className="bg-red-600 border w-44 h-10 text-white mr-6">
                  READ LATER
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </main>
  );
};
export default Home;
