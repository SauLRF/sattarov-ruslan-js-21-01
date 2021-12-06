
import "./main.scss"
import Pagination from "./pagination/pagination";
import Posts from "./posts/posts";
import Users from "./users/users";

function Main(){
    return(
        <div className="main">
           <div className="main-wrapper">
               <Users/>
               <Posts/>
               <Pagination/>
           </div>
        </div>
    )
}
export default Main;