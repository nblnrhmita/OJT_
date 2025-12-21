import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';
import { User, Mail, Shield, Search, MoreVertical, X } from 'lucide-react';

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user'
    });
    const [submitLoading, setSubmitLoading] = useState(false);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
                const userData = response.data?.data || [];
                setUsers(userData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setError(error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, formData);
            // Refresh users list
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
            const userData = response.data?.data || [];
            setUsers(userData);
            
            // Close modal and reset form
            setIsModalOpen(false);
            setFormData({ username: '', email: '', password: '', role: 'user' });
            alert('User berhasil ditambahkan!');
        } catch (error) {
            console.error("Error registering user:", error);
            alert(error.response?.data?.message || 'Gagal menambahkan user');
        } finally {
            setSubmitLoading(false);
        }
    };

    const filteredUsers = users.filter(user => 
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div className="flex min-h-screen bg-gray-50/50">
            <Sidebar />
            <main className="flex-1 ml-64 p-8">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Header Section */}
                    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Manajemen User</h1>
                            <p className="text-gray-500 mt-1 text-sm">Kelola akses dan data pengguna sistem.</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="text" 
                                    placeholder="Cari user..." 
                                    className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full md:w-64 transition-all bg-white"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2 text-sm font-medium shadow-sm hover:shadow-md"
                            >
                                <span>+ Tambah User</span>
                            </button>
                        </div>
                    </header>

                    {/* Table Section */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
                            <h2 className="text-base font-semibold text-gray-800">Daftar Pengguna <span className="text-gray-400 font-normal">({filteredUsers.length})</span></h2>
                        </div>
                        
                        <div className="overflow-x-auto">
                            {loading ? (
                                <div className="flex flex-col items-center justify-center py-16 space-y-4">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                    <p className="text-gray-400 text-sm">Memuat data user...</p>
                                </div>
                            ) : error ? (
                                <div className="text-center py-12">
                                    <div className="bg-red-50 text-red-500 p-4 rounded-full inline-flex mb-4">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">Gagal memuat data</h3>
                                    <p className="text-gray-500 mt-1 max-w-sm mx-auto">{error.message}</p>
                                </div>
                            ) : filteredUsers.length === 0 ? (
                                <div className="text-center py-16">
                                    <div className="bg-gray-50 text-gray-400 p-4 rounded-full inline-flex mb-4">
                                        <User className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">Tidak ada user ditemukan</h3>
                                    <p className="text-gray-500 mt-1">Coba kata kunci pencarian yang lain.</p>
                                </div>
                            ) : (
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-100 bg-gray-50/50">
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-16">No</th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {filteredUsers.map((user, index) => (
                                            <tr key={index} className="hover:bg-gray-50/80 transition-colors group">
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize border
                                                        ${user.role === 'admin' 
                                                            ? 'bg-purple-100 text-purple-700 border-purple-200' 
                                                            : 'bg-emerald-100 text-emerald-700 border-emerald-200'
                                                        }`}>
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 font-medium text-sm">
                                                            {user.username ? user.username.charAt(0).toUpperCase() : '?'}
                                                        </div>
                                                        <p className="text-sm font-medium text-gray-900">{user.username}</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    <div className="flex items-center gap-2">
                                                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                                                        {user.email}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-white rounded shadow-sm hover:shadow border border-transparent hover:border-gray-100 transition-all">
                                                        <MoreVertical className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>

                {/* Add User Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-gray-900">Tambah User Baru</h3>
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                        placeholder="Masukkan username"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                        placeholder="nama@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                        placeholder="••••••••"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="role"
                                                value="user"
                                                checked={formData.role === 'user'}
                                                onChange={handleInputChange}
                                                className="w-4 h-4 text-slate-900 focus:ring-slate-900 border-gray-300"
                                            />
                                            <span className="text-sm text-gray-700">User</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="role"
                                                value="admin"
                                                checked={formData.role === 'admin'}
                                                onChange={handleInputChange}
                                                className="w-4 h-4 text-slate-900 focus:ring-slate-900 border-gray-300"
                                            />
                                            <span className="text-sm text-gray-700">Admin</span>
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="mt-6 flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={submitLoading}
                                        className="px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-70"
                                    >
                                        {submitLoading ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                                Menyimpan...
                                            </>
                                        ) : (
                                            'Simpan User'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}