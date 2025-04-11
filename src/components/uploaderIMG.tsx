import React, { useState } from 'react';
import classes from '../components/Card/Card.module.css'

interface UploaderProps {
  indexPlayer?: number; // Указываем, что indexPlayer - это число
}

const Uploader: React.FC<UploaderProps> = ({ indexPlayer }) => {
  const [_base64Image, setBase64Image] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result as string);

        // Сохраняем результат в локальное хранилище после загрузки файла
        const data = JSON.parse(localStorage.getItem('массив') || '[]');
        if (indexPlayer !== undefined && indexPlayer < data.length) {
          data[indexPlayer].newPortrait = reader.result; // Используем reader.result
          localStorage.setItem('массив', JSON.stringify(data));

          console.log(reader.result); // Здесь будет код изображения
          console.log(data);
        }
      };
      console.log(reader.result); // Здесь будет код изображения

      reader.readAsDataURL(file);
    }
    window.location.reload();
  };

  return (
    <div>
      <input className={classes.uploadWindow} type="file" onChange={handleFileChange} />
    </div>
  );
};

export default Uploader;
