
export const timeStampToTime = (timeStamp: number) => {
    const sec = parseInt(`${(timeStamp / 1000) % 60}`);
    const min = parseInt(`${(timeStamp / 1000) / 60 % 60}`);
    const hr = parseInt(`${timeStamp / 60 / 60 / 1000% 60}`);
    return {
        sec,
        min,
        hr,
    };
};

export const formatTime = (sec: number, min: number, hr: number) => {
    return `${hr > 0 ? `${hr}h : ` : ''}${min > 0 ? `${min}m : ` : ''}${sec}s`;
};


export const getSeconds = () => {
    const date = new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    return hr * 60 * 60 + min * 60 + sec;
  };
  