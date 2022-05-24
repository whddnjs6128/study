import useSWR from "swr";
import { fetcher } from "./fetch";

export function useUser(id) {
  const { data, error } = useSWR(
    `https://api.github.com/repos/vercel/swr`,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export const GetData = () => {
  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // 상태코드가 404라면 더이상 시도하지 않습니다.
        if (error.status === 404) return;
        // 최대 10번까지만 시도합니다.
        if (retryCount >= 10) return;
        // 5초에 한 번 재검증합니다.
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );

  if (error) return "[FAIL] get data";
  if (!data) return "[FAIL] no data";
  return data;
};
