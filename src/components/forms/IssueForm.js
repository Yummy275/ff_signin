import React from 'react';

export const IssueForm = ({
    updateTextArea,
    buttons,
    updateCheckBox,
    handleSubmit,
}) => {
    return (
        <form
            className="d-flex flex-column align-items-center"
            onSubmit={(e) => handleSubmit(e)}
        >
            <textarea
                className="form-control mt-3"
                rows="3"
                id="issue"
                placeholder="Describe your issue"
                onChange={(e) => updateTextArea(e)}
                required
            />
            <div className="form-check mt-3">
                <label htmlFor="accessories" className="form-check-label">
                    Are you leaving any accessories?(cords, chargers, keybaords,
                    etc)
                </label>
                <input
                    className="form-check-input"
                    id="accessories"
                    type="checkbox"
                    onChange={updateCheckBox}
                />
            </div>
            <div className="d-flex gap-5 mt-3 justify-content-center">
                {buttons}
            </div>
        </form>
    );
};
