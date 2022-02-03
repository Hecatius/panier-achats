import'./ListeProduits.css';
export default function ListeProduits() {
    return (
    <section className="produits">
    <h2>Nos produits</h2>
    <div>
        <article>
          <img src="" alt="" />
          <div className="titre">Titre du produit</div>
          <div className="prix">13.95</div>
          <button>Ajouter au panier</button>
        </article>
        
    </div>
  </section>
  );
}