import React from "react";
import PropTypes from "prop-types";

class Post extends React.Component {
  render() {
    return (
      <div className="flex items-center justify-center w-screen z-20 mt-16 pb-9">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-3xl font-bold  text-center mb-10">Latest Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {this.props.posts.map((post, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out flex"
              >
                <div className="w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-auto w-full object-cover object-center rounded-lg"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-800 mb-4">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

Post.defaultProps = {
  posts: [
    {
      title: "post1",
      description:
        "This is the first post beeing published in this website This is the first post beeing published in this website ",
      image: "https://picsum.photos/id/10/400/300",
    },
    {
      title: "post2",
      description: "This is the second post beeing published in this website",
      image: "https://picsum.photos/id/20/400/300",
    },
    {
      title: "post3",
      description: "This is the third post beeing published in this website ",
      image: "https://picsum.photos/id/30/400/300",
    },
    {
      title: "post4",
      description: "This is the fourth post beeing published in this website",
      image: "https://picsum.photos/id/40/400/300",
    },
    {
      title: "post5",
      description: "This is the fifth post beeing published in this website",
      image: "https://picsum.photos/id/50/400/300",
    },
    {
      title: "post6",
      description: "This is the sixth post beeing published in this website",
      image: "https://picsum.photos/id/60/400/300",
    },
  ],
};

export default Post;
