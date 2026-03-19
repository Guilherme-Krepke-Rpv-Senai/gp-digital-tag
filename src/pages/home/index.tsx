import { NavLink } from "react-router-dom";

export function Home() {

    return (
        <>
            <div className="bg-[#202020] h-screen flex items-center justify-center">
                <div className="bg-sky-50 p-4 rounded-lg flex flex-col items-center justify-center gap-4 w-120 h-160">
                    <div className="bg-gray-300 flex flex-col items-start justify-start p-4 rounded-lg w-full h-32 relative">
                        <h1 className="bg-sky-50 px-2 rounded-sm absolute -top-3 left-0">Titulo</h1>
                        <div className="flex flex-col intems-top justify-start">
                            <p>descrição</p>
                        </div>
                    </div>
                    <div className="bg-gray-300 flex flex-col items-start justify-start p-4 rounded-lg w-full h-32 relative">
                        <h1 className="bg-sky-50 px-2 rounded-sm absolute -top-3 left-0">informações</h1>
                        <div className="flex flex-col intems-top justify-start">
                            <p>descrição</p>
                        </div>
                    </div>
                    <div className="bg-gray-300 flex flex-col items-start justify-start p-4 rounded-lg w-full h-32 relative">
                        <h1 className="bg-sky-50 px-2 rounded-sm absolute -top-3 left-0">Matricula</h1>
                        <div className="flex flex-col intems-top justify-start">
                            <p>descrição</p>
                            <p>descrição</p>
                            <p>descrição</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}