import{ useState } from "react";

import {dbPlanes}from '../Data/db.js'
 import CardPlanes from '../components/CardPlanes.jsx'
function Planes() {
  const [data, setData] = useState(dbPlanes)
  return (
    <>
      <section className="layout__planes contenedor">
        <div className="layout__texto-planes">
          <h2 className="planes__title">Planes</h2>
          <p className="planes__subtitle">
            Acá tendrás los diferentes planes disponibles para tener mejoras y
            contenido exclusivo para desarrollar mejor tus ideas{" "}
          </p>
        </div>
        <div className="planes__flex">
            { data.map (plan=>(
                <CardPlanes
                  key={plan.id}
                  plan={plan}
                  
                />
            ))}
        </div>
      </section>
    </>
  );
}

export default Planes;
