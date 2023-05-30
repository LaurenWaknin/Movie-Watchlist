import React, {useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import { ResultCard } from './ResultCard'

export const Add = () => {
  const [searchParam, setSearchParam] = useSearchParams() 
  const [query, setQuery] = useState(searchParam.get('query'))
  const [results, setResults] = useState([])

  const onChange = (e) =>{
    e.preventDefault()
    setQuery(e.target.value)
  }

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=c910f430a7e8a49f638af8df6d0622cf&query=${query}`)
  .then((res)=>res.json())
  .then(data => {
    if(!data.errors){
      setResults(data.results)
    }else{
      setResults([])
    }
  })


  return (
    <div className='add-page'>
        <div className='container'>
          <div className='add-content'>
            <div className='input-wrapper'>
              <input type='text'
              placeholder='Search for a movie'
              value={query}
              onChange={onChange}
              />
            </div>
            {results.length > 0 && (
              <ul className='results'>
                {results.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie}/>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
    </div>
  )
}
