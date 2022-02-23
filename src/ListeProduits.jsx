import'./ListeProduits.scss';
import Produit from'./Produit';
import lesProduits from './data/produits.json';
import { useThemeProps } from '@mui/material';

export default function ListeProduits({etatPanier}) {


  // //Méthode 1 programmation impérative avec une boucle for
  // let composantsProduits = [];
  // // Parcourir le tableau les Produits et générer un composant Produit pour chaque élément
  // for (let i = 0; i < lesProduits.length; i++){
  //     composantsProduits.push(<Produit nom={lesProduits[i].nom} prix={lesProduits[i].prix} pid={lesProduits[i].id}/>);

  //méthode 2 fonction map
  
  
    return (
    <section className="ListeProduits">
    <h2>Nos produits</h2>
    <div className="produits">
        {/* {composantsProduits} */}
        {lesProduits.map(p => <Produit etatPanier=  {etatPanier} key={p.id} nom={p.nom} prix={p.prix} pid={p.id}/>)}
      
    </div>
  </section>
  );
}