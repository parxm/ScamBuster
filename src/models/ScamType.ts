import mongoose,{Document,Schema} from "mongoose";

interface IScamType extends Document{
    name:string;
    description?:string;
    
}

const ScamTypeSchema = new Schema({
    name:{
        type:String,
        required:true
    }
})
const ScamType = mongoose.model<IScamType>('ScamType',ScamTypeSchema)
export default ScamType;