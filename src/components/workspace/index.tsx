import { useState } from "react";


function Demo() {
    const [infor, setInfor] = useState({
        name: "Kim Thị Hải Yến",
        age: 21,
        address: "Hải Đường"
    });
    const handleUpdate = () => {
        
        setInfor({
            ...infor,
            age: infor.age + 1,
            name: "Hải Yến"
        }
        )
    }
    return (
        <div>
            <h1>{infor.name}</h1>
            <h1>{infor.age}</h1>
            <h1>{infor.address}</h1>
            <h1><button onClick={handleUpdate}>Update</button></h1>
            
        </div>
    );
}

export default Demo;