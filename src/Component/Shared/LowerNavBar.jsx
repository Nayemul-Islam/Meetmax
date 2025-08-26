import React, { useContext, useEffect, useState } from "react";
import { Bell, Settings, Users, Globe, LayoutGrid } from "lucide-react";
import { AuthContext } from "../Auth/AuthProvider";
export default function LowerNavBar() {
  const [open, setOpen] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("/public/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((error) => console.log(error));
  }, []);

  const openPopup = (type) => {
    setPopupType(type);
    setOpen(true);
  };

  const { logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("✅ User signed out successfully");
      })
      .catch((error) => {
        console.error("❌ Error signing out:", error.message);
      });
  };

  return (
    <>
      {/* Bottom Navbar */}
      <div className="fixed bottom-0 left-3 right-3 md:left-0 md:right-0 bg-white shadow-md flex justify-around py-2 border-t z-50">
        {/* Feed */}
        <button className="flex flex-col items-center gap-1">
          <LayoutGrid className="h-6 w-6" />
          <span className="text-xs">Feed</span>
          <div className="w-6 h-1 bg-black rounded mt-1"></div>
        </button>

        {/* My Community */}
        <button
          className="flex flex-col items-center gap-1"
          onClick={() => openPopup("community")}
        >
          <Users className="h-6 w-6" />
          <span className="text-xs">My community</span>
        </button>

        {/* Explore */}
        <button className="flex flex-col items-center gap-1">
          <Globe className="h-6 w-6" />
          <span className="text-xs">Explore</span>
        </button>

        {/* Notification */}
        <button className="flex flex-col items-center gap-1 relative">
          <Bell className="h-6 w-6" />
          <span className="text-xs">Notification</span>
          <span className="absolute top-0 right-3 bg-red-500 text-white text-xs rounded-full px-1">
            2
          </span>
        </button>

        {/* Settings */}
        <button
          className="flex flex-col items-center gap-1"
          onClick={() => openPopup("settings")}
        >
          <Settings className="h-6 w-6" />
          <span className="text-xs">Settings</span>
        </button>
      </div>

      {/* Bottom Sheet Popup */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/40">
          {/* Sheet content */}
          <div className="bg-white rounded-t-2xl p-4 shadow-lg w-full max-h-[70%] overflow-y-auto transform transition-transform duration-300 animate-slide-up">
            {/* Close button */}
            <div className="flex justify-center">
              <button onClick={() => setOpen(false)} className="btn btn-circle">
                X
              </button>
            </div>

            {popupType === "community" && (
              <div>
                <h2 className="text-lg font-semibold mb-3">Friends List</h2>
                <div className="space-y-3">
                  {friends.map((friend) => (
                    <div
                      key={friend.id}
                      className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg"
                    >
                      <img
                        src={friend.img}
                        alt={friend.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="text-sm">{friend.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {popupType === "settings" && (
              <div>
                <h2 className="text-lg font-semibold mb-3">Settings</h2>
                <ul className="space-y-3">
                  <li className="cursor-pointer hover:text-blue-500">
                    General Settings
                  </li>
                  <li className="cursor-pointer hover:text-blue-500">
                    Privacy
                  </li>
                  <li onClick={handleSignOut} className="cursor-pointer hover:text-red-500">Log Out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
