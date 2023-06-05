import styled from "styled-components";
import {SearchIcon} from './search-icon';
import { InputHTMLAttributes } from "react";
export const PrimaryInput = styled.input`
    width: 352px;
    background-color: var(--bg-secondary);
    border-radius: 8px;
    border: none;
    padding: 10px 16px;
    font-family: inherit;
    font-weright: 400;
    font-size: 14px;
    line-height:22px;
    color: var(--text-dark);
`;

const InputContainerStyledDiv = styled.div`
    position: relative;
    width: 352px;
    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: TranslateY(-50%);
    }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}
export function PrimaryInputSearchIcon(props: InputProps){
    return(
        <InputContainerStyledDiv>
            <PrimaryInput {...props}/>
            <SearchIcon/>
        </InputContainerStyledDiv>
    )
}