import {Schema,model} from "mongoose";

const formSchema = new Schema({
    userName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    message : {
        type : String,
        required : true,
    }
},{timestamps:true});

const formModel = model("formModel",formSchema);

export default formModel;