import React ,{Suspense,lazy} from 'react'
// import SearchUsers from '../HOC/UserList'

const SearchUsers = lazy(()=>import('../HOC/UserList'))

function Lazyloading() {
  return (
    <div>
                <h1>Lazy Loading</h1>

        <Suspense fallback={<div>please wait.....</div>}>
           <SearchUsers/> 
        
        </Suspense>
        <div>
            <h1>Home</h1>
        </div>
    </div>
  )
}

export default Lazyloading