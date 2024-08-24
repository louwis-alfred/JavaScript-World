document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('myParagraph');

    paragraph.addEventListener('click', (event) => {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (selectedText !== '') {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.classList.add('highlight');
            range.surroundContents(span);
        }
    });
});
