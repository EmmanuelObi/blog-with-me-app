import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import Loading from './Loading'
import {Link} from 'react-router-dom'
const BlogPostInfo = (props) => {
    const {id} = useParams();
    const {data, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return (
        (loading) ? <Loading /> :
            (data) &&
                <div className="blogPost-info">
              <p className="title">{data.title}</p>
              <div className="body">
                  {data.body}
              </div>
              <div className='buttons'>
              <button><Link to="/">Go back</Link></button>
                <button onClick={props.deletePost(id)}><Link to='/'> Delete Blog Post</Link></button>
              </div>
        </div>
    )
}

export default BlogPostInfo
