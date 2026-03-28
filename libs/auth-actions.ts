import { authClient } from "./auth-client";

export const signInWithGoogle = async () => {
    await authClient.signIn.social({
        provider: "google",
        callbackURL : `${process.env.NEXT_PUBLIC_BASE_URL}`,
        
    })
}

export const signOut = async () => {
    await authClient.signOut();
    location.reload();
}