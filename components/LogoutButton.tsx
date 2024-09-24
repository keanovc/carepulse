"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("accessKey");
    router.push("/");
  };

  return (
    <Button className="shad-primary-btn" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
