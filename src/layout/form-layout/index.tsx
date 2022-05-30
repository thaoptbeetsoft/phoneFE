import Footer from "../../components/footer";
import Header from "../../components/header";
type Props ={
    children: JSX.Element | JSX.Element[];//gán 2 kiểu dữ liệu
    
}
function Layout(props: Props) {
    return ( 
        <div>
            <Header/>
            <div className="body">
                {props.children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
     );
}

export default Layout;