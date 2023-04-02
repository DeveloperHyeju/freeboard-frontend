// 가공된 날짜를 만들어주는 함수
export const setDate = (rawDate) => {
    const date = new Date(rawDate);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth()+1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    return `${yyyy}.${mm}.${dd}`;
};