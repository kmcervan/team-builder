import React from 'react';

export default function Form(props) {
    const { values, update } = props;

    const change = (evt) => {
       const { name, value } =  evt.target;
       update(name, value);
    };
    const submit = (evt) =>{
        evt.preventDefault();
        submit();
    }
    
  return (
    <div>
      <form className='form-container' onSubmit={submit}>
        <h1>Hello People!</h1>
        <label>
            Name
            <input
            name='name'
            type='text'
            placeholder='type your Name'
            value={values.name}
            onChange={change}
            />
        </label>
        <label>
            Email
            <input
            name='email'
            type='email'
            placeholder='type your email'
            value={values.email}
            onChange={change}
            />
        </label>
        <label>
            Role
            <select name='role' value={values.role} onChange={change}>
                <option value='' >-----Select Role-----</option>
                <option value='backend engineer'>Backend Engineer</option>
                <option value='fontend engineer'>Fontend Engineer</option>
                <option value='designer'>Designer</option>
                <option value='software engineer'>Software Engineer</option>
            </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}