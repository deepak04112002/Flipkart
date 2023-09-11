import mongoose from "mongoose";


export const Connection= async (USERNAME,PASSWORD) => {
   const URL= `mongodb+srv://user:user@ecommerce-web.rewnl2a.mongodb.net/`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true,useNewUrlParser: true});
        console.log("Database connected sucessfully");
    } catch (error) {
        console.log('Error while connecting with database', error.message);
    }
}
export default Connection;



