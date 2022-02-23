import'./Produit.scss';
import BtnAjoutPanier from './BtnAjoutPanier';

export default function Produit({etatPanier:[panier,setPanier], nom, prix, pid}) {
// let panier = panier;
// let setPanier=setPanier;

// const[panier,setPanier] = etatPanier;

let qte = 0;
if(panier[pid]) {
  qte = panier[pid].qte
;}
console.log("Quantité du produit :0", pid, ":",qte)

function ajouterAuPanier() {
  if(panier[pid]){
    panier[pid].qte++;
  }
  else{
    panier[pid] = {
      prix: prix,
      qte: 1
    };
  }
 
  //Notifier react que le panier a change
  //Il faut cloner l'objet panier pour que React Detecte 
  //setPanier(JSON.parse(JSON.stringify(panier)));
  //let clonePanier = Object.assign({},panier);
  // let clonePanier = {... panier};
  setPanier({...panier});
}
    return (
        <article className="Produit">
          <img src={"images-produits/" + pid + ".webp"} alt="T-shirt cool" />
          <div className="titre">{nom}</div>
          <div className="prix">{prix}</div>
          <BtnAjoutPanier qte={qte} onClick={ajouterAuPanier}/>
        </article>
    );
}