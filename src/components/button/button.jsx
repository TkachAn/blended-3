import propTypes from 'prop-types';

export const Button = ({func, text, type}) => {
    return (
            <button type={type} onClick={func}>{text}</button>
    )
}

Button.propTypes = {
    func: propTypes.func.isRequired,
    text: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
}

