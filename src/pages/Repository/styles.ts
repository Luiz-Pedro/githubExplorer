import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            @media (max-width: 600px) {
                width: 75px;
                height: 75px;
            }
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3d3d3d;
                @media (max-width: 600px) {
                    font-size: 1.5em;
                }
            }
            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
                @media (max-width: 600px) {
                    font-size: 0.8em;
                }
            }
        }
    }
    ul {
        display: flex;
        list-style: none;
        margin-top: 3em;

        li {
            & + li {
                margin-left: 80px;
                @media (max-width: 600px) {
                    margin-left: 3em;
                }
            }
            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
                @media (max-width: 600px) {
                    font-size: 1.5em;
                }
            }
            span {
                display: block;
                margin-top: 4px;
                color: #6c6c80;
                @media (max-width: 600px) {
                    font-size: 0.8em;
                }
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 4.5em;

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

        div {
            margin: 0 16px;
            flex: 1;
            strong {
                font-size: 20px;
                color: #3d3d4d;
            }
            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbb6;
        }
    }
`;
