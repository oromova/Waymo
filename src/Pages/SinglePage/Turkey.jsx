import { useParams } from 'react-router-dom';
import { travelPackeges } from '../../mock/travelPackages';

const Turkey = () => {
  const {id} = useParams();

  const selected = travelPackeges.find(pkg => pkg.id === parseInt(id));

  if (!selected) {
    return <div className="text-center mt-20 text-2xl font-bold">Package Not Found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-16 p-6">
      <h2 className="text-3xl font-bold mb-4">{selected.title}</h2>
      <img src={selected.img} alt={selected.title} className="w-full h-96 object-cover rounded-xl mb-6" />
      <p><strong>Destination:</strong> {selected.destination}</p>
      <p><strong>Duration:</strong> {selected.duration}</p>
      <p><strong>Dates:</strong> {selected.date}</p>
      <p className="text-xl font-bold mt-4"><strong>Price:</strong> {selected.price}</p>
    </div>
  );
};

export default Turkey;