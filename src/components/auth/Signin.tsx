import { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthService from '../../service/AuthService';
import "./Auth.css";
type Props = {};
type State = {
    username: string,
    password: string,
    loading: boolean,
    message: string
}
export default class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        }

    }

    validationSchema() {
        return Yup.object().shape({
            username: Yup.string().required("Không được để trống!"),
            password: Yup.string().required("Không được để trống!")
        });
    }

    handleLogin(formValue: { username: string; password: string }) {
        const { username, password } = formValue;
        this.setState({
            loading: false,
            message: ""
        });

        AuthService.signin(username, password).then((response) => {
            window.location.href = 'http://localhost:3000';
            // let user: User;
            // let userJson: any;
            //   userJson = localStorage.getItem("user");
            //  user = JSON.parse(userJson);
            // console.log(user.accessToken);
            alert("Đăng nhập thành công");
        }, error => {
            alert("Đăng nhập thất bại");
            const resMessage = (
                error.response.data.message
            );

            this.setState({
                message: resMessage,
                loading: true,
            });

        }
        );
    }

    render() {
        const { loading, message } = this.state;
        const initialValues = {
            username: "",
            password: ''
        }
        return (
            <section className="ftco-section_singnin">
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
                                    validationSchema={this.validationSchema}
                                    onSubmit={this.handleLogin}
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
                                            <button type="submit" className="btn btn-primary rounded submit p-3 px-5">
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

        );
    }
}