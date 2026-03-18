import { useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'
import logo from '../../assets/logo.svg'
import {
    Title,
    Form,
    Repositories,
    Error,
    ResultsTitle,
    SkeletonContainer,
    SkeletonAvatar,
    SkeletonText,
} from './styles'

interface Repository {
    full_name: string
    description: string
    owner: {
        login: string
        avatar_url: string
    }
}

const Dashboard = () => {
    const [query, setQuery] = useState('')
    const [inputError, setInputError] = useState('')
    const [repositories, setRepositories] = useState<Repository[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    async function handleAddRepository(
        e: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        e.preventDefault()

        if (!query) {
            setInputError('Enter the repository author/name')
            return
        }

        try {
            setIsLoading(true)
            const response = await api.get<Repository>(`/repos/${query}`)
            const repository = response.data

            setRepositories([...repositories, repository])
            setSearchQuery(query)
            setQuery('')
            setInputError('')
        } catch {
            setInputError('Error searching for this repository')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <img src={logo} alt="logo" />
            <Title>Explore GitHub repositories</Title>

            <Form $hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter the repository author/name"
                />
                <button type="submit">Search</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            {searchQuery && (
                <ResultsTitle>
                    {repositories.length} repositories results for {searchQuery}:
                </ResultsTitle>
            )}

            {isLoading && (
                <SkeletonContainer>
                    <SkeletonAvatar />
                    <div>
                        <SkeletonText $width="40%" />
                        <SkeletonText $width="70%" />
                    </div>
                </SkeletonContainer>
            )}

            <Repositories>
                {repositories.map((repository) => (
                    <a
                        key={repository.full_name}
                        href={`https://github.com/${repository.full_name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Repositories>
        </>
    )
}

export default Dashboard
