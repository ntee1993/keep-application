import React, { Fragment } from 'react'
import { Container } from "reactstrap";
import LoginElement from './auth/LoginElement'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function AppBody({ isAuthenticated }) {
    return (
        <Fragment>
            <Container className="d-flex justify-content-center">
                {isAuthenticated ? <h1>Login Successfully!!!</h1>: <LoginElement />}
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
