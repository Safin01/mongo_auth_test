import { authClient } from "./auth-client";

export const signInWithGoogle = async () => {
    await authClient.signIn.social({
        provider: "google",
        callbackURL : "http://localhost:3000",
        
    })
}

export const signOut = async () => {
    await authClient.signOut();
    location.reload();
}