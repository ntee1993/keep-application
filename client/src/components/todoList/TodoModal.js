import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../../actions/todoActions";

const stat = {
  modal: false,
  name: "",
};

const TodoModal = ({ addTodo }) => {
  const [state, setState] = useState(stat);

  const toggle = () => {
    setState({
      ...state,
      modal: !state.modal,
    });
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      name: state.name,
    };

    // add todo via addTodo action
    addTodo(newTodo);

    // close modal
    toggle();
  };

  return (
    <div>      
      <Button className="mt-2" color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        Add Todo
      </Button>

      <Modal isOpen={state.modal} toggle={toggle} autoFocus={false}>
        <ModalHeader
            toggle={toggle} 
            style={{ background: "#7bc143", color: "#ffffff" }}
        >Add To Todos List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="todo">Todo</Label>
              <Input
                type="text"
                name="name"
                id="todo"
                placeholder="Add todo to the list."
                onChange={onChange}
                autoFocus={true}
              />
            <Button
                color="dark"
                style={{
                    background: "#7bc143",
                    marginTop: "2rem"
                }}
                block
            >Add Todo</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

TodoModal.propTypes = {
  addTodo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  todo: state.todo
});

export default connect(mapStateToProps, { addTodo })(TodoModal);
