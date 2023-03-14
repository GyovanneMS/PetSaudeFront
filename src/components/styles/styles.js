import styled from 'styled-components'

export const Container = styled.header`
    background-color:  var( --green-400);
    height: 30vh;
    display: flex;
    align-items: center;
`

export const Exit = styled.div`
    display: flex; 
    align-content: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 15%;
    margin: 30px;
    background-color: tomato;


    a{
        height: 100%
        width: 100%
        img{
            background-color: yellow;

            width: 100%
            height: 100%;
        }
    }
`