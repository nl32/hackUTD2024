import BarGraph from 'src/components/barGraph';

export default function Building() {
  return (
    <div>
      <BarGraph
        title="hi"
        series={[
          {
            name: 'Desktops',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          },
          {
            name: 'Laptops',
            data: [148, 91, 69, 62, 49, 51, 35, 41, 10],
          },
        ]}
      />
    </div>
  );
}
