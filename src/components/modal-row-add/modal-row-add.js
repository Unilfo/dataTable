import React from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './modal-row-add.css';
import SelectSearch from 'react-select-search';
import { options } from '../data/data';


export default class ModalRowAdd extends React.Component {


    state = {
        id: '',
        fio: '',
        telefon_number: '',
        department: '',
        position: '',
    };


    componentDidUpdate() {
        if (this.props.item.id !== this.state.id) {
            this.setState({
                id: this.props.item.id,
                fio: this.props.item.fio,
                telefon_number: this.props.item.telefon_number,
                department: this.props.item.department,
                position: this.props.item.position
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.id !== undefined) {
            const newItem = {
                id: this.state.id,
                fio: this.state.fio.trim(),
                telefon_number: this.state.telefon_number.trim(),
                department: this.state.department,
                position: this.state.position,
            }

            this.props.onAdd(newItem);
        }
        this.onhandleClose();
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleChangeSelect = (e) => {
        this.setState({
            department: e
        });
    };

    onhandleClose = () => {
        this.props.onClose();
        this.setState({
            id: '',
            fio: '',
            telefon_number: '',
            department: '',
            position: '',
        });
    };

    onHideNull = () => {

    };


    render() {

        const { show } = this.props;
        const {
            id,
            fio,
            telefon_number,
            department,
            position,
        } = this.state;

        return (
            <Modal show={show} size="lg" onHide={this.onHideNull} >
                <form onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <Container>
                            <Card style={{ height: '35rem' }}>
                                <Card.Img style={{ height: '150px', width: '150px' }} variant="top" src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" />
                                <Card.Body>
                                    <Form.Label>Отдел</Form.Label>

                                    <SelectSearch
                                        value={`${department}`}
                                        name="department"
                                        options={options}
                                        search
                                        placeholder="Подразделение"
                                        onChange={this.handleChangeSelect}
                                    />

                                    <FormControl
                                        type='text'
                                        hidden
                                        disabled
                                        name='id'
                                        value={id}
                                        onChange={this.handleChange}
                                    />

                                    {/* <FormControl
                                        type='text'
                                        name='department'
                                        value={department}
                                        onChange={this.handleChange}
                                    /> */}

                                    <Form.Label  >ФИО</Form.Label>
                                    <FormControl
                                        type='text'
                                        name='fio'
                                        value={fio}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Label>Должность</Form.Label>
                                    <FormControl
                                        type='text'
                                        name='position'
                                        value={position}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Label>Телефон</Form.Label>
                                    <FormControl
                                        type='text'
                                        name='telefon_number'
                                        value={telefon_number}
                                        onChange={this.handleChange}
                                    />

                                    <Form.Group className='mt-5'>
                                        <Button className='mr-2' variant="secondary" onClick={this.onhandleClose}>
                                            Закрыть
                                    </Button>
                                        <Button className='mr-2' type='submit' variant="primary">
                                            Сохранить
                                    </Button>
                                    </Form.Group>

                                </Card.Body>
                            </Card>
                        </Container>
                    </Modal.Body>
                </form>
            </ Modal >
        );
    }
};