import React from "react";

function Tabelementer({ title, setTabStatus, activetab }) {
  return (
    <li onClick={() => setTabStatus((o) => (o = title))} className="outline min-w-[185px] flex-1 cursor-pointer">
      <p style={activetab === title ? { color: "white", backgroundColor: "#f8bb84" } : { color: "" }} className="font-semibold px-6 py-2 hover:text-customorange">
        {title}
      </p>
    </li>
  );
}

export default Tabelementer;
