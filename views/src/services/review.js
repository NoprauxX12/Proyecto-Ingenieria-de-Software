import axios from "axios";
import { BaseUrl } from "../util/apiUrl";


class ReviewData{
        static async createReview(json, cb){
            try{
                // eslint-disable-next-line
                let result = await axios.post(BaseUrl.serverUsers+"/create-review", json);
                cb({result: true});
            }catch(error){
                cb({result: false});
            }
        }

        static async averageRank(json, cb){
            try{
                let result = await axios.post(BaseUrl.serverUsers+"/average-rank", json);
                cb(result.data);
            }catch(error){
                console.log("Error",error)
                cb({result:false});
            }
        }

        static async selectedReviews(json, cb){
            try{
                let result = await axios.post(BaseUrl.serverUsers+ "/select-reviews", json)
                cb(result.data);
            }catch(error){
                console.log("Error",error)
                cb({result: false});
            }
        }
}


export default ReviewData;