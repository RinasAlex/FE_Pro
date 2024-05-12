import CustomButton from '../UI/CustomButton';
import cls from './Modal.module.css'

function Modal(props) {


    return (
        <div className={cls.modal}>
            <div className={cls.modal__content}>
            <h3>Modal</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nisi officia temporibus consectetur labore unde soluta vitae cumque corporis porro doloremque suscipit neque, impedit consequuntur id ducimus, voluptatum dolores quis non? Beatae eaque corporis, quas pariatur dolore, incidunt, nam nulla praesentium vitae adipisci perferendis fuga saepe facere iste quod deserunt!</p>
            <CustomButton text='close' onHandleClick={props.onHandleClick}/>
            </div>
        </div>
    )
}

export default Modal;