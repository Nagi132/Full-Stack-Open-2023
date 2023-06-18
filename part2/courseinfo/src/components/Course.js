import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Header2 = ({ course }) => <h2 style={{ fontSize: "2em" }}>{course}</h2>

const Course = ({ courses }) =>
    <div>
        <Header2 course={"Web development curriculum"} />
        {courses.map(course =>
            <div key={course.id}>
                <Header course={course.name} />
                <Content parts={course.parts} />
                <Total parts={course.parts} />
            </div>
        )}
    </div>

export default Course
