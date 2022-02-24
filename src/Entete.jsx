import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

export default function Entete({panier}) {

    //Calculer les 5 infos importantes pour obtenir le sommaire du panier (on passe le tableau 
    //(Array) des valeurs dans l'objet 'panier'))
    const {articlesDifferents,articlesTotaux,sousTotal,taxes,total} = calculerInfoPanier(Object.values(panier));
    // const panier = panier;
    console.log("les paniers dans entete: ", panier);
    console.log("les tableau des valeurs paniers dans entete: ", Object.values(panier));
    let totalQte = Object.values(panier).reduce((acc, article) => acc+article.qte, 0);
    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            
            <nav>
            <input type="checkbox" id="cc-sommaire-panier" />
            <div className="sommaire-panier">
                <h3>Sommaire du panier</h3>
                {/* (div.info>span*2)*5 */}
                <div><span>Articles différents</span><span>{articlesDifferents}</span></div>
                <div><span>Articles totaux</span><span>{articlesTotaux}</span></div>
                <div><span>Sous-total</span><span>{taxes}</span></div>
                <div><span>Taxes</span><span>{sousTotal}</span></div>
                <div><span>Total</span><span>{total}</span></div>
            </div>
            <a href="#">
            <Badge badgeContent={totalQte} color="primary">
                <label htmlFor="cc-sommaire-panier"><ShoppingCartSharpIcon/></label>
            </Badge>
            </a>
            <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}

/*
*Calculer l'information du sommaire du panier
*
*@param Array panierAchats Objet panier d'achats
*@returns Object contenant les 5 info requises du panier
*/
function calculerInfoPanier(panierAchats){
    const sousTotal = panierAchats.reduce((acc,courant) => acc +courant.qte * courant.prix,0)
    const taxes = sousTotal * 0.14975;
    return{
        articlesDifferents: panierAchats.length,
        articlesTotaux: panierAchats.reduce((acc,courant) => acc + courant.qte,0),
        sousTotal: sousTotal.toFixed(2),
        taxes: taxes.toFixed(2),
        total: (sousTotal + taxes).toFixed(2)
    }
}