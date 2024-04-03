import Swal from 'sweetalert2';
import { Student_BASE_URL } from '../../App.js';
import axios from 'axios';
import Logo from './Forms-View.svg';
import { React, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../../Pages/Header/Header.js';
export default function ViewUser() {
    const navigate = useNavigate();

    const { id } = useParams(); //trích xuất giá trị của tham số id từ URL
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        userID: "3"
    });


    function handleChangeInput(event) {
        //Sử dụng event.target.name để xác định trường nào đang thay đổi và cập nhật giá trị tương ứng trong inputs
        event.persist();
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        axios.get(Student_BASE_URL + '/FindUser/' + id)
            .then(res => {
                if (res.data.Status === '200') {
                    const studentData = res.data.Data;
                    const student = JSON.parse(studentData);

                    setInputs({
                        firstName: student[0].FirstName,
                        lastName: student[0].LastName,
                        email: student[0].Email,
                        contact: student[0].PhoneNumber
                    });
                }
                else if (res.data.Status === '404') { // Đưa ra các thông báo alert 
                    Swal.fire({
                        title: "Warning !",
                        icon: "warning",
                        text: "No Student ID Found",
                        button: "Ok!"
                    });
                    navigate('/dashboard'); // Tự động đưa về trrang dashboard
                }
            });
    }, []);

    return (
        <div>
            <Header />
            <div className='container py-3'>
                <div className="container pt-1">
                    <div className="row">
                        <div className="col pt-2">
                            <p className="h5 fw-bold">View User</p>
                        </div>
                        <div className="col text-end"><Link to="/dashboard" className="btn btn-success"><i className="fa fa-chevron-circle-left" aria-hidden="true"></i> Back</Link></div>
                    </div>
                    <hr />
                </div>

                <form action='' autoComplete="off">
                    <div className='row'>
                        <div className="col-xs-12 col-sm-8 col-md-6 mt-3">
                            <div className="row mb-3">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <label htmlFor="" className="form-label">First Name</label>
                                    <input type="text" name="firstName" value={inputs.firstName} id="" className="form-control" onChange={handleChangeInput} required />
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <label htmlFor="" className="form-label">Last Name</label>
                                    <input type="text" name="lastName" id="" value={inputs.lastName} className="form-control" onChange={handleChangeInput} required />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" name="email" id="" value={inputs.email} className="form-control" onChange={handleChangeInput} disabled />
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <label htmlFor="" className="form-label">Phone Number </label>
                                    <input type="text" name="contact" id="" value={inputs.contact} className="form-control" onChange={handleChangeInput} required />
                                </div>
                            </div>

                            <div id='back'><Link to="/dashboard" className="btn btn-primary mt-5"><i className="fa fa-chevron-circle-left" aria-hidden="true"></i> Go Back</Link></div>
                        </div>

                        <div className="col-sm-12 col-md-6 text-center p-3 d-none d-md-block">
                            <img src={Logo} alt="" className="img-fluid rounded" width="400px" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}