import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

import DetailTable from "./DetailTable";
import { Table } from "react-bootstrap";


const API = `https://localhost:7115/api/Students`;

const Crud = () => {
    const [students, setStudents] = useState([]);
    const [editStudentId, setEditStudentId] = useState(null);
    const [editedStudent, setEditedStudent] = useState({
        id: null,
        name: "",
        age: "",
        address: "",
        faculty: ""
    });

    const fetchStudents = async () => {
        try {
            const res = await axios.get(API);
            setStudents(res.data);
            console.log('Students fetched:', res.data);
        } catch (error) {
            console.error("Error fetching students", error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleEdit = (id) => {
        setEditStudentId(id);
        const studentToEdit = students.find((student) => student.id === id);
        setEditedStudent({ ...studentToEdit });
    };

    const handleSave = async () => {
        try {
            await axios.put(`${API}/${editedStudent.id}`, editedStudent);
            fetchStudents();
            setEditStudentId(null);
            setEditedStudent({
                id: null,
                name: "",
                age: "",
                address: "",
                faculty: ""
            });
        } catch (error) {
            console.error("Error updating student", error);
        }
    };

    const handleCancel = () => {
        setEditStudentId(null);
        setEditedStudent({
            id: null,
            name: "",
            age: "",
            address: "",
            faculty: ""
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedStudent({ ...editedStudent, [name]: value });
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            try {
                await axios.delete(`${API}/${id}`);
                fetchStudents();
            } catch (error) {
                console.error("Error deleting student", error);
            }
        }
    };

    return (
        <Fragment>
            <DetailTable fetchStudents={fetchStudents} />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Faculty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>
                                {editStudentId === student.id ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={editedStudent.name}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    student.name
                                )}
                            </td>
                            <td>
                                {editStudentId === student.id ? (
                                    <input
                                        type="number"
                                        name="age"
                                        value={editedStudent.age}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    student.age
                                )}
                            </td>
                            <td>
                                {editStudentId === student.id ? (
                                    <input
                                        type="text"
                                        name="address"
                                        value={editedStudent.address}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    student.address
                                )}
                            </td>
                            <td>
                                {editStudentId === student.id ? (
                                    <input
                                        type="text"
                                        name="faculty"
                                        value={editedStudent.faculty}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    student.faculty
                                )}
                            </td>
                            <td>
                                {editStudentId === student.id ? (
                                    <Fragment>
                                        <button
                                            className="btn btn-success"
                                            onClick={handleSave}
                                        >
                                            Save
                                        </button>{" "}
                                        <button
                                            className="btn btn-secondary"
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </button>{" "}
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleEdit(student.id)}
                                        >
                                            Edit
                                        </button>{" "}
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(student.id)}
                                        >
                                            Delete
                                        </button>{" "}
                                    </Fragment>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Fragment>
    );
};

export default Crud;
