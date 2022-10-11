import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchUserName, selectSearch } from "../../store/slices/search/searchSlice"


function SearchInput() {
   const dispatch = useDispatch()
   const search = useSelector(selectSearch)
 
  const changeSearch = (e) => {
     dispatch(searchUserName(e.target.value))
  }

  return(
     <input value={search} onChange={changeSearch} type='text' placeholder="Search"/>
     )
}

export default memo(SearchInput)