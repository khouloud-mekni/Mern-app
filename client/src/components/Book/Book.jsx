import React, { useState , useEffect} from 'react'
import { Item , Dimmer, Loader ,Icon} from 'semantic-ui-react'
import axios from "axios"
import { useParams } from 'react-router'
function Book() {
  const[book,setBook]=useState({})
  const[reviews,setReviews]=useState([])

  const { id } = useParams();
  const userId = localStorage.getItem('id')
  let token=localStorage.getItem("token")
  useEffect(() => {
    axios.get(`/api/user/book/${id}?user=${userId}`,{
      headers: {
        jwt:token
      },
    }).then((res)=>{if (res.data.data)
      {setBook(res.data.data)}})
    .catch((err)=>console.dir(err))
  }
  , [])

  useEffect(() => {
    axios.get(`/api/user/reviews/${id}?user=${userId}`,{
      headers: {
        jwt:token
      },
    }).then((res)=>setReviews(res.data.data))
    .catch((err)=>console.dir(err))
  }
  , [])
  return (
    <div className='border-2 border-green-950 min-h-[600px]'>
    {book? (
    <Item>
    <Item.Image size='large' src={book.bookImg} />

    <Item.Content>
      <Item.Header >{book.title}</Item.Header>
      <Item.Description>
        <p>{book.desc}</p>
        <Item.Meta>
     {book.releaseDate}
     <div>
        <Icon name='star' color='yellow' />
        {book.rate}
      </div>
        </Item.Meta>
      </Item.Description>
    </Item.Content>
  </Item>
  ):(
    <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
  )}
    </div>
  )
}

export default Book
