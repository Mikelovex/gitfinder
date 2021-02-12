import styled from 'styled-components'


export const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 8px;
    padding-top: 1rem;

    img {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20rem;
        border-radius: 50%;
        justify-content: center;
    }


    @media (max-width: 1024px) {

        h1 {
            font-size: 1.5rem;
        }

        img {
            width: 14rem;
        }
    }


    @media (max-width: 1440px) {

        h1 {
            font-size: 1.6rem;
        }

        img {
            width: 16rem;
        }

    }


    @media (max-width: 375px) {

        h1 {
            font-size: 1rem;
        }

        img {
            width: 10rem;
        }

    }

`

export const Informations = styled.div `
    padding: 40px 6rem;
    
    p {
        padding-top: 1rem;
    }

    @media (max-width: 375px) {

        padding: 40px 1rem;

    }

`

export const Image = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    a {
        position: relative;
        top: -300px;
        left: -370px;
    }

    @media (max-width: 1024px) {

        a {
            top: -200px;
        }

    }


    @media (max-width: 1440px) {

        a {
            top: -230px;
        }

    }

    @media (max-width: 375px) {
        
        a {
            top: -140px;
            left: -140px;
        }
    }

`

export const Stats = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 6rem;

    a {
        text-decoration: none;
        color: black;
    }
`

export const StatsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.2s;

    h3 {
        margin-top: 1rem;
    }

    &:hover {
        transform: scaleY(1.06) scaleX(1.06);
    }


    @media (max-width: 1024px) {

        font-size: 1rem;
        
    }


    @media (max-width: 1440px) {
        
        font-size: 0.9rem;

    }

    @media (max-width: 375px) {
        font-size: 0.7rem;
    }

`


export const Biografy = styled.div`
    padding: 40px 6rem;

    p {
        font-size: 1.2rem;
        margin-top: 2rem;
    }


    @media (max-width: 1024px) {

        p {
            font-size: 1rem;
        }
    }


    @media (max-width: 375px) {

        padding: 40px 1rem;

        p {
            font-size: 1rem;
        }
    }

`
