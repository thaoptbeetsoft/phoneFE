import Navbar from "./navbar";
import Sidebar from "./sidebar";
type Props ={
    children: JSX.Element | JSX.Element[];//gán 2 kiểu dữ liệu
}
function DefaultLayout(props: Props) {
    return (
        <div className="app">
            <Navbar/>
            <div className="body">
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
      );
}

export default DefaultLayout;