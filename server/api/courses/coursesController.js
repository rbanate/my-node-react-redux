
const CourseRepository = require('../../repositories/courseRepository');

class CoursesController {
  constructor(router){
    router.get('/', this.getCourses.bind(this));
    router.post('/', this.addCourse.bind(this));
  }

  getCourses(req, res){
    
    const courses = CourseRepository.getAll()
                    .then(data => {
                      res.json(data);
                    }).catch( ()=>{
                      res.send('No courses found');
                    });

  }

  addCourse(req, res){
    const course = CourseRepository.addNew(req.body)
                  .then(data =>{
                      res.json(data);
                  }).catch(()=> {
                    res.send('Error in saving');
                  });

  }
}

module.exports = CoursesController;
