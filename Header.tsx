import { signOut } from '@firebase/auth';
import { auth } from '../../services/firebase';
import { useAuthStore } from '../../store/authStore';
import { TbClipboardSmile } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";

export const Header = () => {
  const user = useAuthStore((state) => state.user);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="header-container">
        <div className="flex-between">
          <div className="flex items-center">
          <TbClipboardSmile size={30} />
            <h1 className="text-black">TaskBuddy</h1>
            <div className="header-nav">
            </div>
            
          </div>

          
            {user && (
              <div className="flex items-center space-x-2 sm:space-x-4">
                <span className="text-sm sm:text-base text-gray-700">{user.email}</span>
                <button
                  onClick={handleSignOut}
                  className="btn btn-secondary"
                >
                <div className='grid md:content-around '>
                  <RiLogoutBoxLine size={15} />
                </div>  
                
                Logout
                
                </button>
              </div>
            )}
          
        </div>
      </div>
    </header>
  );
};
