import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { Categoria } from "../../../models/Categoria"
import { atualizar, buscar, cadastrar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlerta } from "../../../utils/ToastAlerta"


function FormCategoria() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  const { id } = useParams<{ id: string }>()

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)

    } catch (error: any) {
      ToastAlerta('Houve algum erro ao carregar a categoria!', 'erro')
      console.log(error)
    }
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar('/categorias', categoria, setCategoria)

        ToastAlerta("A categoria foi atualizada com sucesso!", 'sucesso')
      } catch (error: any) {
        ToastAlerta('Houve algum erro ao atualizar a categoria!', 'erro')
        console.log(error)
      }

    } else {
      try {
        await cadastrar('/categorias', categoria, setCategoria)

        ToastAlerta("A categoria foi cadastrada com sucesso!", 'sucesso')
      } catch (error: any) {
        ToastAlerta('Houve algum erro ao cadastrar a categoria!', 'erro')
        console.log(error)
      }
    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Categoria</label>
          <input
            type="text"
            placeholder="Categoria"
            name="nome"
            className="border-2 border-slate-700 rounded p-2 bg-white"

            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-800
                     hover:bg-indigo-950 w-1/2 py-2 mx-auto flex justify-center transition delay-2"
          type="submit"
        >
          {isLoading ?
            <RotatingLines
              strokeColor='white'
              strokeWidth='5'
              animationDuration='0.75'
              width='24'
              visible={true}
            /> :
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          }
        </button>
      </form>
    </div>
  )
}

export default FormCategoria