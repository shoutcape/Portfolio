'use client';
//every interactive element that the client can interact with is clientsided, so 
//it needs to be seperated from serverside components for improved performance

const TestButton = () => {
  return (
    <div>
      <button onClick={() => console.log('Click')}>Test Button</button>
    </div>
  )
}

export default TestButton
