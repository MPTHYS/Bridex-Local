import React from "react";
import styled from "styled-components";

const ErrStyled = styled.div`
color: red;
position: absolute;
top: 100%;
font-size: 13px;
font-style: italic
`

export default function Field ({type='text', label, placeholder, required, renderInput, err , ...props }) {
    return (
        <label style={{position:'relative'}}>
            <div>{label} {required && <span>*</span>}</div>
            <input type={type} placeholder={placeholder} {...props}
            style={{height:'40px', width:'100%',border:'1px solid rgb(234, 234, 234)', borderRadius:'7px', outline:'none', padding:'0 15px'}}/>
            {err && <ErrStyled>{err}</ErrStyled>}
        </label>
    )
}