import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../../actions/post';

const PostItem = ({
  auth,
  addLike,
  removeLike,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => (
  <div class="post bg-white p-1 my-1">
    <div>
      <a href="profile.html">
        <img class="round-img" src={avatar} alt="user" />
        <h4>{name}</h4>
      </a>
    </div>
    <div>
      <p class="my-1">{text}</p>
      <p class="post-date">
        Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
      </p>
      <button type="button" class="btn btn-light" onClick={() => addLike(_id)}>
        <i class="fa fa-thumbs-up"></i>{' '}
        {likes.length > 0 && <span>{likes.length}</span>}
      </button>
      <button
        type="button"
        class="btn btn-light"
        onClick={() => removeLike(_id)}
      >
        <i class="fa fa-thumbs-down"></i>
      </button>
      <Link href={`/post/${_id}`} class="btn btn-primary">
        Discussion
        {comments.length > 0 && (
          <span class="comment-count">{comments.length}</span>
        )}
      </Link>
      {!auth.loading && auth.user._id === user && (
        <button type="button" class="btn btn-danger">
          <i class="fa fa-times"></i>
        </button>
      )}
    </div>
  </div>
);

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
