import React, { Component } from 'react';
import styled from 'styled-components';
import { elements } from '../scripts/data';

export default class Post extends Component {
    render(){
        elements.forEach(elem => {
            return(
                <div id='post'>
                    <h3>${elem.heading}</h3>
                    <b>${elem.price}</b>
                    <p>${elem.description}</p>
                </div>
            )
        });
    }
}

const post = styled.div`
    div{
    background-color: 'skyblue';
    display: flex;
    flex-direction: column;

    h3{
        color:rgb(54, 47, 47);
        font-size: 32px;
        font-family: 'Roboto';
        font-weight: bold;
    }

    b{
        color: black;
        font-size: 20px;
        font-family: 'Roboto';
        font-weight: bold;
    }

    p{
        color: black;
        font-size: 18px;
        font-family: 'Roboto';
        font-weight: normal;
    }
}`
