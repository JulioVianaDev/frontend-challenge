"use client"
import styled from 'styled-components';
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputSearchIcon } from './primary-input';
import {CartControl} from './CartControl';
const SairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin'] 
})
interface HeaderProps{

}
const TagHeader = styled.header`
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 20px 160px;
    width: 100%;
`;

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`;
const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
`;
export function Header(props: HeaderProps){
    return(
        <TagHeader>
            <Logo className={SairaStencil.className}>Cappuceno</Logo>
            <DivRow>
                <PrimaryInputSearchIcon placeholder="Está procurando por algo? "/>
                <CartControl/>
            </DivRow>
        </TagHeader>
    )
}