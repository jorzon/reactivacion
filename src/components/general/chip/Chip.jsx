import React from 'react'

const Chip = ({ children, className }) => {
    return (
        <div className={className}>
            <h6>{children}</h6>
        </div>
    )
}

Chip.defaultProps = {
    children: '',
};

export default Chip
