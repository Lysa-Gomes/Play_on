import React from "react";
import * as S from "./styled";
import Logo from "./img/logo_light.png";


export default function App(Foot){
    return(
        <S.FooterCont>
            <S.LogoCont>
             <S.Logo src={Logo} alt="play on logo"/>
            </S.LogoCont>
           <S.ContainerUl>
           <S.ListCont>
                <li>Politica de privacidade</li>
                <li>Proteção de dados</li>
                <li>Contrato de assinatura</li>
            </S.ListCont>
           </S.ContainerUl>
            <S.TextBox>
            <S.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</S.Text>
            </S.TextBox>
        </S.FooterCont>
    )
}