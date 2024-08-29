import mongoose from 'mongoose'
import User from './User'
import ProParty from './ProParty'
const wish = new mongoose.Schema({

userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User,
    required: true
},

ProductId:[{type:mongoose.Schema.Types.ObjectId,ref:ProParty}]


})


const WishList = mongoose.models.WishList || mongoose.model('WishList',wish)
export default WishList