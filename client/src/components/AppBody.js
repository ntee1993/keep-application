import React, { Fragment } from 'react'
import { Container } from "reactstrap";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import LoginElement from './auth/LoginElement'
import TodosList from './todoList/TodosList'
import TodoModal from './todoList/TodoModal'

function AppBody({ isAuthenticated }) {
    return (
        <Fragment>
            <Container className="d-flex justify-content-center">
                {isAuthenticated ? (
                    <Container>
                        <TodoModal />
                        <TodosList />
                    </Container>
                ) : (
                    <LoginElement />
                )}
            </Container>
        </Fragment>
    )
}

AppBody.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, null)(AppBody)
