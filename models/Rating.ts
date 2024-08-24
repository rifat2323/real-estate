import mongoose from 'mongoose'
import ProParty from "@/models/ProParty";
import User from "@/models/User";

interface IComment {
    UserId: mongoose.Schema.Types.ObjectId;
    text: string;
    Rat: number;
}

interface IRating extends mongoose.Document {
    ProductId: mongoose.Schema.Types.ObjectId;
    Comments: IComment[];
    AverageRating: number;
}

const R = new mongoose.Schema<IRating>({
    ProductId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:ProParty
    },
    Comments:[
        {
           UserId:{
               type:mongoose.Schema.Types.ObjectId,
               ref:User

           },
            text:String,
            Rat:{
               type:Number,
                max:5,
                min:0
            }

        }
    ],
    AverageRating:Number

})

R.pre<IRating>("save", function(next)  {
    
    if (this?.Comments && this.Comments.length > 0) {
        // @ts-ignore
        this.AverageRating = this.Comments.reduce((sum:number, comment:IComment) => sum + (comment.Rat || 0), 0) /  this.Comments.length;
    } else {
        // @ts-ignore
        this.AverageRating = 0;
    }
    next();
});

const Rating = mongoose.models.Rating || mongoose.model('Rating',R)

export  default  Rating