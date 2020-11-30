import React, { Component } from 'react';
import axios from 'axios';


const api = "http://localhost:3001";

class ListMahasiswa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mahasiswa: [],
            response: '',
        }
    }

    getData = () => {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                mahasiswa: res.data.values
            })
        }).catch(e => {
            console.log(e)
        })
    }

    componentDidMount = () => {
        this.getData();
    }
    render() {
        return (
            <div>
                <h1>Data Mahasiswa</h1>
                <br />
                <button>Tambah Data </button>
                <br />
                <table border="1">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.mahasiswa.map((mahasiswa, index) =>
                                <tr key={mahasiswa.id_mahasiswa}>
                                    <td>{index + 1}</td>
                                    <td>{mahasiswa.nim}</td>
                                    <td>{mahasiswa.nama}</td>
                                    <td>{mahasiswa.jurusan}</td>
                                    <td><button>Edit</button> | <button>Hapus</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListMahasiswa
