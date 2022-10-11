import { useRef } from "react"
import { useDispatch, useSelector} from "react-redux"
import { addComment } from "../../store/slices/posts/postSlice"
import { selectUsers } from "../../store/slices/users/usersSlice"


const InputComment = ({id}) => {
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const {currentUser} = useSelector(selectUsers)
    
    return (
        <div className='post-input'>
                    <input ref={inputRef} 
                        type='text' 
                        placeholder='Добавить комментарий...'
                    />
                    <button onClick={()=> {
                            dispatch(addComment({
                                id: id,
                                username: currentUser.username,
                                body: inputRef.current.value
                            }))
                            inputRef.current.value = ''
                            }}>Опубликовать
                    </button>
        </div>
    )
}

export default InputComment