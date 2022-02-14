module.exports=(express,app)=>{
    const tutorial=require('../controllers/tutorial.controller');
    const router=express.Router();
    const auth=require('../middleware/auth')


  //create a course  
   router.post("/add", auth, tutorial.create);

//Retrieve all courses
    router.get("/", tutorial.retrieveAllCourses);

 //Retrieve all courses by catogory

   router.get("/categories/:category", tutorial.getCoursesByCatogory);

 //Retrieve all catogories

   router.get("/categories", tutorial.retrieveAllCatogories);


 // Retrieve all published courses
   router.get("/published", auth, tutorial.getAllPublishedCourses)


 //Retrieve courses By Id

   router.get("/:id", auth, tutorial.getCourseById);

 //update courses By Id
  
   router.put("/:id", auth, tutorial.updateCourseById);


 //Delete course By Id

   router.delete("/:id", auth, tutorial.deleteCourseById);

 //Delete all
   router.delete("/:id", auth, tutorial.deleteAllCourses);

  //retrieve all courses by title
   router.get("/title/:title", auth, tutorial.getCoursesByTitle);


 app.use("/api/tutorials", router);

}