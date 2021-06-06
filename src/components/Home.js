import React, { Component } from "react"
import {Link} from 'react-router-dom'
import {connect} from "react-redux";


class Home extends Component {
    render() {
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div class="card container my-4" key={post.id}>
                     <Link to={'/'+post.id}><h5 class="card-header bg-warning">{post.title}</h5></Link>
                        <div class="card-body">
                            <p class="card-text">{post.body}</p>    
                        </div>
                    </div>
                )
            })
        ) : (
            <div>No posts yet...</div>
        )
        return (
            <>
             {postList}   
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}
export default connect(mapStateToProps)(Home);