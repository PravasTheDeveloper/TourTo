import Image from "next/image";
import { Inter } from "next/font/google";
import { useAuth, useClerk, useUser } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { signOut } = useClerk()
  const {isLoaded, userId, sessionId, getToken } = useAuth()
  const { isSignedIn, user } = useUser();

  console.log(user)

  return (
    <>
      <button onClick={() => signOut({ redirectUrl: '/' })}>
        Sign out
      </button>
    </>
  );
}
