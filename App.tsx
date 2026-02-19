
import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';
import { Project } from './types';
import { X } from 'lucide-react';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: '1', imageUrl: 'https://picsum.photos/seed/p1/1200/800', description: 'Exploración visual sobre la arquitectura brutalista y su relación con el entorno natural en climas templados.' },
    { id: '2', imageUrl: 'https://picsum.photos/seed/p2/1200/800', description: 'Campaña editorial capturada con iluminación cinematográfica, enfocada en la textura de materiales sostenibles y vanguardia.' },
    { id: '3', imageUrl: 'https://picsum.photos/seed/p3/1200/800', description: 'Intervención digital utilizando redes neuronales para reinterpretar el movimiento del agua en espacios urbanos congestionados.' },
  ]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const addProject = useCallback(() => {
    const newProject: Project = {
      id: Math.random().toString(36).substr(2, 9),
      imageUrl: 'https://picsum.photos/seed/new/1200/800',
      description: 'Nueva descripción del proyecto. Escribe aquí los detalles técnicos y conceptuales de tu obra creativa.'
    };
    setProjects(prev => [...prev, newProject]);
  }, []);

  const updateProjectImage = useCallback((id: string, newUrl: string) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, imageUrl: newUrl } : p));
  }, []);

  const updateProjectDescription = useCallback((id: string, newDesc: string) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, description: newDesc } : p));
  }, []);

  return (
    <main className="flex h-screen w-full overflow-hidden bg-white">
      {/* Left Column (Sidebar) - 40% */}
      <div className="w-[40%] h-full border-r border-gray-100 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Right Column (Main Content) - 60% */}
      <div className="flex-1 h-full overflow-y-auto bg-white">
        <Portfolio 
          projects={projects} 
          onAddProject={addProject} 
          onUpdateProject={updateProjectImage} 
          onUpdateDescription={updateProjectDescription}
          onImageClick={setSelectedImage}
        />
      </div>

      {/* Fullscreen Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-white flex items-center justify-center p-8 md:p-20 transition-all animate-in fade-in zoom-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 p-4 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain shadow-2xl rounded-sm" 
            alt="Full screen view" 
          />
        </div>
      )}
    </main>
  );
};

export default App;
