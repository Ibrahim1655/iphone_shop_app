import iphoneData from "../datas/listeIphones";

export function Iphones() {
  return (
    <section className="grid grid-cols-4 p-10 gap-y-4">
      {iphoneData.map((iphone) => (
        <div className="card bg-base-100 w-96 shadow-md">
          <figure>
            <img src={iphone.image} alt="Shoes" className="<-48 h-48" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{iphone.modele}</h2>
            <p>{iphone.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
