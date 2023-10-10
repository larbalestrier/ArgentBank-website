import InputForm from "../../components/inputForm/inputForm"
import Button from "../../components/button/button"

function signIn () {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle"></i>
                <h1>Sign In</h1>
                <form>
                    <InputForm
                        className="input-wrapper"
                        label="E-mail"
                        id="email"
                        type="text" />
                    <InputForm 
                        className="input-wrapper"
                        label="Password"
                        id="Password"
                        type="password"/> 
                    <InputForm
                        className="input-remember"
                        label="Remember me"
                        id="remember-me"
                        type="checkbox"/>  
                    <Button
                        className="sign-in-button"
                        name="Sign In"/> 
                </form>
            </section>
        </main>
    )
}
export default signIn