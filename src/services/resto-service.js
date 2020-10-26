import Axios from "axios"

export default class RestoService{
    getMenuItems = async ()=>{
        const res = await Axios.get('https://react-calc-88c85.firebaseio.com/menu.json')
        
        return res.data
    }
}