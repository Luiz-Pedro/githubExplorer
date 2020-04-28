import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [query, setQuery] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storageRepositories = localStorage.getItem(
            '@githubExplorer:repositories',
        );
        if (storageRepositories) {
            return JSON.parse(storageRepositories);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(
            '@githubExplorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    async function handleAddRepository(
        e: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        e.preventDefault();

        if (!query) {
            setInputError('Digite o autor/nome do repositório.');
            return;
        }

        try {
            const response = await api.get<Repository>(`/repos/${query}`);
            const repository = response.data;

            setRepositories([...repositories, repository]);
            setQuery('');
            setInputError('');
        } catch (error) {
            setInputError('Erro na busca por esse repositório.');
        }
    }

    return (
        <>
            <img src={logo} alt="logo" />
            <Title>Explore repositórios no GitHub</Title>

            <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Digite o autor/nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map((repository) => (
                    <Link
                        key={repository.full_name}
                        to={`repository/${repository.full_name}`}
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
                    </Link>
                ))}
            </Repositories>
        </>
    );
};
export default Dashboard;
