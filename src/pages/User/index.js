import React from 'react'

import { Container, Informations, Image, Stats,StatsDiv, Biografy } from './styles'

import { AiOutlineArrowLeft } from 'react-icons/ai'

import {Link} from 'react-router-dom'

function User() {

    const data = localStorage.getItem('user')
    const dados = JSON.parse(data)
    
    console.log(dados)

    return(
        <Container>
            <Image>
                <img src={dados.avatar_url} alt=""/>
                <Link to="/"><AiOutlineArrowLeft size={20} color="black" /></Link>
            </Image>
            
            <Informations>
                <h1>{dados.name}</h1>
                <p>{dados.location}</p>
            </Informations>

            <Stats>
                <Link to={`/repositories/${dados.login}`}>
                <StatsDiv>
                   
                    <h2>Repositories</h2>
                    <h3>{dados.public_repos}</h3>
                
                </StatsDiv>
                </Link>

                <Link to={`/followers/${dados.login}`}>
                <StatsDiv>
                    <h2>Followers</h2>
                    <h3>{dados.followers}</h3>
                </StatsDiv>
                </Link>

                <Link to={`/following/${dados.login}`}>
                <StatsDiv>
                    <h2>Following</h2>
                    <h3>{dados.following}</h3>
                </StatsDiv>
                </Link>

            </Stats>
            
            <Biografy>
                <h1>Bio</h1>
                <p>{dados.bio}</p>
            </Biografy>

            
        </Container>
    )
}   

export default User