import React from 'react';

function Modal({currentPhoto, closeModal}) {
    const {name,category,description,index,largeImageURL} = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={largeImageURL} alt={category} />
                <p>{description}</p>
                <button type="button" onClick={() => closeModal()}>
                    Close this modal
                </button>
            </div>
        </div>
    )
}
export default Modal;