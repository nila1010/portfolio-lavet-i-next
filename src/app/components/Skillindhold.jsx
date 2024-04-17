import React from "react";

function Skillindhold({ logo, alt, logo2, alt2, title, tekst }) {
  return (
    <div className="outline p-4 min-h-[300px]">
      <div className="flex gap-4 mb-2">
        <img src={logo} alt={alt} className="w-12 h-12" />
        {logo2 && <img src={logo2} alt={alt2} className="w-12 h-12" />}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="font-thin">{tekst}</p>
    </div>
  );
}

export default Skillindhold;
