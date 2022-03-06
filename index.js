import { useLocation } from 'react-router-dom';

// ** Type **
// ** data: Array<string>
const useQuery = (data) => {
  const { search } = useLocation();

  if (!data || !data.length) return {};

  const queryParam = () => new URLSearchParams(search);

  return data.reduce((acc, item) => ({
    ...acc,
    [item]: queryParam().get(item),
  }), {});
};

export default useQuery;
