import React from 'react';
import { projects } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className='max-container mt-20 px-6 lg:px-12'>
      <h1 className='head-text text-center mb-8'>
        My <span className='text-gray_gradient font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-4 text-slate-300 max-w-4xl mx-auto'>
        <p className='text-justify'>
          Over the years, I've worked on a range of projects that have shaped my skills and showcase my growth as a developer. Many of these are open-source, so if something catches your eye, dive in! I'm confident you'll find something that resonates with you, and I welcome your contributions and feedback.
        </p>
      </div>

      {/* Projects Timeline Section */}
      <div className='mt-16'>
        <h3 className='text-center font-semibold text-gray_gradient mb-6'>Project Timeline</h3>
        <div className='flex flex-wrap gap-8 justify-center'>
          {projects.map((project) => (
            <div key={project.name} className='w-full sm:w-96 lg:w-80'>
              <div className='relative group'>
                {/* Project Card */}
                <div className='transition-all duration-300 bg-white shadow-lg rounded-xl p-6 hover:scale-105'>
                  <img 
                    src={project.iconUrl} 
                    alt={project.name} 
                    className='w-30 h-30 object-contain mx-auto'
                  />
                  <h4 className='mt-4 text-xl font-semibold text-center'>{project.name}</h4>
                  <p className='mt-2 text-center text-slate-600'>{project.description}</p>
                </div>

                {/* Hover Effect with Project Details */}
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl p-6'>
                  <div className='flex flex-col items-center justify-center h-full text-white'>
                    <h4 className='text-xl font-semibold'>{project.name}</h4>
                    <p className='mt-2 text-center'>{project.detailedDescription}</p>
                    <div className='mt-5 flex gap-4 justify-center'>
                      <a 
                        href={project.link} 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='text-blue-400'
                      >
                        View Live
                      </a>
                      {project.github && (
                        <a 
                          href={project.github} 
                          target='_blank' 
                          rel='noopener noreferrer' 
                          className='text-gray-300'
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className='my-12 border-slate-200' />
    </section>
  );
};

export default Projects;
