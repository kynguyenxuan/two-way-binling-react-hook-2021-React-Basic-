
import { useState } from "react";

// bai toan tinh tong cua mang cong len 1

// tinh tong mot mang theo so tong cua mang
// const oder = [1, 2, 3, 4, 5];
// export default function App() {
//   const [counter, setCounter] = useState(() => {
//     const total = oder.reduce((item, crr) => {
//       return item + crr;
//     });
//     console.log(total);
//     return total;
//   });
//   const handle = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <div className="App">
//       <h1>{counter}</h1>
//       <button onClick={handle}>Click</button>
//     </div>
//   );
// }

// cong counter len 1

// export default function Ass () {
//   const [counter, setCounter] = useState (1)
//   const nhanLenSo = () => {
//     setCounter(counter + 1)
//   }
//   return (
//     <div className="Ass" style={{padding:20}}>
//       <h1>{counter}</h1>
//       <button onClick={nhanLenSo}>Nhấn Vào</button>
//     </div>
//   )
// }

//Thay doi object mot cach ngau nhien

export default function Css () {
  const [Info, setInfo] = useState({
    name: `Nguyễn Xuân Kỷ`,
    age: 24,
    address: `phường Thanh Khương - thị xã Thuận Thành - Tỉnh Bắc Ninh`
  })
  const add = () => {
    setInfo(
      {
        ...Info,
      like:`Tập Tạ & Kiếm tiền bằng dev dù không thích nhưng vẫn phải làm`
      }
    )
  }
  return (
    <div className="Css" style={{padding:20}}>
      <h1>{JSON.stringify(Info)}</h1>
      <button onClick={add}>Nhấn Vào</button>
    </div>
  )
}

