import Building from 'src/components/building';
import SearchBar from 'src/components/searchBar';

export default function Home() {
  return (
    <div>
      <SearchBar />
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Building key={index} />
        ))}
    </div>
  );
}
