import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { Categoria } from "../../models/Categoria"
import { buscar, deletar } from "../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { CheckIcon, XIcon } from "@phosphor-icons/react"


function DeletaCategoria() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  const { id } = useParams<{ id: string }>()

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)

    } catch (error: any) {
      alert('Houve algum erro ao carregar a categoria!')
      console.log(error)
    }
  }

  async function deletarCategoria() {
    setIsLoading(true)

    try {
      await deletar(`/categorias/${id}`)

    } catch (error: any) {
      alert('Houve algum erro ao deletar a categoria!')
      console.log(error)

    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id)
    } else {
      setCategoria({
        id: undefined,
        nome: ""
      })
    }
  }, [id])

  return (
    <div className="container w-1/3 mx-auto py-4">
      <h1 className="text-5xl text-center my-7">Deletar categoria</h1>
      <p className="text-center font-semibold mb-10">
        Você tem certeza que deseja apagar a categoria a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          Categoria
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.nome}</p>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 transition delay-2 flex items-center justify-center cursor-pointer"
            onClick={retornar}>
            <XIcon size={24} color="#FFFFFF" />
          </button>
          <button className="w-full text-slate-100 bg-indigo-400
          hover:bg-indigo-600 flex items-center justify-center transition delay-2 cursor-pointer"
            onClick={deletarCategoria}>

            {isLoading ?
              <RotatingLines
                strokeColor='white'
                strokeWidth='5'
                animationDuration='0.75'
                width='24'
                visible={true}
              /> :
              <CheckIcon size={24} color="#FFFFFF" />
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletaCategoria