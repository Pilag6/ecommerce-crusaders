const CardImg = () => {
    return (
        <div class="new-product__title">
            <div class="new-product__title--words">
                <div class="stick"></div>
                <h2>{name}</h2>
                <h2>{name1}</h2>
                <h2>{name2}</h2>
            </div>

            <div class="arrows">
                <i class="fa-solid fa-chevron-left"></i>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    );
};

export default CardImg;
