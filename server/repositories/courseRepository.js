'use strict'
const mongoose = require('mongoose');
const Course = require('../models/Course'); //mongoose.model('Course');


class CourseRepository{

    async getAll()
    {
        const courses = await Course.find();
        
        return courses;
    }   
    
    async addNew(body){
        const course = await (new Course(body)).save();
        return course;
    }
}

module.exports = new CourseRepository();