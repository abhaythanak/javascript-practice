const Insert = document.getElementById('insert')
window.addEventListener('keydown', (e)=>{
    Insert.innerHTML = `<div class="color">
        <table>
            <tr>
                <th>key</th>
                <th>Key Code</th>
                <th>Code</th>
            </tr>

            <tr>
                <td>${e.key === '' ? "space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
     </div>`
})