package com.coursecrud.springboot.maven.springbootfullstackcrudfullstackwithmaven.courses;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CoursesService {
	private static List<Course> courses = new ArrayList<>();
	private static long idCounter = 0;
	
	static{
		courses.add(new Course(++idCounter, "FrontEnd", "Learn FrontEnd"));
		courses.add(new Course(++idCounter, "BackEnd", "Learn BackEnd"));
		courses.add(new Course(++idCounter, "Database", "Learn Database"));
	}
	
	public List<Course> returnAll(){
		return courses;
	}
	
	public Course findById(long id){
		
		for(Course course : courses){
			if(course.getId()== id){
				return course;
			}
		}
		return null;
	}
	
	
	public Course deleteById(long id){
		Course course = findById(id);
		if(course == null){
			return null;
		}
		if(courses.remove(course))
		{
			return course;
		}
		return null;
		}
		
	}

