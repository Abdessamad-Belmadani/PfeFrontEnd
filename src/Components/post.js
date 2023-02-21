import React from "react";
import PropTypes from "prop-types";

class Post extends React.Component {
render() {
return (
   
    <div className="flex items-center justify-center w-screen z-20 mt-16 pb-9">
   
                   <div className="w-full md:w-1/2 p-4">
                       <h1 className="text-3xl font-bold mb-4">Latest Posts</h1>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                       {this.props.posts.map((post, index) => (
                           <div
                                       key={index}
                                       className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                                   >
                           <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                           <p className="text-gray-800 mb-4">{post.description}</p>
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
        })
        ),
        };

Post.defaultProps = {
 
    posts: [
        {title:"post1",description:"This is the first post beeing published in this website "},
        {title:"post2",description:"This is the second post beeing published in this website"},
        {title:"post3",description:"This is the third post beeing published in this website "},
        {title:"post4",description:"This is the fourth post beeing published in this website"},
        {title:"post1",description:"This is the first post beeing published in this website "},
        {title:"post2",description:"This is the second post beeing published in this website"},
        {title:"post3",description:"This is the third post beeing published in this website "},
        {title:"post4",description:"This is the fourth post beeing published in this website"}


],
};

export default Post;