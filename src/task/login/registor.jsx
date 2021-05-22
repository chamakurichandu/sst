// import React from 'react';
//  import { Formik } from 'formik';
 
//  const Registor = () => (
//    <div>
//      <h1>Anywhere in your app!</h1>
//      <Formik
//        initialValues={{ email: '', password: '' }}
//        validate={values => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = 'Required';
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = 'Invalid email address';
//          }

//          if(!values.password){
//              errors.password = 'password required'
//          }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//          }, 400);
//        }}
//      >
//        {({
//          values,
//          errors,
//          touched,
//          handleChange,
//          handleBlur,
//          handleSubmit,
//          isSubmitting,
//          /* and other goodies */
//        }) => (
//          <form onSubmit={handleSubmit}>
//            <input
//              type="email"
//              name="email"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.email}
//            />
//            {errors.email && touched.email && errors.email}
//            <input
//              type="password"
//              name="password"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.password}
//            />
//            {errors.password && touched.password && errors.password}
//            <button type="submit" disabled={isSubmitting}>
//              Submit
//            </button>
//          </form>
//        )}
//      </Formik>
//    </div>
//  );
 
//  export default Registor;
























import React from 'react'
import {useFormik} from "formik";

export default function Registor() {
    const [name] = React.useState('');
    const [nameBool,setnameBool] = React.useState(false);
    const [nameError] = React.useState('Enter Name');
    // const formik = useFormik({
    //     validate: values =>{
    //         let errors ={}
    //         if(!values.name)
    //     }
    // })
    const test = () =>{
        if(name==""){
            setnameBool(true);
        }
    }
    return (
        <div>
        <form >
            <input type="text" placeholder="name" value={name}/>
            {nameBool ? nameError : null}
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="contact"/>
            <button onClick={test}>click</button>
        </form>
        </div>
    )
}
