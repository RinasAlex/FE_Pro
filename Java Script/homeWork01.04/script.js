{/* <div class="modal__content">
    <span class="close">X</span>
    <h2>Fetch posts</h2>
    <div class="modal__block">
        <div class="modal__title">
            <h4>Title:</h4>
            <p>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</p>
        </div>
        <div class="modal__body">
            <h4>Body:</h4>
            <p>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut
                quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
        </div>
    </div>
    <div class="modal__block">
        <div class="modal__title">
            <h4>Title:</h4>
            <p>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</p>
        </div>
        <div class="modal__body">
            <h4>Body:</h4>
            <p>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut
                quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
        </div>
    </div>
</div> */}


const btnFetch = document.querySelector('.fetch__modal')

btnFetch.addEventListener('click', function () {
    const modalContent = document.createElement('div');
    modalContent.classList.add('.modal__content');

    const fetchTitle = document.createElement('h2')
    fetchTitle.innerText = "Fetch posts";
    modalContent.append(fetchTitle)

    for (let i = 0; i < 2; i++) {

        const modalBlock = document.createElement('div');
        modalBlock.classList.add("modal__block");

        const modalTitle = document.createElement('div');
        modalTitle.classList.add("modal__title")

        const modalTitleName = document.createElement('h4')
        modalTitleName.innerText = "Title:";

        const modalTitleElem = document.createElement('p')
        modalTitleElem.innerText = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";

        modalTitle.append(modalTitleName, modalTitleElem);

        const modalBody = document.createElement('div');
        modalBody.classList.add("modal__body")

        const modalBodyName = document.createElement('h4')
        modalBodyName.innerText = "Body:";

        const modalBodyElem = document.createElement('p')
        modalBodyElem.innerText = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut utquas totam\nnostrum rerum est autem sunt rem eveniet architecto";

        modalBody.append(modalBodyName, modalBodyElem);
        modalBlock.append(modalTitle, modalBody);
        modalContent.append(modalBlock);
    }

    document.body.append(modalContent)
})