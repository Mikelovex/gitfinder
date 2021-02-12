import styled from 'styled-components'


export const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 40rem;
        height: 3rem;
        padding: 1rem;
        border: none;
        border-radius: 4px;
        margin-top: 6rem;
        

        &::placeholder {
            color: #a4b0be;
        }
    }

    button {
        margin-top: 4rem;
        width: 20rem;
        height: 3rem;
        border: none;
        border-radius: 4px;
        background-color: #487eb0;
        color: white;
    }

    @media (max-width: 375px) {
        
        input {
            width: 20rem;
        }


        button {
            width: 10rem;
        }

    }

`