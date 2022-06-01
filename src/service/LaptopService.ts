import httpCommon from "../http-common";
import Laptop from "../model/Laptop";

class LaptopService {
    findAll(){
        return httpCommon.get<Array<Laptop>>('/laptops');
    }
    findById(id: string){
        return httpCommon.get<Laptop>(`/laptops/${id}`);
    }
    create(laptop: Laptop){
        return httpCommon.post<Laptop>('/laptops',laptop);
    }
    update(laptop: Laptop, id: string){
        return httpCommon.put<Laptop> (`/laptops/${id}`, laptop)
    }
    delete(id: string){
        return httpCommon.delete<Laptop>(`/phones/${id}`)
    }
}

export default new LaptopService();