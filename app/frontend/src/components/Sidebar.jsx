import { NavLink, useNavigate } from 'react-router-dom';
import { Users, FileText, Newspaper, LogOut } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here (e.g., clear tokens)
    console.log("Logout clicked");
    navigate('/login');
  };

  const navItems = [
    { name: 'User', path: '/admin/users', icon: Users },
    { name: 'Kuesioner', path: '/admin/kuesioner', icon: FileText },
    { name: 'Artikel', path: '/admin/artikel', icon: Newspaper },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-slate-600">Admin Panel</h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive
                  ? 'bg-slate-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-slate-600'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  size={20}
                  className={
                    isActive
                      ? 'text-white'
                      : 'text-gray-500 group-hover:text-slate-600'
                  }
                />
                <span className="font-medium">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 font-medium"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
