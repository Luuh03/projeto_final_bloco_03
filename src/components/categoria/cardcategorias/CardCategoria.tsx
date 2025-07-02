import { Link } from "react-router-dom"
import type { Categoria } from "../../models/Categoria"
import { PencilIcon, TrashIcon } from "@phosphor-icons/react"

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
        Categoria
      </header>
      <p className="p-8 text-3xl bg-white h-full font-semibold">{categoria.nome}</p>

      <div className="flex justify-center gap-4 py-3 bg-indigo-800">
        <Link to={`/editarcategoria/${categoria.id}`} className="cursor-pointer">
          <PencilIcon size={24} color="#FFFFFF" />
        </Link>

        <Link to={`/deletarcategoria/${categoria.id}`} className="cursor-pointer">
          <TrashIcon size={24} color="#FFFFFF" />
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria