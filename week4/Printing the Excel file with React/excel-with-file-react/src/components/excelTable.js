import {readExcel,setData} from '../services/excelService.js';

export  function ExcelToArray(){
    return(
    <div>
        <input type="file" onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
            }}
        />
        <table class="table container">
            <thead>
                <tr>
                    <th>name</th>
                    <th>surname</th>
                    <th>alt</th>
                </tr>
            </thead>
            <tbody>
                {setData.map((d) => (
                    d.map((e)=>
                    <tr key={e.name}>
                    <td>{e.name}</td>
                    <td>{e.surname}</td>
                    <td>{e.alt}</td>
                    </tr>
                )))}
            </tbody>
        </table>
    </div>
);
}

