import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Header, RepositoryInfo, Issues } from './styles'
import logo from '../../assets/logo.svg'
import api, { AxiosResponse } from '../../services/api'

interface Repository {
    full_name: string
    description: string
    stargazers_count: number
    forks_count: number
    open_issues_count: number
    owner: {
        login: string
        avatar_url: string
    }
}

interface Issue {
    id: number
    title: string
    html_url: string
    user: {
        login: string
    }
}

const RepositoryPage = () => {
    const { repositoryname } = useParams<{ repositoryname: string }>()
    const [repository, setRepository] = useState<Repository | null>(null)
    const [issues, setIssues] = useState<Issue[]>([])

    useEffect(() => {
        if (!repositoryname) return
        
        api.get<Repository>(`repos/${repositoryname}`).then((response: AxiosResponse<Repository>) => {
            setRepository(response.data)
        })
        api.get<Issue[]>(`repos/${repositoryname}/issues`).then((response: AxiosResponse<Issue[]>) => {
            setIssues(response.data)
        })
    }, [repositoryname])

    return (
        <>
            <Header>
                <img src={logo} alt="GitHub Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            {repository && (
                <RepositoryInfo>
                    <header>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.full_name}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}

            <Issues>
                {issues.map((issue) => (
                    <a key={issue.id} href={issue.html_url} target="_blank" rel="noopener noreferrer">
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    )
}

export default RepositoryPage
