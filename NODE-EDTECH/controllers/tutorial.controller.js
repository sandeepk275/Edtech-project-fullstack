const db = require('../models/index');
const Tutorial = db.Tutorial;
//>>>>>>>>>>>>.........................>>>>>>>>>>...................>>>>>>>>>>>>>>>>
exports.create = (req, res) => {

    //validate the request
    if (!req.body.title || !req.body.chapters) {
        res.status(400).send({ message: "title and chapters can not be empty" });
        return;
    }

    //create course
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
        skills: req.body.skills.split(","),
        chapters: req.body.chapters.split(","),
        priceInRupees: req.body.priceInRupees,
        priceAfterDiscount: req.body.priceAfterDiscount,
        category: req.body.category,
        imageURL: req.body.imageURL,
        videoURL: req.body.videoURL,
        notesURL: req.body.notesURL,
        duration: req.body.duration,
        popularity: req.body.popularity,
        author: req.body.author,

    })
    //save the course in db
    tutorial.save(tutorial).then((data) => {
        res.status(200).send({
            courses: data,
            message: "courses added successfully"
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "some error occured",
        })
    })
}
//>>>>>>>>>>>>.......................................................>>>>>>>>>>>>>>>>>
exports.retrieveAllCourses = (req, res) => {
    Tutorial.find({}).then((data) => {
        res.status(200).send({
            courses: data,
            message: "retrieve all courses successful"
        })
    }).catch((err) => {
        res.status(404).send({
            message: err.message || "not found",
        })
    })
}
//>>>>>>>>>>>>.......................................................>>>>>>>>>>>>>>>>>
exports.getCoursesByCatogory = (req, res) => {
    const category = req.params.category;
    // const filter = { category: category};
    //serch by using regex it handeled case  sensitive and short word search
    const filter = { category: { $regex: new RegExp(category), $options: "i" } };
    Tutorial.find(filter).then((data) => {
        res.status(200).send({
            course: data,
            message: "fetch data by category successful"
        })
    }).catch((err) => {
        res.status(404).send({
            message: err.message || "not found",
        })
    })
}
//>>>>>>>>>>>>.......................................................>>>>>>>>>>>>>>>>>
exports.retrieveAllCatogories = (req, res) => {
    Tutorial.find({}).select("category").distinct("category").then((data) => {
        res.status(200).send({
            catogory: data,
            message: "fetch data by category successful"
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "some error while fetching the data",
        })
    })
}
//>>>>>>>>>>>>.......................................................>>>>>>>>>>>>>>>>>
exports.getAllPublishedCourses = (req, res) => {
    const filter = { published: true };
    Tutorial.find(filter).sort("-createdAt").then((data) => {
        res.status(200).send({
            publishedCourses: data,
            message: "fetch data by published successful"
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "some error while fetching the data",
        })
    })
}
//>>>>>>>>>>>>.......................................................>>>>>>>>>>>>>>>>>
exports.getCourseById = (req, res) => {
    const id = req.params.id;
    Tutorial.findById(id).then((data) => {
        res.status(200).send({
            CoursesById: data,
            message: "fetch data by Id successful"
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "some error while fetching the course",
        })
    })
}

//>>>>>>>>>>>>.......................................................>>>>>>>>>>>>>>>>>
exports.updateCourseById = (req, res) => {
    const id = req.params.id;

    //validation with id
    if(!id){
        res.status(400).send({
            message: "course Id is required"
        })
        return;
    }
    if (!req.body) {
        res.status(400).send({
            message: "course data is required"
        })
        return;
    }
console.log(req.body.title);
    Tutorial.findOneAndUpdate({ _id: id }, req.body).then((data) => {
        res.status(200).send({
            CoursesById: data,
            message: "fetch data by Id and updated successfully"
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "some error while fetching the course",
        })
    })

}
//>>>>>>>>>>>>.......................................................>>>>>>>>>>>>>>>>>
exports.deleteCourseById = (req, res) => {
    const id =req.params.id;
    Tutorial.findOneAndDelete({_id: id}).then((data)=>{
        res.status(200).send({
            CoursesById: data,
            message: "fetch data by Id and Deleted successfully"
        })
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "some error while deleting the course ",
        })
    })

}
//>>>>>>>>>>>>.......................................................>>>>>>>>>>>>>>>>>
exports.deleteAllCourses = (req, res) => {

    Tutorial.deleteMany({ }).then((data) => {
        res.status(200).send({
            CoursesById: data,
            message: " Deleted successfully"
        })
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "some error while deleting all the course ",
        })
    })
}
//>>>>>>>>>>>>.......................................................>>>>>>>>>>>>>>>>>
exports.getCoursesByTitle = (req, res) => {
    const title = req.params.title;
  
    //serch by using regex it handeled case  sensitive and short word search
    const filter = { title: { $regex: new RegExp(title), $options: "i" } };
    Tutorial.find(filter).then((data) => {
        res.status(200).send({
            course: data,
            message: "fetch data by title successful"
        })
    }).catch((err) => {
        res.status(404).send({
            message: err.message || "not found",
        })
    })
}