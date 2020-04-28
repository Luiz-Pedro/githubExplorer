import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 2.5em;
    color: #3a3a3a;
    margin-top: 1em;
    max-width: 450px;
    line-height: 56px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 3em;
    max-width: 75%;
    display: flex;
    @media (max-width: 600px) {
        max-width: 100%;
        flex-direction: column;
    }

    input {
        @media (max-width: 600px) {
            flex: auto;
            border-radius: 5px 5px 0 0;
        }
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #ffffff;
        border-right: 0;
        ${(props) =>
        props.hasError &&
            css`
                border-color: #c53030;
            `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        @media (max-width: 600px) {
            width: 100%;
            height: 2.5em;
            border-radius: 0 0 5px 5px;
        }
        width: 210px;
        height: 70px;
        background: #04d361;
        color: #ffffff;
        border-radius: 0 5px 5px 0;
        border: 0;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Repositories = styled.div`
    max-width: 75%;
    margin-top: 5em;
    @media (max-width: 600px) {
        max-width: 100%;
    }

    a + a {
        margin-top: 16px;
    }

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;
        &:hover {
            transform: translateX(10px);
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            @media (max-width: 600px) {
                width: 50px;
                height: 50px;
            }
        }

        div {
            margin: 0 16px;
            flex: 1;
            strong {
                font-size: 20px;
                color: #3d3d4d;
                @media (max-width: 600px) {
                    font-size: 1em;
                }
            }
            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
                @media (max-width: 600px) {
                    font-size: 0.8em;
                }
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbb6;
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 20px;
`;
