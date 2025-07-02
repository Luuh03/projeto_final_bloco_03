import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

  let data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Farmacia Generation | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/luan-queiroz/">
              <LinkedinLogoIcon size={36} />
            </a>
            <a href="https://www.instagram.com/luanzitoh2/">
              <InstagramLogoIcon size={36} />
            </a>
            <a href="https://www.facebook.com/Luan.E.de.Queiroz/?locale=pt_BR">
              <FacebookLogoIcon size={36} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer