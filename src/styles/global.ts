import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button{
        font: 1em Roboto, sans-serif;
    }

    #root{
        max-width: 70%;
        margin: 0 auto;
        padding: 3em 0em;
        @media (max-width: 600px){
            max-width: 88%;
        }
    }
    button{
        cursor:pointer;
    }
`;
