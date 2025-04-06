import React from "react";

const ProfilePicture = () => {
  return (
    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-neon-purple/50 shadow-lg shadow-neon-purple/20 mx-auto mb-8">
      <img 
        src="/images/WhatsApp Image 2025-04-01 at 10.44.50_9475c6b9.jpg" 
        alt="Tanmay Jadhav" 
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback if image fails to load
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1180&q=80";
        }}
      />
    </div>
  );
};

export default ProfilePicture;
