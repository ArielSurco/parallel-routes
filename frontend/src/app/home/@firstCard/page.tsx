export const dynamic = 'force-dynamic';

const getData = async () => {
  const response = await fetch('http://localhost:3001/first-card', {
    mode: 'no-cors',
    cache: 'no-store'
  });
  
  console.log('Response of first card', response.ok);
  
  if(response.ok) {
    const data = await response.json();
    return data;
  }

  throw new Error('Network response in FirstCard was not ok.');
}

const FirstCardSegment = async () => {
  const data = await getData();

  return (
    <div className="bg-gray-500 text-white p-4">
      <h1>FirstCardSegment</h1>
      <p>{data.message}</p>
    </div>
  )
}

export default FirstCardSegment