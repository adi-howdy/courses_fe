package com.coursecrud.springboot.maven.springbootfullstackcrudfullstackwithmaven.courses;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long>{
	
}
