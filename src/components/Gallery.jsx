import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from './Loading';
import Error from './Error';
import NoImagesFound from './NotFound';
import { useAppContext } from '../context';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_ACCESS_KEY
};`;

const Gallery = () => {
  const { searchTerm } = useAppContext();

  const { isPending, isError, data } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (isPending) return <Loading />;

  if (isError) return <Error />;

  console.log(data);

  const results = data.results;
  if (results.length < 1) return <NoImagesFound />;

  return (
    <section className="image-container">
      {results.map((image) => {
        const {
          urls: { regular },
        } = image;
        return (
          <img
            key={image.id}
            src={regular}
            alt={image.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;

//const url = image?urls?.regular
// return  <img key={image.id} src={url} alt={image.alt_description}/>
