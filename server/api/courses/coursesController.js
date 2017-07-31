
class CoursesController {
  constructor(router){
    router.get('/', this. getCourses.bind(this));
  }

  getCourses(req, res){
    res.json({title:'test', author:'ako at ikaw'});
  }
}

module.exports = CoursesController;
