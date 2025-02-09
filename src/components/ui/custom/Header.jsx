import React, { useEffect, useState } from "react";
import { Button } from "../button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Plane, Menu } from "lucide-react";

function Header() {
  const [user, setUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log("Login Failed:", error),
  });

  const GetUserProfile = async (tokenInfo) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v1/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: "application/json",
          },
        }
      );

      const userData = response.data;
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      setOpenDialog(false);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                TravelAI
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <a href="/create-trip">
                  <Button
                    variant="outline"
                    className="rounded-full hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    + Create Trip
                  </Button>
                </a>
                <a href="/my-trips">
                  <Button
                    variant="outline"
                    className="rounded-full hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    My Trips
                  </Button>
                </a>
                <Popover>
                  <PopoverTrigger>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-orange-500 hover:border-orange-600 transition-colors">
                      {user?.picture ? (
                        <img
                          src={user.picture}
                          alt={user.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-orange-100 flex items-center justify-center">
                          <span className="text-orange-500 font-semibold">
                            {user.name?.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 bg-orange-50">
                    <div className="py-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-semibold">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-200 hover:text-orange-600 transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </>
            ) : (
              <Button
                onClick={() => setOpenDialog(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white transition-colors"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {user ? (
              <div className="space-y-3">
                <div className="flex items-center space-x-3 px-4 py-2">
                  <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-orange-500">
                    {user.picture ? (
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-orange-100 flex items-center justify-center">
                        <span className="text-orange-500 font-semibold">
                          {user.name?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <a
                  href="/create-trip"
                  className="block px-4 py-2 hover:bg-orange-50"
                >
                  Create Trip
                </a>
                <a
                  href="/my-trips"
                  className="block px-4 py-2 hover:bg-orange-50"
                >
                  My Trips
                </a>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="px-4">
                <Button
                  onClick={() => setOpenDialog(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-colors"
                >
                  Sign In
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Sign In Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-md bg-white p-6">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center space-x-2">
              <Plane className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold text-orange-500">
                TravelAI
              </span>
            </DialogTitle>
            <DialogDescription className="text-center space-y-4">
              <h2 className="text-lg font-semibold mt-4">
                Welcome to TravelAI
              </h2>
              <p className="text-sm text-gray-500">
                Sign in to access personalized travel recommendations and save
                your favorite trips
              </p>
              <Button
                onClick={() => login()}
                className="w-full flex items-center justify-center space-x-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors"
              >
                <FcGoogle className="h-5 w-5" />
                <span>Continue with Google</span>
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;
