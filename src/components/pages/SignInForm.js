import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../axios/authUser';
import { loginBusiness } from '../../axios/authBusiness';
import { NavLink } from 'react-router-dom';

import './Forms.css';

import logo from '../../images/car.png';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { typeState } from '../../atoms';

import backarrow from '../../images/back.png';

const SignInForm = ({ history }) => {
  const type = useRecoilValue(typeState);

  const [serverErrMsg, setServerErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = async ({ email, password }) => {
    try {
      setServerErrMsg('');
      setIsLoading(true);
      if (type === 'user') {
        await loginUser({ email, password });
        history.push('/vehicletype');
      }
      if (type === 'business') {
        await loginBusiness({ email, password });
        history.push('/home-business');
      }

      setIsLoading(false);
    } catch (err) {
      setServerErrMsg(err.message);
      setIsLoading(false);
    }
  };

  const validate = (inputName) => {
    if (errors[inputName]) {
      return <p className="validation">{errors[inputName].message}</p>;
    }
  };
  const setType = useSetRecoilState(typeState);

  function PickType(type) {
    setType(type);
  }
  const onClick = () => history.push('/');

  return (
    <div className="card">
      <div className="logo">
        <img className="logo" src={logo} alt="car" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          ref={register({
            required: 'You must specify an email',
          })}
        />
        {validate('email')}

        <input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          ref={register({
            required: 'You must specify a password',
          })}
        />
        {validate('password')}

        <br />

        {serverErrMsg && <p className="validation">{serverErrMsg}</p>}

        <br />

        {isLoading && <p>Loading...</p>}
        <button className="type-btn" onClick={() => PickType('user')}>
          User
        </button>
        <button className="type-btn" onClick={() => PickType('business')}>
          Business
        </button>
        <input className="submit" type="submit" placeholder="LOG IN " />
        <div>
          <p>
            Don't Have An Account ? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
