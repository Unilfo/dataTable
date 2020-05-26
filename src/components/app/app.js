import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import ModalRowAdd from '../modal-row-add/modal-row-add';
import './app.css';
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { options } from '../data/data';

let id_count = 37;

export default class DataTeblePhoneNumber extends Component {

    state = {
        data: [
            { id: 1, fio: 'Иванов Илья Сергееви', telefon_number: '001', department: '3', position: '1' },
            { id: 2, fio: 'Петров Максим Иванович', telefon_number: '103', department: '1', position: '1' },
            { id: 3, fio: 'Кузнецов Константин Васильевич', telefon_number: '789', department: '2', position: '1' },
            { id: 4, fio: 'Иванов Илья Сергееви', telefon_number: '001', department: '2', position: '1' },
            { id: 5, fio: 'Петров Максим Иванович', telefon_number: '103', department: '3', position: '1' },
            { id: 6, fio: 'Кузнецов Константин Васильевич', telefon_number: '789', department: '4', position: '1' },
            { id: 7, fio: 'Иванов Илья Сергееви', telefon_number: '001', department: '2', position: '1' },
            { id: 8, fio: 'Петров Максим Иванович', telefon_number: '103', department: '5', position: '1' },
            { id: 9, fio: 'Кузнецов Константин Васильевич', telefon_number: '789', department: '5', position: '1' },
            { id: 10, fio: 'Иванов Илья Сергееви', telefon_number: '001', department: '2', position: '1' },
            { id: 11, fio: 'Петров Максим Иванович', telefon_number: '103', department: '2', position: '1' },
            { id: 12, fio: 'Кузнецов Константин Васильевич', telefon_number: '789', department: '2', position: '1' },
            { id: 13, fio: 'Иванов Илья Сергееви', telefon_number: '001', department: '2', position: '1' },
            { id: 14, fio: 'Петров Максим Иванович', telefon_number: '103', department: '2', position: '1' },
            { id: 15, fio: 'Кузнецов Константин Васильевич', telefon_number: '789', department: '2', position: '1' },
            { id: 16, fio: 'Иванов Илья Сергееви', telefon_number: '001', department: '2', position: '1' },
            { id: 17, fio: 'Петров Максим Иванович', telefon_number: '103', department: '2', position: '1' },
            { id: 18, fio: 'Кузнецов Константин Васильевич', telefon_number: '789', department: '1', position: '1' },
            { id: 19, fio: 'Иванов Илья Сергееви', telefon_number: '001', department: '1', position: '1' },
            { id: 20, fio: 'Петров Максим Иванович', telefon_number: '103', department: '1', position: '1' },
            { id: 21, fio: 'Кузнецов Константин Васильевич', telefon_number: '789', department: '1', position: '1' },
            { id: 22, fio: 'Иванов Илья Сергееви', telefon_number: '001', department: '1', position: '1' },
            { id: 23, fio: 'Петров Максим Иванович', telefon_number: '103', department: '1', position: '1' },
            { id: 24, fio: 'Кузнецов Константин Васильевич', telefon_number: '789', department: '1', position: '1' },
            { id: 25, fio: 'Иванов Илья Сергееви', telefon_number: '001', department: '1', position: '1' },
            { id: 26, fio: 'Петров Максим Иванович', telefon_number: '103', department: '1', position: '1' },
            { id: 27, fio: 'Кузнецов Константин Васильевич', telefon_number: '789', department: '1', position: '1' },
            { id: 28, fio: 'Иванов Илья Сергееви', telefon_number: '001', department: '1', position: '1' },
            { id: 29, fio: 'Петров Максим Иванович', telefon_number: '103', department: '1', position: '1' },
            { id: 30, fio: 'Кузнецов Константин Васильевич', telefon_number: '789', department: '1', position: '1' },
            { id: 31, fio: 'Иванов Илья Сергееви', telefon_number: '001', department: '1', position: '1' },
            { id: 32, fio: 'Петров Максим Иванович', telefon_number: '103', department: '1', position: '1' },
            { id: 33, fio: 'Кузнецов Константин Васильевич', telefon_number: '789', department: '1', position: '1' },
            { id: 34, fio: 'Иванов Илья Сергееви', telefon_number: '001', department: '1', position: '1' },
            { id: 35, fio: 'Петров Максим Иванович', telefon_number: '103', department: '1', position: '1' },
            { id: 36, fio: 'Кузнецов Константин Васильевич', telefon_number: '789', department: '1', position: '1' },

        ],
        columns: [
            {
                name: 'Отдел',
                selector: 'department',
                sortable: true,
                style: {
                    color: '#202124',
                    fontSize: '14px',
                    fontWeight: 500
                },
                width: '300px',
                cell: ({ department }) => {
                    const item = options.filter((el) => el.value === department);
                    return item[0].name

                }
            },
            {
                name: 'ФИО',
                selector: 'fio',
                sortable: true,
                style: {
                    color: '#202124',
                    fontSize: '14px',
                    fontWeight: 500
                },
            },
            {
                name: 'Должность',
                selector: 'position',
                sortable: true,
                style: {
                    color: '#202124',
                    fontSize: '14px',
                    fontWeight: 500
                },
            },
            {
                name: 'Телефон',
                selector: 'telefon_number',
                sortable: true,
                width: '350px',
                style: {
                    color: '#202124',
                    fontSize: '14px',
                    fontWeight: 500
                },
            },
            {
                name: 'buttons',
                id: 'edit',
                width: '150px',
                cell: ({ id }) =>
                    <>

                        <Button className='mr-2' onClick={() => this.edit(id)}>
                            <BsPencilSquare />
                        </Button>
                        <Button onClick={() => this.del(id)}>
                            <BsFillTrashFill />
                        </Button>
                    </>
            },
        ],
        tern: '',
        show: false,
        itemModal: {}
    };

    openMod = () => {
        this.setState({
            show: true,
            itemModal: { id: '', fio: '', telefon_number: '', department: '', position: '' }
        });
    };

    add = (item) => {
        const idx = this.state.data.findIndex((el) => el.id === item.id);

        if (idx === -1 && item.fio !== '' && item.telefon_number !== '' && item.department !== '' && item.position !== '') {
            const newItem = this.createItem(item);
            this.setState(({ data }) => {
                const newData = [
                    newItem,
                    ...data
                ];
                return {
                    data: newData
                }
            });
        }
        else if (idx !== -1) {
            this.setState(({ data }) => {
                const findItem = this.state.data.filter((el) => el.id === item.id);
                if (findItem) {
                    findItem[0].fio = item.fio;
                    findItem[0].telefon_number = item.telefon_number;
                    findItem[0].department = item.department;
                    findItem[0].position = item.position;

                    const newData = [
                        ...data
                    ];
                    return {
                        data: newData
                    }
                }
            });
        }
    };


    createItem = (item) => {
        return {
            id: id_count++,
            fio: item.fio,
            telefon_number: item.telefon_number,
            department: item.department,
            position: item.position

        }
    };

    del = (id) => {
        this.setState(({ data }) => {
            const idx = data.findIndex((el) => el.id === id);

            const newArray = [
                ...data.slice(0, idx),
                ...data.slice(idx + 1)
            ];

            return {
                data: newArray
            };
        });
    };

    search(items, tern) {

        if (tern.length === 0) {
            return items;
        }

        const findFio = items.filter((item) => {
            return item.fio
                .toLowerCase()
                .indexOf(tern.toLowerCase().trim()) > -1;
        });

        const findTelefonNumber = items.filter((item) => {
            return item.telefon_number
                .toLowerCase()
                .indexOf(tern.toLowerCase().trim()) > -1;
        });

        const dep = options.filter((el) =>
            el.name
                .toLowerCase()
                .indexOf(tern.toLowerCase().trim()) > -1
        );
        let findDepartment = [];
        for (let i = 0; i < dep.length; i++) {
            const arr = items.filter((item) => {
                return item.department
                    .indexOf(dep[i].value) > -1;
            });
            if (arr.length !== 0) {
                findDepartment = [...new Set([...arr, ...findDepartment])];
            }
        }

        const newArrData = [...new Set([...findFio, ...findTelefonNumber, ...findDepartment])];


        return newArrData;
    };

    handleChange = (e) => {

        this.setState({
            tern: e.target.value
        });
    };

    edit = (id) => {
        const findItem = this.state.data.filter((item) => item.id === id);

        this.setState({
            itemModal: findItem[0],
            show: true
        });
    };

    close = () => {
        this.setState({
            show: false
        });
    };



    render() {
        const { data, columns, tern, show, itemModal } = this.state;
        const visibalItems = this.search(data, tern);

        const DataTableDB = () => {
            return (
                <DataTable
                    columns={columns}
                    data={visibalItems}
                    pagination
                    paginationPerPage={15}
                    noHeader
                />);
        };

        return (
            <div>
                <div className="d-flex mb-3 ml-2">
                    <div className="mr-auto p-2 ">
                        <Button className='mr-auto p-2' onClick={this.openMod}>Создать</Button>
                    </div>
                    <div className="p-2 w-25">
                        <FormControl
                            placeholder='поиск'
                            value={tern}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <DataTableDB />
                <ModalRowAdd show={show} item={itemModal} onClose={this.close} onAdd={this.add} />
            </div>
        )
    }
};
