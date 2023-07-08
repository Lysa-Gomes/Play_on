import React from "react";
import * as S from "./styled"
import Logo from "./img/logo_light.png"



export default function App(header) {
    return(
        <S.HeaderCont>
            <S.ContLogo>
                <S.LogoPlay src={Logo}alt="Play on logo do site"/>
            </S.ContLogo>
            <S.ContLi>
                <li>INÍCIO</li>
                <li>FILMES</li>
                <li>SÉRIES</li>
                <li>PESQUISA</li>
            </S.ContLi>
        </S.HeaderCont>
    )
}