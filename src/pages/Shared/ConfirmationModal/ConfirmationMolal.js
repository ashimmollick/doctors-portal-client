import React from 'react';

const ConfirmationMolal = ({ title, message, closeModal, modalData, successAction, successButtonName }) => {
    return (
        <div>



            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn">{successButtonName}</label>
                        <button onClick={closeModal} className='btn btn-outline'>Calcel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationMolal;