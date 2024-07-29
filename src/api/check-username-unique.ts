import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import { usernamevalidation } from "@/schemas/SignUpSchema";
import {z} from "zod"


const UsernameQuerySchema = z.object({
    username:usernamevalidation,
});

export async function GET(request:Request){
    await dbConnect()
    try {
        const
        
    } catch (error) {
        
    }
}