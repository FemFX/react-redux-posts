import React from 'react';
import {connect} from 'react-redux'
import Post from './Post';

const Posts = ({ posts }) => {
  if (!posts.length) {
    return <p className="text-center">Постов пока нет</p>;
  }
  return posts.map((post) => <Post key={post.id} post={post} />);
};
const mapStateToProps = (state) => {
  console.log(state)
  return {
    posts : state.posts.posts
  }
}
export default connect(mapStateToProps)(Posts)