
function CardPlanes({plan}) {
  const {id,tipoPlan,precio,descripcion} = plan


  return (
    <>
      <article className="planes">
        <h3 className="planes__plan-title">{tipoPlan}</h3>
        <div>
          <ion-icon
            name="mic-circle-outline"
            className="img__planes"
          ></ion-icon>
        </div>
        <div className="planes__content">
          <p className="planes__precio">${precio}</p>
          <ul className="lista__planes">
            {descripcion.map((des, index)=>(
              
              <li key={index} className="planes__descripcion" >{des}</li>
            ))}
           
             
          </ul>
        </div>

        <div className="contain__button">
          <button className="button-verde">SUSCRIBIRSE</button>
        </div>
      </article>
    </>
  );
}

export default CardPlanes;
