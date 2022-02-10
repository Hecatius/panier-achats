import'./Produit.scss';

export default function Produit(props) {
    return (
        <article className="Produit">
          <img src={"images-produits/" + props.pid + ".webp"} alt="T-shirt cool" />
          <div className="titre">{props.nom}</div>
          <div className="prix">{props.prix}</div>
          
        </article>
    );
}