const API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY;
const API_HOST = process.env.NEXT_PUBLIC_RAPID_API_HOST;

const headers = {
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": API_HOST,
};

export const fetchGet = async (
  url: string,
  params: Record<string, any> = {},
  options: any = {}
): Promise<any> => {
  const queryParams = new URLSearchParams(params).toString();
  const urlWithParams = params ? `${url}?${queryParams}` : url;
  const response = await fetch(urlWithParams, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
      ...options,
    },
  });

  return await response.json();
};
