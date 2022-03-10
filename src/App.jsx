import './App.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedPage from './PiedPage';
import{useEffect, useState} from 'react';
import Accueil from './Accueil';
import Histoire from './Histoire';
import {Routes, Route} from 'react-router-dom';
import {authFirebase,authGoogle} from './firebase/init.js'
import {signInWithPopup, onAuthStateChanged} from "firebase/auth";

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

const [util,setUtil] = useState(null)

/*Déclenche le processus d'autentification avec Goggle Auth Provider*/
function connexion(){
  signInWithPopup(authFirebase,authGoogle).then(
    objUtilGoogle => setUtil(objUtilGoogle.user)
  );
}

// Attacher un "observateur" de changement d'état 
useEffect(()=>onAuthStateChanged(authFirebase, user => setUtil(user)), []);


  return (
    <div className="App">
      {
        util ?
      <>
      <Entete util={util} setUtil={setUtil} panier ={panier}/>
      {/* Routes spécifiques à chaque composant */}
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/notre-histoire' element={<Histoire/>}/>
        <Route path='/nos-produits' element={<ListeProduits etatPanier={etatPanier} />}/>
      </Routes>
      <PiedPage />
      </>
      : 
      <button onClick={connexion}>Connexion</button>
      }
    </div>
  );
}

export default App;
