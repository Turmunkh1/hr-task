// components/withAuth.tsx
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return () => {
    const router = useRouter();

    useEffect(() => {
      const storedUsers = localStorage.getItem("users");
      const isLoggedIn = localStorage.getItem("isLoggin");

      if (!isLoggedIn) {
        router.push("/account/login");
      }
    }, []);

    return <WrappedComponent />;
  };
};

export default withAuth;
