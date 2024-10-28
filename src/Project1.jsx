import ReturnBtn from "./ReturnBtn";
import lshop1 from "./assets/images/l-shop1.png"
import lshop2 from "./assets/images/l-shop2.png"
import lshop3 from "./assets/images/l-shop3.png"
import lshop4 from "./assets/images/semtitulo.png"

export default function Project1(){
    return(
        <>
        <ReturnBtn/>
        <p className="pProject">
        L-Shop é um projeto de E-Commerce, baseado em Mercado Livre, Shopee, Amazon, etc. Os produtos são requisitados de um API com banco de dados MySQL, Utilizará STRIPE para efetuar pagamentos. Tecnologias Usadas: Typescript, React-JS, Node-JS, Express-JS, Sequelize, MySQL, Requisições a API, Autentificação de usuário com JWT, Validação de metodo de pagamento e Context-API.

        </p>
      
        <div className="showProjectsImg">
        <div id="showLshop">
            <img src={lshop1} alt="" />
        </div>

        <div id="showLshop">
            <img src={lshop2} alt="" />
        </div>

        <div id="showLshop">
            <img src={lshop3} alt="" />
        </div>
        
        <div id="showLshop">
            <img src={lshop4} alt="" />
        </div>
        </div>

        </>
    )
}
