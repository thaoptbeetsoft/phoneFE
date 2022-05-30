import { Link } from "react-router-dom";

function Sidebar() {
    return <div>
        <Link className="Link" to='/add'>Add Phone</Link>
        <Link className="Link"to='/update'>Update Phone</Link>
        <Link className="Link" to='/Delete'>Delete Phone</Link>
        <Link className="Link" to='/list'>List Phone</Link>
    </div>;
}

export default Sidebar;