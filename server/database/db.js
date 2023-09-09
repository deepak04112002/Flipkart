import mongoose from "mongoose";


export const Connection= async (USERNAME,PASSWORD) => {
   const URL= `mongodb+srv://${USERNAME}:${PASSWORD}r@ecommerce-web.rewnl2a.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true,useNewUrlParser: true});
        console.log("Database connected sucessfully");
    } catch (error) {
        console.log('Error while connecting with database', error.message);
    }
}
// export default Connection;



