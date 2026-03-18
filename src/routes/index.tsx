import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Repository from '../pages/Repository'

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repository/:repositoryname" element={<Repository />} />
    </Routes>
)

export default AppRoutes
