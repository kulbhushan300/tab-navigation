import styled, { Styled } from "styled-components";

export const MainContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
`;

export const NavbarContainer = styled.nav`
    padding-left: 50px;
    padding-right: 50px;
    height: 80px;

    .inner-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left-container {
            font-size: 1.8rem;
            font-weight: 800;
            width: 30%;
        }

        .right-container {
            width: 50%;

            ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
                list-style: none;

                li {

                    .nav-link-item {
                        text-decoration: none;
                    }
                }
            }
        }
    }
`;

export const HomeContainer = styled.div`
    font-size: 4rem;
`;

export const TabContainer = styled.div`
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;

    .tab-container {

        .title-container {
            background-color: skyblue;
            padding: .5rem 1rem .5rem 1rem;

            ul {
                list-style: none;
                display: flex;
                justify-content: space-evenly;

                li {
                    text-decoration: none;
                }

                .active-name {
                    color: black;
                }

                .tab-name {
                    color: white;
                }

                &:hover {
                    cursor: pointer;
                }
            }
        }

        .content-container {
            font-size: 2rem;
            padding: 5rem;
            border: 1px solid black;

            .tab-content {
                display: none;
            }

            .active-content {
                display: block;
            }
        }
    }
`;

export const FormContainer = styled.div`

    h1 {
        font-size: 4rem;
    }

    .form-wrap {
        margin-top: 4rem;

        label {
            margin-right: 1rem;
        }

        .name-wrap {
            input {
                height: 2rem;
            }
        }

        .message-wrap {
            margin-top: 2rem;

            textarea {
                height: 5rem;
            }
        }

        .submit-btn-wrap {
            margin-top: 2rem;

            button {
                padding: .5rem 1rem .5rem 1rem;
            }
        }
    }
`;