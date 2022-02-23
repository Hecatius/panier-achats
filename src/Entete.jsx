import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

export default function Entete({panier}) {
    // const panier = panier;
    console.log("les paniers dans entete: ", panier);
    console.log("les tableau des valeurs paniers dans entete: ", Object.values(panier));
    let totalQte = Object.values(panier).reduce((acc, article) => acc+article.qte, 0);
    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <nav>
            <a href="#">
            <Badge badgeContent={totalQte} color="primary">
                <ShoppingCartSharpIcon/>
            </Badge>
            </a>
            <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}