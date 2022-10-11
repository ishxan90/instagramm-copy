import './Comments.css'

const Comments = ({username, body, dispatch, deleteComment, commentId, postId}) => {

    function delComment() {
        dispatch (deleteComment({commentId, postId}))
    }

    return (
        <div  className='description'>
            <b>{username}</b> 
            <span className="newComment">{body}</span>
            <span className="deleteComment" 
                onClick={delComment}>
                <b>X</b>
            </span>
        </div>
    )
}

export default Comments