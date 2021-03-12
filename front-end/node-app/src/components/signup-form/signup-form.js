// @flow 
import * as React from 'react';

const SignUpForm = (props) => {

    const [submitted,setSubmitted] = React.useState(false);
    const [uname,setUname] = React.useState('');
    const [pass,setPass] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log(uname,pass);
        fetch('http://localhost:3001/signup',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ uname: uname,pass: pass })
        }).then((resp) => resp.json() )
        .then((resp) =>{
            console.log(resp);
            setSubmitted(false);
        })
        .catch(err=>console.log(err));
    }

    return (
        <div>
            <form onSubmit={(event)=>handleSubmit(event)}  >
                <div>
                    <input type='text' id='uname' name='uname' placeholder='Username' onChange={(event)=>setUname(event.target.value)} />
                    <input type='pass' id='pass' name='pass' placeholder='Password' onChange={(event)=>setPass(event.target.value)} />
                    <button type='submit' disabled={submitted} >SIGN UP</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;