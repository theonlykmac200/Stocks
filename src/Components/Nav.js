import { Link} from "react-router-dom"

const Nav =(props) => {
    return (
        <div className="Nav">
            <Link to ="/">
            <div>Main</div>
            </Link>
            <Link to ="/AllStocks">
            <div>All Stocks</div>
            </Link>
            <Link to="/About">
            <div>About</div>
            </Link>
        </div>
    
    )
}

export default Nav;