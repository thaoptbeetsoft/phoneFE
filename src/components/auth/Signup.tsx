import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Auth.css";
import * as Yup from "yup";
import AuthService from "../../service/AuthService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
function Signup() {
    let navigate = useNavigate();
    const [loading, setLoading] = useState("false");
    const [message, setMessage] = useState("");
    const initialValues = {
        username: "",
        password: '',
        email: ""
    }


    const validationSchema = Yup.object().shape({
        username: Yup.string()
          .min(6, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
          password: Yup.string()
          .min(10, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });

    const handleSignup = (formValue: { username: string; password: string; email: string }) => {
        const { username, password, email } = formValue;
        console.log("data: ", username, password, email);
        AuthService.signup(username, password, email).then((response) => {
            navigate("/login");
        }, error => {
            alert("Đăng kí thất bại");
            const resMessage = (
                error.response.data.message
            );
            setMessage(resMessage);
            setLoading("true");

        })
    }
    return (
        <>
            <section className="ftco-section_signup">
                <div className="container">
                    <div className="row justify-content-center">
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="login-wrap p-4 p-md-5">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-user-o" />
                                </div>
                                <h3 className="text-center mb-4">Have an account?</h3>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSignup}
                                >
                                    <Form className="login-form">
                                        <div className="form-group">
                                            <Field name="username" type="text" placeholder="Username" className="form-control" />
                                            <ErrorMessage
                                                name="username"
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <Field name="email" type="email" placeholder="Email" className="form-control" />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <Field name="password" type="password" placeholder="Password" className="form-control" />
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                        </div>
                                        <div className="form-group d-md-flex">
                                            <div className="w-50">
                                                <label className="checkbox-wrap checkbox-primary">Remember Me
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right">
                                                <a href="#">Forgot Password</a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" data-toggle="modal" data-target="#exampleModal" className="btn btn-primary rounded submit p-3 px-5">
                                                <span>Login</span>
                                            </button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Signup;