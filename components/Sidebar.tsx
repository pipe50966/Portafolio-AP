
import React, { useState, useRef } from 'react';
import { Video, Camera, Cpu, Edit3, Linkedin, Instagram, Mail, Upload } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string>('https://picsum.photos/seed/andres/400/400');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfilePic(url);
    }
  };

  const skills = [
    { icon: <Video className="w-5 h-5 text-black" />, label: 'Video' },
    { icon: <Camera className="w-5 h-5 text-black" />, label: 'Fotografía' },
    { icon: <Cpu className="w-5 h-5 text-black" />, label: 'Generación con IA' },
    { icon: <Edit3 className="w-5 h-5 text-black" />, label: 'Edición Fotográfica' },
  ];

  return (
    <aside className="h-full flex flex-col justify-between p-12 md:p-16 lg:p-20 overflow-y-auto">
      {/* Header Section */}
      <div className="space-y-8">
        <div className="flex flex-col space-y-6">
          {/* Profile Photo Wrapper - Increased to 120px (w-30 equivalent) */}
          <div 
            className="relative group w-[120px] h-[120px] cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="w-full h-full rounded-full overflow-hidden border border-gray-100 bg-gray-50">
              <img 
                src={profilePic} 
                alt="Andrés Pacífico" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleProfilePicChange} 
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">Andrés Pacífico</h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-medium text-green-700 uppercase tracking-wider">
                Disponible para trabajar en tu próximo proyecto
              </span>
            </div>
          </div>
        </div>

        {/* Body Section */}
        <div className="space-y-10">
          <h2 className="text-6xl md:text-7xl font-bold leading-[0.95] tracking-tighter text-black">
            Creando el futuro desde la imagen.
          </h2>
          
          <p className="text-lg text-gray-500 leading-relaxed max-w-sm font-light">
            Especializado en la intersección del video de alta gama, la inteligencia artificial generativa y la fotografía editorial.
          </p>

          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">En esto soy muy bueno</p>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium">{skill.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-3 pt-4">
            <a 
              href="mailto:hola@andrespacifico.com" 
              className="inline-flex items-center justify-center h-14 px-8 bg-black text-white rounded-xl font-semibold transition-all hover:bg-gray-900 active:scale-95"
            >
              Iniciar Proyecto
            </a>
            <a 
              href="https://wa.me/yourphonenumber" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 border border-gray-200 text-black rounded-xl font-semibold transition-all hover:bg-gray-50 active:scale-95"
            >
              Chateemos
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="pt-12">
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-black transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
