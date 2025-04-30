import React from 'react';
import Container from './Container';
import SectionHeader from './SectionHeader';
import Image from 'next/image';

const courses = [
  {
    src: '/images/courses/course-1.png',
    alt: 'Digital Marketing',
    title: 'It Statistics Data Science And Business Analysis',
    details: [
      { icon: '/icons/lesson.svg', alt: 'lesson', text: 'Lesson 10' },
      { icon: '/icons/duration.svg', alt: 'duration', text: '1 Year' },
      { icon: '/icons/student.svg', alt: 'student', text: '20+' },
    ],
    tutor: {
      src: '/images/tutor/tutor-1.png',
      name: 'Mr. Soji',
    },
    btn: 'Learn More',
  },
  {
    src: '/images/courses/course-1.png',
    alt: 'Digital Marketing',
    title: 'It Statistics Data Science And Business Analysis',
    details: [
      { icon: '/icons/lesson.svg', alt: 'lesson', text: 'Lesson 10' },
      { icon: '/icons/duration.svg', alt: 'duration', text: '1 Year' },
      { icon: '/icons/student.svg', alt: 'student', text: '20+' },
    ],
    tutor: {
      src: '/images/tutor/tutor-1.png',
      name: 'Mr. Soji',
    },
    btn: 'Learn More',
  },
  {
    src: '/images/courses/course-1.png',
    alt: 'Digital Marketing',
    title: 'It Statistics Data Science And Business Analysis',
    details: [
      { icon: '/icons/lesson.svg', alt: 'lesson', text: 'Lesson 10' },
      { icon: '/icons/duration.svg', alt: 'duration', text: '1 Year' },
      { icon: '/icons/student.svg', alt: 'student', text: '20+' },
    ],
    tutor: {
      src: '/images/tutor/tutor-1.png',
      name: 'Mr. Soji',
    },
    btn: 'Learn More',
  },
  {
    src: '/images/courses/course-1.png',
    alt: 'Digital Marketing',
    title: 'It Statistics Data Science And Business Analysis',
    details: [
      { icon: '/icons/lesson.svg', alt: 'lesson', text: 'Lesson 10' },
      { icon: '/icons/duration.svg', alt: 'duration', text: '1 Year' },
      { icon: '/icons/student.svg', alt: 'student', text: '20+' },
    ],
    tutor: {
      src: '/images/tutor/tutor-1.png',
      name: 'Mr. Soji',
    },
    btn: 'Learn More',
  },
  {
    src: '/images/courses/course-1.png',
    alt: 'Digital Marketing',
    title: 'It Statistics Data Science And Business Analysis',
    details: [
      { icon: '/icons/lesson.svg', alt: 'lesson', text: 'Lesson 10' },
      { icon: '/icons/duration.svg', alt: 'duration', text: '1 Year' },
      { icon: '/icons/student.svg', alt: 'student', text: '20+' },
    ],
    tutor: {
      src: '/images/tutor/tutor-1.png',
      name: 'Mr. Soji',
    },
    btn: 'Learn More',
  },
  {
    src: '/images/courses/course-1.png',
    alt: 'Digital Marketing',
    title: 'It Statistics Data Science And Business Analysis',
    details: [
      { icon: '/icons/lesson.svg', alt: 'lesson', text: 'Lesson 10' },
      { icon: '/icons/duration.svg', alt: 'duration', text: '1 Year' },
      { icon: '/icons/student.svg', alt: 'student', text: '20+' },
    ],
    tutor: {
      src: '/images/tutor/tutor-1.png',
      name: 'Mr. Soji',
    },
    btn: 'Learn More',
  },
];

const Courses = () => {
  return (
    <div>
      <Container>
        <SectionHeader
          title="Harvard Course Student Can Join With Us."
          caption="Top Popular Course"
          btn="Load More Course"
        />

        <div>
          {courses.map((course) => (
            <div key={course.title} className="p-5">
              <Image
                src={course.src}
                alt={course.alt}
                width={380}
                height={250}
              />

              <h4 className="my-7">{course.title}</h4>

              <div className="flex flex-wrap items-center gap-6">
                {course.details.map((detail) => (
                  <div key={detail.icon} className="flex items-center gap-2">
                    <Image
                      src={detail.icon}
                      alt={detail.alt}
                      width={10}
                      height={14}
                    />
                    <span>{detail.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Courses;
