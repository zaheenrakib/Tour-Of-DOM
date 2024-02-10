const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1> My Dynamic Section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>First Item</li>
        <li>First Item</li>
        <li>First Item</li>
        <li>First Item</li>
        <li>First Item</li>
    </ul>    
`
main.appendChild(section);