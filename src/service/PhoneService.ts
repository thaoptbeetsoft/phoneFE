import httpCommon from "../http-common";
import Phone from "../model/Phone";
class PhoneService{
    findAll(){
        return httpCommon.get<Array<Phone>>("/phones");
    }
    findById(id: string){
        return httpCommon.get<Phone>(`/phones/${id}`);
    }
    create(phone: Phone){
        return httpCommon.post<Phone>('/phones',phone);
    }
    updatePhone(id: number, phone:Phone){
        return httpCommon.put<Phone>(`/phones/${id}`, phone);
    }
    deletePhone(id: string){
        return httpCommon.delete<Phone>(`/phones/${id}`)
    }
}
export default new PhoneService();