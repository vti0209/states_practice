import {useState} from 'react'
// bài này là click button xanh ra nền xanh và click button đỏ ra nền đỏ
export function Mausac() {
    const [color, setColor] = useState('white');
    return (
        <div style={{ backgroundColor: color, height: '100vh' }}>
            <button onClick={() => setColor('blue')}>Xanh</button>
            <button onClick={() => setColor('red')}>Đỏ</button>
        </div>
    );
}
