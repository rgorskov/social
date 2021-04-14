import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './MyPosts.module.css';
import Post from './Post/Post';

let NewPostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

NewPostForm = reduxForm({ form: 'newPostForm' })(NewPostForm);

const MyPosts = ({ posts, addPost }) => {
    const onAddPostHandler = ({ newPostText }) => {
        addPost(newPostText);
    };

    return (
        <div>
            <h1>My posts</h1>
            <NewPostForm onSubmit={onAddPostHandler} />
            <div>
                {posts.map((p, i) => (
                    <Post
                        id={p.id}
                        message={p.message}
                        likesCount={p.likesCount}
                        key={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyPosts;
