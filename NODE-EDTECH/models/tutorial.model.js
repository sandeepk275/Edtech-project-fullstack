module.exports = (mongoose) => {
    const Tutorial = mongoose.model('tutorial',
        mongoose.Schema({
            title: { type: String , require:true},
            description:  String ,
            published: Boolean,
            skills:  [{type:String},] ,
            chapters: { type: [{ type: String },] , require:true, trim:true },
            priceInRupees: { type: String, default: 5000, min: 0, max: 30000, trim: true },
            priceAfterDiscount: { type: Number, min: 0, max: 30000 , trim: true },
            category: String,
            imageURL: { type: String, default: "https://ik.imagekit.io/upgrad1/marketing-platform-assets/meta-images/home.jpg" },
            videoURL: { type: String, default: "https://www.youtube.com/watch?v=MTdpHs6HWwM" },
            notesURL: { type: String, default: "https://www.mongodb.com/mern-stack", },
            duration: { type: Number, default: 60, min: 0, max: 1200 },
            popularity: { type: Number, default: 4.0, },
            author: String,
        }, { timestamps: true })
    );
    return Tutorial;
}