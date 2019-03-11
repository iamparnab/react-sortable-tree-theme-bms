import React from 'react'
import PropTypes from 'prop-types'
import Icon from './icon'

const NavigateDown = ({ viewBox, style }) => (
    <Icon viewBox={viewBox} style={style} className="expand_button">
        <path fill="none" d="m 12.792422,4 -6.0200003,6 -5.98,-5.96" className="expand_button" stroke="#000"/>
    </Icon>
    )

NavigateDown.defaultProps = {
viewBox: '0 0 14 14',
style: {}
}
NavigateDown.propTypes = {
viewBox: PropTypes.string,
style: PropTypes.shape({})
}

export default NavigateDown