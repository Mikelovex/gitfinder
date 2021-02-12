import styled from 'styled-components'


export const Container = styled.div`

    a {
        text-decoration: none;
    }

`

export const Header = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;

    @media (max-width: 375px) {

        h1 {
            font-size: 1.2rem;
            margin-left: 0.6rem;
        }

    }
`

export const Infos = styled.div`

    background-color: #ffffff;
    border-radius: 8px;
    height: 8rem;
    margin-top: 1rem;
    padding: 1rem 2rem;
    color: #2d3436;
    display: flex;
    align-items: center;


    img {
        height: 6rem;
        border-radius: 50%;
    }


    h1 {
        font-size: 1.5rem;
        margin-left: 2rem;
    }

    @media (max-width: 375px) {

        height: 6rem;

        img {
            height: 4rem;
        }

        h1 {
            font-size: 1rem;
        }

    }

`

export const Stats = styled.div`

    display: flex;
    flex-direction: column;
    
    p {
        margin-left: 2rem;
        margin-top: 0.2rem;
    }

    @media (max-width: 375px) {
        p {
            font-size: 0.8rem;
        }
    }

`
