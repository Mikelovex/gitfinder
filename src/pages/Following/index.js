import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import {Link} from 'react-router-dom'

import api from '../../services/api'

import {AiOutlineArrowLeft} from 'react-icons/ai'

import { Container, Infos, Header, Stats } from './styles'

function Following() {

    const [following, setfollowing] = useState([])

    const {id} = useParams()

    console.log(id)

    useEffect(() => {
        async function getRepositories() {
            const response = await api.get(`users/${id}/following`)
            console.log(response.data)
            setfollowing(response.data)
        }

        getRepositories()
    }, [id])


    return(
        <Container>
            <Header>
            <h1>following</h1>
            <Link to="/user"><AiOutlineArrowLeft size={20} color="black" /></Link>
            </Header>
            

            {following.map(following => (
                <a href={`${following.html_url} `} target="blank">
                    <Infos>
                        <img src={following.avatar_url} alt=""/>
                        <Stats>
                            <h1>{following.login}</h1>
                            <p>{following.html_url}</p>
                        </Stats>
            
                    </Infos>
                </a>
            ) )}
           
        </Container>
    )
}   

export default Following