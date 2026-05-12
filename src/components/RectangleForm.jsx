// 

// cách 2 sử dụng 1 button để tính ra chu vi và diện tích của hình chữ nhật
import { useState } from 'react'
export function RectangleForm() {
    const [rectangle, setRectangle] = useState({ length: 0, width: 0 });
    const[result, setResult] = useState({ perimeter: 0, area: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRectangle(prev => ({ ...prev, [name]: Number(value) }));
    };

    const calculate = () => {
        const perimeter = 2 * (rectangle.length + rectangle.width);
        const area = rectangle.length * rectangle.width;
        setResult({ perimeter, area });
    };

    return (
        <div>
            <h2>Tính chu vi và diện tích hình chữ nhật 2</h2>
            <input
                type="number"
                name="length"
                value={rectangle.length}
                onChange={handleChange}
                placeholder="Length"
            />  <br /><br />
            <input
                type="number"
                name="width"
                value={rectangle.width}
                onChange={handleChange}
                placeholder="Width"
            /> <br /><br />
            <button onClick={calculate}>Calculate</button>
            <p>Chu vi: {result.perimeter}</p>    
            <p>Diện tích: {result.area}</p>
        </div>
    );
}



