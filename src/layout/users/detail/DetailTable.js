import React, { useState } from 'react';
import axios from 'axios';
import "./Table.css";

const DetailTable = ({ fetchStudents }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        address: '',
        faculty: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { name, age, address, faculty } = formData;
            await axios.post('https://localhost:7115/api/Students', {
                name,
                age,
                address,
                faculty
            });
            console.log('Student saved successfully');
            fetchStudents();
            setFormData({
                name: '',
                age: '',
                address: '',
                faculty: ''
            });
        } catch (error) {
            console.error('Error saving student', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Age:
                        <input type="number" name="age" value={formData.age} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Address:
                        <input name="address" value={formData.address} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Faculty:
                        <select name="faculty" value={formData.faculty} onChange={handleChange}>
                            <option value="">Select Faculty</option>
                            <option value="BBA">BBA</option>
                            <option value="BCA">BCA</option>
                            <option value="BBM">BBM</option>
                            <option value="BHM">BHM</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DetailTable;
