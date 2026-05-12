import {useState} from 'react';

export function RectangleForm() {
    const [canhhcn, setCanhhcn] = useState({dai: '', rong: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCanhhcn({...canhhcn, [name]: Number(value)});
    }
    const perimeter = 2 * (canhhcn.dai + canhhcn.rong);
    const area = canhhcn.dai * canhhcn.rong;
    return (
        <div>
            <h1> Tính chu vi và diện tích hình chữ nhật</h1>
            <form>
                <label>
                    Chiều dài:
                    <input
                        type="number"
                        name="dai"
                        placeholder='Nhap chieu dai'
                        value={canhhcn.dai}
                        onChange={handleChange}
                    />
                </label> <br /> 
            <label>
                Chiều rộng:
                <input
                    type="number"
                    placeholder='Nhap chieu rong'
                    name="rong"
                    value={canhhcn.rong}
                    onChange={handleChange}
                />
            </label> <br />
        </form>
        <p>Chu vi là: {perimeter} cm</p>
        <p>Diện tích là: {area} cm²</p>
    </div>
    );
}
