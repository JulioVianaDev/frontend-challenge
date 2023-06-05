"use client"
import styled from 'styled-components';
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputSearchIcon } from './primary-input';

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
export function Header(props: HeaderProps){
    return(
        <TagHeader>
            <Logo className={SairaStencil.className}>Cappuceno</Logo>
            <div>
                <PrimaryInputSearchIcon placeholder="Está procurando por algo? "/>
            </div>
        </TagHeader>
    )
}