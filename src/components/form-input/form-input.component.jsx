import './form-input.styles.scss'
import { useState } from 'react';

const FormInput = ({ label, ...otherProps }) => {

    const [hasValue, setHasValue] = useState(true);
    const [labelHasValue, setLabelHasValue] = useState(false);

    function handleInput(event) {
        if (event.target.value.trim() === "") {
            setHasValue(false);
            setLabelHasValue(false);
        } else {
            setHasValue(true);
            setLabelHasValue(true);
        }
    }

    function handleBlur(event) {
        if (event.target.value.trim() === "") {
            setHasValue(false);
            setLabelHasValue(false);
        }
    }

    return (
        <div className='group'>

            <input
                onFocus={() => setHasValue(true)}
                onInput={handleInput}
                onBlur={handleBlur}
                className={`form-input ${hasValue ? "" : "no-value"}`}
                {...otherProps} />

            {
                label && (
                    <label className={`form-input-label ${labelHasValue ? "shrink" : ""}`}>{label}<span> *</span></label>
                )
            }

        </div>
    )

}

export default FormInput;