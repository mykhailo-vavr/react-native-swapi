import { View } from 'react-native';
import { MovieCardFC } from './types';
import { Row, Card } from '../../atoms';

const MovieCard: MovieCardFC = ({ item }) => (
  <Card>
    <Row title="Title:" text={item?.title} />
    <Row title="Release date:" text={item?.releaseDate} />
    <Row
      title="Opening scroll:"
      text={`${item?.openingCrawl?.slice(0, 50)}...`}
    />
  </Card>
);

export default MovieCard;
