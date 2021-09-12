import Button from '../../components/Button/Button';

function Home() {
  return (
    <>
      <h1>Hello home</h1>
      <Button onClick={() => console.log('hola')}> Click me </Button>
    </>
  );
}

export default Home;
