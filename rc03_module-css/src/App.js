import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  //? console.log(data);
  return (
    <>
    {data.map((item) => {
      //!Destruction(ayırma) ,,map = dolaşma
      const {id, img, btnName, dil} = item;
      
      return <Card key={id} img={img} btnName={btnName} dil={dil}/>
      //key burda uniq bir değer ver ki hata vermesin.
      //id yerine idex de kullanılabılır ama ıd kullanalım(mapde index kullanabılırsın)

    
    })}
      
    </>
  );
}

export default App;
