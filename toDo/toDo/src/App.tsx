import { CircleCheckBig, Plus, User, X } from "lucide-react";
import { categoriesList } from "./utils/categoriesList/categoriesList";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between w-full p-2 px-4">
        <div className="flex items-center justify-start gap-1">
          <CircleCheckBig className="text-purple-500" />
          <span className="text-2xl font-bold">TaskMaster</span>
        </div>
        <div>
          <span className="font-semibold">Tiago Araujo</span>
        </div>
      </header>
      <div className="h-px bg-gray-300" />
      <div className="flex flex-1">
        <aside className="w-48 p-2 px-4 bg-purple-100">
          <div>
            <h2 className="text-xl font-semibold">Categorias</h2>
            <ul className="p-2 space-y-3">
              {categoriesList.map((category, index) => (
                <li key={index}>
                  <span className="transition duration-500 transform cursor-pointer hover:scale-150">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <main className="flex-1 p-2 bg-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">Minhas Tasks</span>
            <button onClick={() => setIsOpen(true)} className="flex items-center justify-center gap-1 p-2 font-bold text-white bg-purple-600 rounded-xl">
              <Plus />
              <span>Nova Task</span>
            </button>
          </div>
        </main>
      </div>
      /* Modal */
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <button type="button">
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Para concluir a criação da viagem para{" "}
                <span className="font-semibold text-zinc-100">
                  Florianópolis
                </span>
                , Brasil nas datas de{" "}
                <span className="font-semibold text-zinc-100">
                  16 a 27 de Agosto de 2024
                </span>{" "}
                preencha seus dados abaixo:
              </p>
            </div>
            <form className="space-y-3">
              <div className="flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800">
                <User className="size-5 text-zinc-400" />
                <input
                  name="name"
                  placeholder="Seu nome completo"
                  className="flex-1 text-lg bg-transparent outline-none placeholder-zinc-400"
                  
                />
              </div>

              <div className="flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800">
                <User className="size-5 text-zinc-400" />
                <input
                  name="email"
                  type="email"
                  placeholder="Seu email pessoal"
                  className="flex-1 text-lg bg-transparent outline-none placeholder-zinc-400"
                 
                />
              </div>
              <button type="submit">
                Confirmar criação da viagem
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
