import React from 'react'
import {Link} from 'react-router-dom'
const BlogPost = (props) => {
    const {id, title, body } = props.data;

    return (
        <div>
            <div className="results col-md-12">
              <div className="box col-md-12" key={id}>
               <div className="image">
                   <img src="" alt="" />
               </div>
               <p className="title"><Link to={`/blogpostinfo/${id}`}>{title}</Link></p>
               <p className="body">{body}</p> 
           </div>
            </div>
        </div>
    )
}

export default BlogPost
