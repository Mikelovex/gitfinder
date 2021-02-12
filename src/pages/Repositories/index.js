import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import {Link} from 'react-router-dom'

import api from '../../services/api'

import {AiOutlineStar, AiOutlineArrowLeft} from 'react-icons/ai'

import { Container, Repository, Stats, Header } from './styles'

function Repositories() {

    const [repositories, setRepositories] = useState([])

    const {id} = useParams()

    console.log(id)

    useEffect(() => {
        async function getRepositories() {
            const response = await api.get(`users/${id}/repos`)
            console.log(response.data)
            setRepositories(response.data)
        }

        getRepositories()
    }, [id])

    return(
        <Container>
            <Header>
            <h1>Repositories</h1>
            <Link to="/user"><AiOutlineArrowLeft size={20} color="black" /></Link>
            </Header>
            

            {repositories.map(repository => (
                <a href={`${repository.html_url} `} target="blank">
                    <Repository>
                    <h2>{repository.name}</h2>
                    {repository.description ? <p>{repository.description}</p> : <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem vitae deserunt sapiente? Iusto delectus illum ullam laboriosam vel, praesentium fuga minus cupiditate asperiores illo iste nobis labore sapiente eaque quis.</p>}

                    <Stats>
                        <AiOutlineStar size={25} color="#f6e58d" /><h3>{repository.stargazers_count}</h3>
                    </Stats>
                    </Repository>
                </a>
            ) )}
           
        </Container>
    )
}   

export default Repositories