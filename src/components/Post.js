import React, {Component} from "react";
import {connect} from 'react-redux'

class Post extends Component{
    handleClick=()=>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }
    render(){
        console.log(this.props)
        const post=this.props.post ? (
            <div className='my-5 container'>
                <h4 className="text-danger my-2">{this.props.post.title}</h4>
                <p className="text-success">{this.props.post.body}</p>
                <button onClick={this.handleClick} type="button" class="btn btn-success">Delete Post</button>
            </div>
        ):(
            <div>Loading Post... </div>
        )
        return(
            <div>
                {post}
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    let id=ownProps.match.params.post_id
    console.log(id)
    return{
        post: state.posts.find(post=>post.id===id)
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        deletePost: (id)=>{dispatch({type: 'DELETE_POST' ,id:id})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Post);