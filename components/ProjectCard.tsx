
import React, { useRef } from 'react';
import { Upload, Maximize2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onUpdateImage: (url: string) => void;
  onUpdateDescription: (desc: string) => void;
  onImageClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  onUpdateImage, 
  onUpdateDescription,
  onImageClick 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpdateImage(url);
    }
  };

  return (
    <div className="bg-[#F3F4F6] rounded-[2rem] p-12 md:p-14 lg:p-16 relative group overflow-hidden flex flex-col space-y-8">
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/*" 
        onChange={handleImageChange} 
      />
      
      {/* Image Container */}
      <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-2xl bg-white cursor-pointer group/img">
        <img 
          src={project.imageUrl} 
          alt="Proyecto" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
          onClick={onImageClick}
        />
        
        {/* Actions Overlay */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
            className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            title="Cambiar imagen"
          >
            <Upload className="w-5 h-5 text-black" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onImageClick(); }}
            className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            title="Ver pantalla completa"
          >
            <Maximize2 className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      {/* Editable Caption */}
      <div className="space-y-3">
        <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Pie de foto editorial</label>
        <textarea
          value={project.description}
          onChange={(e) => onUpdateDescription(e.target.value)}
          placeholder="Escribe una descripción de al menos 150 caracteres para este proyecto creativo..."
          className="w-full bg-transparent border-none p-0 focus:ring-0 text-gray-600 font-light leading-relaxed resize-none min-h-[80px] text-lg placeholder:text-gray-300"
          spellCheck={false}
        />
        <div className="flex justify-end">
          <span className={`text-[10px] font-medium ${project.description.length < 150 ? 'text-orange-400' : 'text-gray-300'}`}>
            {project.description.length} / 150 mín.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
