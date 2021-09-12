import Button from '../../components/Button/Button';

function Home() {
  return (
    <>
      <h1>Hello home</h1>
      <button className={Button()} onClick={() => console.log('hola')}>
        Click me!
      </button>
    </>
  );
}

export default Home;
