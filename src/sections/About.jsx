import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences, skills } from '../constants'; 

const About = () => {
  return (
    <section id="about" className='max-container mt-20 px-6 lg:px-12'>
      <h1 className='head-text text-center mb-8'>
        <span className='text-gray_gradient font-semibold drop-shadow'>Overview</span>
      </h1>
      <div className='mt-5 flex flex-col gap-4 text-white max-w-4xl mx-auto'>
        <p className='leading-relaxed text-justify'>
          I'm a skilled software developer with experience in Python and JavaScript, and expertise in frameworks like React, Node.js, and Django. 
          I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. 
          Let's work together to bring your ideas to life!        
        </p>
      </div>

      {/* Skills Section */}
      <div className='mt-16'>
        <h3 className='font-semibold text-gray_gradient text-center'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12 justify-center'>
          {skills.map((skill) => (
            <div key={skill.name} className='w-20 h-20 flex justify-center items-center'>
              <div className='rounded-xl shadow-lg bg-white p-4'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-16 h-16 object-contain'
                />
                <p className='text-center text-white mt-2'>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div>
        <h2 className='font-semibold text-gray_gradient text-center mt-14'>Work Experience</h2>
        <div className='mt-6 flex flex-col gap-4 text-white max-w-4xl mx-auto'>
          <p className='leading-relaxed text-justify'>
            Throughout my career, I've collaborated with diverse companies, enhancing my skills and working alongside talented individuals. Here's a quick overview: 
          </p>
        </div>
        <div className='mt-12'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'> 
                    <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-gray-600 font-medium' style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-gray-700 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
