import React from 'react';
import MainPage from './MainPage';

const Corousel: React.FC = () => {
  const corouselData = [
    {
      id: 1,
      img: '../../assets/cek.jpg', // Ganti dengan path gambar yang sesuai
      title: 'Judul 1',
      text: 'Teks 1',
    },
    {
      id: 2,
      img: '../../assets/cek1.jpg', // Ganti dengan path gambar yang sesuai
      title: 'Judul 2',
      text: 'Teks 2',
    },
    {
      id: 3,
      img: '../../assets/cek2.jpg', // Ganti dengan path gambar yang sesuai
      title: 'Judul 3',
      text: 'Teks 3',
    },
  ];

  return (
    <div className="corousel">
      <MainPage corousel={corouselData} />
    </div>
  );
};

export default Corousel;
