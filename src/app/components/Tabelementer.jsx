import React from "react";

function Tabelementer({ title, setTabStatus }) {
  return (
    <li onClick={() => setTabStatus((o) => (o = title))} className="outline min-w-fit flex-1 cursor-pointer">
      <p className="px-6 py-2 hover:text-customorange">{title}</p>
    </li>
  );
}

export default Tabelementer;
