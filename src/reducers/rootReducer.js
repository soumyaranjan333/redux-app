const initState = {
    posts:[
        {id:'1',title:'Have a good day',body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit hic magni blanditiis, aspernatur ipsa unde in ducimus facilis quisquam deleniti.'},
        {id:'2',title:'Have a good night',body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit hic magni blanditiis, aspernatur ipsa unde in ducimus facilis quisquam deleniti.'},
        {id:'3',title:'God bless you',body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit hic magni blanditiis, aspernatur ipsa unde in ducimus facilis quisquam deleniti.'}
    ]
}
const rootReducer = (state=initState,action)=>{
    // console.log(action)
    if(action.type==='DELETE_POST'){
        let newPost=state.posts.filter(post=>{
             return action.id!==post.id
        })
        return{
            ...state,
            posts:newPost
        }
    }
    return state 
}
export default rootReducer;