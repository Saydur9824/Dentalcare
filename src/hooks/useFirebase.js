import { getAuth, signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider,updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [password, setPassword] = useState("")

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribed;
          
    },[])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }



    // My Code 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setDisplayName(user.displayName)
                setError("")
            }
            setIsLoading(false)
        });
    }, [])
    const handleEmail = (e) => {
        setEmail(e.target.value)
     
      }
    const handlePass = (e) => {

          setPassword(e.target.value)

    }
      const handleName = (e) => {
          setDisplayName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
                const user = userCredential.user;
                setUser(user)
                setError("")
            })
            .catch((error) => {
                const errorMessage = error.message;
                
                setError(errorMessage)
            }).finally(()=> setIsLoading(false))
        
 
    }
    // username email and password register
    const createUser = (e) => {
        setIsLoading(true)
        e.preventDefault()
        if (!/(?=^.{8,}$)/.test(password) ) {
            setError("Password Must Be 8 Digit")
            return
        }
        if (!/(?=.*?[!@#\$&*~])/.test(password)) {
            setError("Need One Special characters")
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Need One UpperCase Letter")
            return
        }
        if (!/(?=.*[a-z])/.test(password)) {
            setError("Need One LowerCase Letter")
            return
        } else {
            
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            
            updateName()

            setError("")
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        }).finally(()=>setIsLoading(false))
        }
    }
    const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: displayName,
        }).then(() => {
            setDisplayName(displayName)
            setError("")
        }).catch((error) => {
            setError(error.errorMessage)
        });
    }


    // my code 
    return{
        user,
        signInGoogle,
        logOut,
        isLoading,createUser,handleSubmit,handleName,handlePass,handleEmail

    }

}
export default useFirebase;