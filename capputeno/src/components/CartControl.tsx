import { useLocalStorage } from "../hooks/useLocalStorage";
import { CartIcon } from "./card";
import React from "react";
import styled from 'styled-components';

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 2px 8px;

    background-color: var(--red-color);
    color: white;
    
    position:absolute;
    right: -10px;
    top: 50%;
`;

const Container = styled.div`
    position: relative;

`;
export function CartControl(){
    const {value} = useLocalStorage<T>('cart-items');
    return(
        <Container>
            <CartIcon/>
            {value.length && <CartCount>{value.length}</CartCount> }
        </Container>
    )
}