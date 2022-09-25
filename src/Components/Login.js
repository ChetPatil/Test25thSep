import fb from "../Images/fb.png";
import linkedin from "../Images/linkedin.png";
import gplus from "../Images/gplus.png";
const Login = _ =>
{
    return (
        <div className="Logindiv">
            <nav>
                <span><h2 className="greentext company">Patil's </h2><h2 className="name">Technology</h2></span>
            </nav>
            <main>
                <div className="flex">
                    <h1 className="greentext Login">Login to Account</h1>
                </div>
                <div className="hr">
                    <hr/>
                </div>
                <div>
                    <ul className="flex ul">
                        <li>
                            <a className="social" href="https://www.facebook.com/"><img src={ fb } alt="fb" /></a>
                        </li>
                        <li>
                            <a className="social" href="https://www/linkedin.com/"><img src={ linkedin } alt="linkedin" /></a>
                        </li>
                        <li>
                            <a className="social" href="https://google.com/"><img src={ gplus } alt="gplus" /></a>
                        </li>
                    </ul>
                </div>
                <div className="flex">
                    <h3 className="oruse">Or use E-mail Account.</h3>
                </div>
                <div className="flex">
                    <form>
                        <label htmlFor="email">Email</label>
                        <input className="email" type="email" id="email" name="email" /><br/>
                        <label htmlFor="pass">Password</label>
                        <input className="pass" type="password" id="pass" name="pass" /><br />
                        <span className="remfor">
    
                            <a href="https://www.google.com/">Forgot Password?</a>
                            <span>
                                <input type="checkbox" /><p>Remember Me</p>
                            </span>
                        </span>
                        <div className="flex">
                            <input className="submit" type="submit" value= "SUBMIT"  />
                        </div>
                    </form>
                </div>
                
            </main>
            <footer>
                <ul>
                    <li>
                        <a href="https://geekster.in/privacy-policy/">Privacy Policy</a>
                    </li>
                    <li>
                        &#128900;
                    </li>
                    <li>
                        <a href="https://geekster.in/terms">Terms </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
};

export default Login;