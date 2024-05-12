import CustomButton from "./UI/CustomButton"

const TextBlock = (props) => {
    const { title, description, onHandleClick } = props;

    return (
        <div>
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
            <CustomButton text="Delete" onHandleClick={onHandleClick} />
        </div>
    )
}

export default TextBlock
