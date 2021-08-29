import Navbar from './Components/Navbar';
import BlogPost from './Components/BlogPost';
import './App.css';
import img from './img/sincerely-media-vcF5y2Edm6A-unsplash.jpg';
import Pagination from './Components/Pagination';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogPostInfo from './Components/BlogPostInfo';
import useFetch from './Hooks/useFetch';
import Loading from './Components/Loading';

function App() {
  const {data: posts, loading} = useFetch("https://jsonplaceholder.typicode.com/posts");
//   for( let i = 0; i < posts.length; i++){ 
    
//     if ( posts[i] === 5) { 

//         arr.splice(i, 1); 
//     }

// }
    const deletePost = (pos) => {
      for(var post in posts) {
        if(post.id === pos ) {
          posts.splice(post, 1);
        }
      }
    }

  return (
    <Router>
      <div className="bg-over" style={{backgroundImage: `url(${img})`}}>
        <Navbar />
        <Switch>
          <Route exact path="/"> 
        { loading ? <Loading /> :
        posts && 
        <div className="container-fluid search">  
          <div className="container search">
            {posts.length > 0 ? (
            <>
              <Pagination
                data={posts}
                RenderComponent={BlogPost}
                title="Posts"
                pageLimit={5}
                dataLimit={3}
              />
            </>
            ) : (
                <h1>No Posts to display</h1>
              )}
          </div>
        </div>
      }
        </Route>
        <Route path='/blogpostinfo/:id'>
              <BlogPostInfo deletePost= {deletePost} />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
