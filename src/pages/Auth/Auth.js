import SignUpForm from "../../components/SignUpForm/SignUpForm";
// Keep same format for each page
export default function Auth ({setUser}) {
    return(
        <>
        <h1>Authentication Page</h1>
        <SignUpForm setUser={setUser}/>
        </>
    ) 
}