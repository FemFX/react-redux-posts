import React, { Component } from 'react';
import { createPost } from '../redux/actions';
import { connect } from 'react-redux';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (title) {
      const newPost = {
        id: Date.now().toString(),
        title,
      };
      this.props.createPost(newPost);
    }

    this.setState({
      title: '',
    });
  };
  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок Поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = {
  createPost,
};
export default connect(null, mapDispatchToProps)(PostForm);
