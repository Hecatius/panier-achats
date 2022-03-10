import'./ListeProduits.scss';
import Produit from'./Produit';
import{useState,useEffect} from 'react';
import { bdFirestore as bd} from './firebase/init'; 
import {collection, getDocs,query,where } from "firebase/firestore"


export default function ListeProduits({etatPanier}) {
  //Variable d'état des produits
  const [produits, setProduits] = useState([]);

  useEffect(function() {
    // Obtenir tous les documents de la collection 'magasin-produits'
    getDocs(query(collection(bd,'Maggen-produits'),where('prix','<=',40))).then(
      qs => setProduits(qs.docs.map(doc => ({id: doc.id, ...doc.data()})))
    );
},[]);

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
        {produits.map(p => <Produit etatPanier=  {etatPanier} key={p.id} nom={p.nom} prix={p.prix} pid={p.id}/>)}
      
    </div>
  </section>
  );
}