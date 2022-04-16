import React, { useEffect, useState } from 'react'
import Button from './Button'
import PostCard from './PostCard/PostCard'
import './style.css'


export default function GetFetch() {
    const [post, setPost] = useState([])
    const [counter, setCounter] = useState(2)
    const [search, setSearch] = useState('')


    
    async function fetchPost() {
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())

        const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())

        const [posts, photos] = await Promise.all([postsResponse, photosResponse])
        
        const postAndPhotos = posts.map((post, index) => {
            return { ...post, cover: photos[index].url }
        })
        return postAndPhotos
        // setPost(postAndPhotos.slice(0,counter))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function loadPost(){
        const postAndPhotos = await fetchPost()
        const newPosts = postAndPhotos.slice(0,counter)
        setPost(newPosts)
        
        
    }
    useEffect(() => {
        loadPost()
    }, [loadPost])

    function handleAdd(){
        setCounter(counter+1)
    }

    function handleRemove(){
        setCounter(counter-1)
    }

    function handleChange(e){
        const {value} = e.target
        setSearch(value)
    }
    let filterPosts = [...post]
    
    
    filterPosts = !!search ?
    post.filter( posts => {
        return posts.title.toLowerCase().includes(search.toLowerCase())
    }):post
    return (

        <div>
            <h1>Fetch</h1>

            <input onChange={handleChange} type="search" />
            <p >teste: {search}</p>
            <Button text="Adicionar Posts" onClick={handleAdd}/>
            <Button text="Remover Posts" onClick={handleRemove}/>
            <div className='posts'>{filterPosts.map((posts) => {
                return (
                    <PostCard posts={posts} key={posts.id}/> 
                )
            })}</div>
        </div >
    )
}
