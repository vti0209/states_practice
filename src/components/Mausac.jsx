import {useState} from 'react'
// bài này là click button ra nền theo ý muốn
export function Mausac() {
    const [color, setColor] = useState('white');
    return (
        <div style={{ backgroundColor: color, height: '150px', width: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={() => setColor('purple')}>Tím</button>
            <button onClick={() => setColor('green')}>Xanh lá</button>
        </div>
    );
}
