import classes from '../../styles/Signup.module.css';
import Button from '../Button';
import CheckBox from '../CheckBox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

const Signup = () => {
    return (
       <>
       <h1>Create a new account</h1>
       <div className="column">
           <Illustration />
           <Form className={classes.signup}> 
           <TextInput type="text" placeholder="Enter name" icon='person' />
           <TextInput type="text" placeholder="Enter email" icon='alternate_email' />
           <TextInput type="password" placeholder="password" icon='lock' />
           <TextInput type="password" placeholder="confirm password" icon='lock_clock' />

           <CheckBox text="I agree to the Terms &amp; Conditions" />

           <Button><span>Submit Now</span></Button>

           <div className="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>
           </Form>
       </div>
       </>
    );
};

export default Signup;