function CategoryPageItem() {
    const {title, image} = props
    return(
<div className={cls.category__item}>
<h5>{title}</h5>
</div>
    )
}

export default CategoryPageItem