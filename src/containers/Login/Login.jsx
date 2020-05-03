import React, { useState } from 'react';
import { ButtonLogin } from './styles';
import { Form, Item, Input, Label } from 'native-base';

function LoginContainer () {
    const [ login, setLoading] = useState(false);
    const [ form, setForm] = useState({username:'', password:''});
    const handleOnChange = (value, key) => { setForm({ ...form, [key]: value }) };
    return (
        <Form>
            <Item>
              <Label>Username</Label>
              <Input value={form.username} onChange={(value)=>handleOnChange(value, 'username')}/>
            </Item>
            <Item>
              <Label>Password</Label>
              <Input value={form.password} secureTextEntry={true} onChange={(value)=>handleOnChange(value, 'password')}/>
            </Item>
            <ButtonLogin full
            onPress={()=>setLoading(!login)}
            >{login?'Loading...':'Submit'}</ButtonLogin>
        </Form>
    );

}


export default LoginContainer;