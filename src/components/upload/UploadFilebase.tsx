import storage from '../upload/filebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from 'react';

interface IfirstChildProps {
    updateUrlImage: (arg: string) => void,
    product: string,
    urlImage: string
    }

const UploadFilebase: React.FC<IfirstChildProps>=({urlImage,updateUrlImage,product}) =>{

    const [imgUrl, setImgUrl] = useState(urlImage);
    const [progresspercent, setProgresspercent] = useState(0);

    const handleUploadFilebase = (e: any) => {
        
        e.preventDefault();//không cho tạo trang mới

        const file = e.target[0]?.files[0];//lấy file từ input

        if (!file) return;//check xem file có tồn tại không

        const storageRef = ref(storage, `${product}/${file.name}`);//tạo thư mục tên phone rồi lưu tất cả vào đó

        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);//tính % upload được
                setProgresspercent(progress);
            },
            (error) => {
                alert(error);//có lỗi thì thông báo ra lỗi
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((urlFilebase) => {//lấy url từ filebase sau khi upload xong
                    setImgUrl(urlFilebase);
                });
            }
            
        );
    }
    useEffect(() => {
        setImgUrl(urlImage);
        setProgresspercent(0);
    }, [urlImage]);

    useEffect(() => {
        updateUrlImage(imgUrl);
    }, [imgUrl]);
  
    return (
        <div>
            <form onSubmit={handleUploadFilebase} className='form'>
                <input type='file' />
                <button type='submit'>Upload</button>
            </form>
            {
                !imgUrl &&
                    <p>{progresspercent}%</p>
            }
            {
                imgUrl &&
                <img src={imgUrl} alt='Error img'  width="350px"/>
            }
        </div>
    );
}

export default UploadFilebase;