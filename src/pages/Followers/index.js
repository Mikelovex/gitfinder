import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import {Link} from 'react-router-dom'

import api from '../../services/api'

import {AiOutlineArrowLeft} from 'react-icons/ai'

import { Container, Infos, Header, Stats } from './styles'

function Followers() {

    const [followers, setFollowers] = useState([])

    const {id} = useParams()

    console.log(id)

    useEffect(() => {
        async function getRepositories() {
            const response = await api.get(`users/${id}/followers`)
            console.log(response.data)
            setFollowers(response.data)
        }

        getRepositories()
    }, [id])


    return(
        <Container>
            <Header>
            <h1>Followers</h1>
            <Link to="/user"><AiOutlineArrowLeft size={20} color="black" /></Link>
            </Header>
            

            {followers.map(followers => (
                <a href={`${followers.html_url} `} target="blank">
                    <Infos>
                        <img src={followers.avatar_url} alt=""/>
                        <Stats>
                            <h1>{followers.login}</h1>
                            <p>{followers.html_url}</p>
                        </Stats>
                    </Infos>
                </a>
            ) )}
           
        </Container>
    )
}   

export default Followers