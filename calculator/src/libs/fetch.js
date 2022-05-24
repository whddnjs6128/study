export const fetcher = async (url) => {
  const res = await fetch(url);

  // 상태코드가 2xx가 아니라면 parsr와 throw를 시도
  if (!res.ok) {
    const error = new Error("[Fail] fetch data");
    // error.info 에는 오류 객체를 담습니다.
    error.info = await res.json();
    //error.status에는 상태코드를 담습니다.
    error.status = res.status;
    throw error;
  }
  return res.json();
};
