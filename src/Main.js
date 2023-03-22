import logo from './../src/logo.png'
import Card from './Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Main() {
    const [characterList, setCharacterList] = useState([])
    const [search, setSearch] = useState('')

    const handlerChange = (e) => {
        setSearch(e.target.value)
    }
    const searchCharacters = async (search) => {
        const resp = await axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`) 
        console.log(resp.data.results);
        setCharacterList(resp.data.results)
    }

    useEffect(() => {
        const savedSearch = localStorage.getItem('search')
        if (savedSearch) {
            setSearch(savedSearch)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('search', search)
        searchCharacters(search)
    }, [search])

     characterList.sort((a, b) => a.name.localeCompare(b.name))

    return (
        <div className="container">
            <img src={logo} alt="Logo" className="logo" />
            <form>
                <button type="button"></button>
                <input
                    type="search"
                    className="search"
                    value={search}
                    placeholder=" Filter by name..."
                    onChange={handlerChange}
                />
            </form>
            <div className="card-wrap">
               {characterList.map((itemCharacter,index) => <Card key={index} item={itemCharacter} />)}
            </div>
        </div>
    )
}
export default Main