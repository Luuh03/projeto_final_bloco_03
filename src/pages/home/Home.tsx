

function Home() {
  return (
    <div className="flex justify-center bg-cyan-300 h-[80vh]">
      <div className="container grid grid-cols-2 py-4.5">
        <div className="flex flex-col justify-center items-center gap-6 text-black">
          <h1 className="text-6xl font-bold">Seja bem vinde!</h1>
          <p className="text-2xl font-semibold">Aqui você encontra Medicamentos e Cosméticos!</p>

          <div className="rounded py-2 w-1/3 cursor-pointer bg-indigo-800
             hover:bg-indigo-950 text-white flex justify-center transition delay-2">
            Cadastrar Produto
          </div>
        </div>
        <img src="https://ik.imagekit.io/j8alkuh75t/Farmacia/8e8709b84d83b67c927f9cd9935ff03ba50e1055.png?updatedAt=1751459608585"
          className="w-2/3 max-w-96 m-auto" alt="Imagem principal da página home" />
      </div>
    </div>
  )
}

export default Home