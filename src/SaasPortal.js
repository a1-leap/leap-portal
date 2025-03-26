import React, { useState } from "react";
import {
  Mail,
  Calendar,
  FileText,
  Play,
  Eye,
  Users,
  Globe,
  BadgeHelp,
} from "lucide-react";

const SaasPortal = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const apps = [
    {
      id: "outlook",
      name: "Outlook",
      description: "Email & Calendar",
      url: "https://outlook.office.com/mail/",
      icon: <Mail size={32} />,
      color: "#0078d4",
    },
    {
      id: "monday",
      name: "Monday.com",
      description: "Project Management",
      url: "https://leaplondon.monday.com",
      icon: <Calendar size={32} />,
      color: "#ff3d57",
    },
    {
      id: "sharefile",
      name: "Sharefile",
      description: "File Sharing",
      url: "https://leaplondon.sharefile.com",
      icon: <FileText size={32} />,
      color: "#00a1ff",
    },
    {
      id: "frame",
      name: "Frame.io",
      description: "Video Review",
      url: "https://app.frame.io",
      icon: <Play size={32} />,
      color: "#0057ff",
    },
    {
      id: "preview",
      name: "Preview.works",
      description: "Content Preview",
      url: "https://preview.works",
      icon: <Eye size={32} />,
      color: "#6e49cb",
    },
    {
      id: "home",
      name: "leap.london",
      description: "leap website",
      url: "https://leap.london",
      icon: <Globe size={32} />,
      color: "#268d0c",
    },
    {
      id: "staffology",
      name: "Staffology HR",
      description: "HR Portal",
      url: "https://app.staffologyhr.co.uk/portal/",
      icon: <Users size={32} />,
      color: "#27ae60",
    },
    {
      id: "helpdesk",
      name: "IT Helpdesk Form",
      description: "IT Form",
      url: "https://wkf.ms/3EOc7NG",
      icon: <BadgeHelp size={32} />,
      color: "#FFD1DF",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900">
      {/* Header */}
      <header className="w-full py-6 bg-gray-800 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-white">LEAP London Portal</h1>
          <p className="text-gray-400 mt-1">
            Quick access to your essential tools
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onMouseEnter={() => setHoveredCard(app.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                style={{
                  transform:
                    hoveredCard === app.id ? "translateY(-8px)" : "none",
                  borderTop: `4px solid ${app.color}`,
                }}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: `${app.color}30` }}
                    >
                      <div style={{ color: app.color }}>{app.icon}</div>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">
                        {app.name}
                      </h2>
                      <p className="text-gray-400">{app.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-800 shadow-md mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} LEAP London. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SaasPortal;
