

function ModalContent(props) {
    const { name, email, phone } = props
    return (
        <div className="modal__content-item">
            <p>name:{name}</p>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
        </div>
    )
}

export default ModalContent