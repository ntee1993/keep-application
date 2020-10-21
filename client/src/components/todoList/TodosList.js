import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getTodos, deleteTodo } from "../../actions/todoActions";

const TodoList = ({ getTodos, deleteTodo, todo }) => {

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {todo.todos.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    style={{
                      borderRadius: '50%',
                      height: '100%',
                      width: '30px'
                    }}
                    onClick={deleteTodo.bind(this, _id)}
                  >
                    <strong>&times;</strong>
                </Button>&nbsp;
                <input type="checkbox" />&nbsp;{" "}
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

TodoList.propTypes = {
  getTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  todo: state.todo
});

export default connect(mapStateToProps, {
  getTodos,
  deleteTodo,
})(TodoList);
