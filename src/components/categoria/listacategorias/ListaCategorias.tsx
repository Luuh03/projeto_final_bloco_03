import { useEffect, useState } from "react"
import type { Categoria } from "../../../models/Categoria"
import { buscar } from "../../../services/Service"
import { DNA } from "react-loader-spinner"
import CardCategoria from "../cardcategorias/CardCategoria"
import { ToastAlerta } from "../../../utils/ToastAlerta"


function ListaCategorias() {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [categorias, setCategorias] = useState<Categoria[]>([])

  async function buscarCategorias() {
    try {

      setIsLoading(true)

      await buscar('/categorias', setCategorias)

    } catch (error: any) {
      ToastAlerta('Houve algum erro ao carregar as categorias!', 'erro')
      console.log(error)

    } finally {
      setIsLoading(false)
    }
  }

  // Carrega os dados quando o componente for executado e quando o tamanho de temas for alterado
  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])

  return (
    <>
      {isLoading && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )

      }

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">

          {
            (!isLoading && categorias.length) === 0 && (
              <span className="text-3xl text-center my-8 font-bold">
                Nenhuma categoria foi encontrada!
              </span>
            )
          }

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategorias