
import React from 'react';
import ProjectCard from './ProjectCard';
import TestimonialCard from './TestimonialCard';
import { Project } from '../types';
import { Plus } from 'lucide-react';

interface PortfolioProps {
  projects: Project[];
  onAddProject: () => void;
  onUpdateProject: (id: string, url: string) => void;
  onUpdateDescription: (id: string, desc: string) => void;
  onImageClick: (url: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ 
  projects, 
  onAddProject, 
  onUpdateProject, 
  onUpdateDescription,
  onImageClick 
}) => {
  const testimonial = {
    text: "Trabajar con Andrés cambió por completo la forma en que nuestra marca se comunica visualmente. Su ojo para el detalle y la integración de IA es de otro nivel.",
    author: "Sofía Martínez",
    role: "Directora Creativa @ StudioV"
  };

  return (
    <div className="max-w-4xl mx-auto py-24 px-12 md:px-20 lg:px-24">
      {projects.map((project, index) => (
        <React.Fragment key={project.id}>
          {/* Insert testimonial after the second project */}
          {index === 2 && (
            <div className="mb-20">
              <TestimonialCard testimonial={testimonial} />
            </div>
          )}
          
          <div className="mb-20">
            <ProjectCard 
              project={project} 
              onUpdateImage={(url) => onUpdateProject(project.id, url)}
              onUpdateDescription={(desc) => onUpdateDescription(project.id, desc)}
              onImageClick={() => onImageClick(project.imageUrl)}
            />
          </div>
        </React.Fragment>
      ))}

      {/* Add Project Action */}
      <button 
        onClick={onAddProject}
        className="w-full group relative flex flex-col items-center justify-center h-[400px] border-2 border-dashed border-gray-200 rounded-[2rem] bg-gray-50/30 hover:bg-gray-50 transition-all hover:border-gray-300"
      >
        <div className="p-4 bg-white rounded-full shadow-sm border border-gray-100 mb-4 transition-transform group-hover:scale-110">
          <Plus className="w-6 h-6 text-black" />
        </div>
        <span className="text-sm font-semibold text-gray-500">Añadir Proyecto</span>
      </button>
      
      {/* Spacer for bottom */}
      <div className="h-40" />
    </div>
  );
};

export default Portfolio;
