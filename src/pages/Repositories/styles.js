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

export const Repository = styled.div`

    background-color: #ffffff;
    border-radius: 8px;
    height: 12rem;
    margin-top: 1rem;
    padding: 1rem 2rem;
    color: #2d3436;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        margin-top: 1rem;
    }


    @media (max-width: 375px) {
        
        height: 15rem;

        h2 {
            font-size: 1rem;
        }

        p {
            font-size: 0.8rem;
        }
    }

`

export const Stats = styled.div`

    display: flex;
    align-items: center;
    margin-top: 1rem;
    
    h3 {
        margin-left: 0.5rem;
    }

    @media (max-width: 375px) {
       
        h3 {
            font-size: 1rem;
        }
    }
`