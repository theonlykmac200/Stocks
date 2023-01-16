import { Link} from "react-router-dom"

const Nav =(props) => {
    return (
        <div className="Nav">
            {/* <Link to ="/">
            <div></div>
            </Link> */}
            <Link to="/About">
            <div>About</div>
            </Link>
            <Link to="/stocks">
            <div>Dashboard</div> 
            </Link>
        </div>
    
    )
}
// home is the dashboard component
export default Nav;