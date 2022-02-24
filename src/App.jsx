import './App.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedPage from './PiedPage';
import{useEffect, useState} from 'react';

function App() {
  //État React pour gérer un panier d'achats
  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});
//Remarquz que useState retourne un tableau
//Le premier 
  const panier = etatPanier[0];
// const setPanier = etatPanier[1]; // ne dois pas changer directement le panier on peut seulement le changer avec la fonction set Panier
// console.log("L'état panier :",etatPanier);
//   let panier = {
//     prd0003:{
//       nom: "T-Shirt à manches courtes",
//       prix: 13.95,
//       qte: 1
//     },
//     prd0001:{
//       nom: "T-Shirt à manches courtes",
//       prix: 13.95,
//       qte: 2
//     },
//     prd0002:{
//        nom: "T-Shirt à manches courtes",
//        prix: 13.95,
//        qte: 1
//     }
// };

//let compteurClic = 0;

const [compteur,setCompteur] = useState(0);
console.log("Mon panier sous la forme d'une chaine JSON :", JSON.stringify(panier));
// "Persister" (sauvegarder)
//Uttiliser le HOOK useEffect pour executer ce code de facon controlé
useEffect(() => window.localStorage.setItem('panier-4pa',JSON.stringify(panier)), [panier]);

  return (
    <div className="App">
      <Entete panier ={panier}/>
      <ListeProduits etatPanier ={etatPanier}/>
      <div>
        <span>Nombres de clics : <i></i>{compteur}</span>
        <button onClick={()=>{setCompteur(compteur + 1); console.log ('compteur:',compteur);}}>Cliquez-moi++</button>
      </div>
      <PiedPage />
    </div>
  );
}

export default App;
