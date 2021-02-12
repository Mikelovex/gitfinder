import React, { useState } from 'react'

import {AiFillGithub} from 'react-icons/ai'

import { Container, Form} from './styles'

import api from '../../services/api'

function Login() {
    const [search, setSearch] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await api.get(`users/${search}`)
        const data = response.data

        localStorage.clear()
        localStorage.setItem('user', JSON.stringify(data))

        window.location.href="/user"
    }   


    return(
        <Container>
            <AiFillGithub size={100} color="#487eb0" />
            <h1>GitFinder</h1>
            <Form onSubmit={handleSubmit}>
                <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Digite um nome de usuário' />
                <button>Pesquisar</button>
            </Form>
        </Container>
    )
}   

export default Login