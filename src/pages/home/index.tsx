import { NavLink } from "react-router-dom";

export function Home() {

    return (
        <>
            <div className="bg-[#202020] h-screen flex items-center justify-center">
                <div className="bg-sky-50 p-4 rounded-lg flex flex-col items-center justify-center gap-4 w-120 h-160 relative">
                    <h1 className="text-4xl font-bold text-white flex absolute -top-6 bg-[#202020] px-4 py-2 rounded-b-lg ">Sonhar Confecções</h1>
                    <div className="bg-gray-300 flex flex-col items-start justify-start p-4 rounded-lg w-full h-32 relative">
                        <h1 className="bg-sky-50 px-2 rounded-sm absolute -top-3 left-0">Titulo</h1>
                        <div className="flex flex-col intems-top justify-start">
                            <div className="w-100 h-20 flex items-center justify-around gap-4 ">
                                <div className="w-90 text-[14px] flex gap-8 items-center justify-center">
                                    <div className="flex flex-col items-center justify-center">
                                        <p>Marca</p>
                                        <p>Costa Rica</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <p>Sku</p>
                                        <p>MG-00000101</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 flex flex-col items-start justify-start p-4 rounded-lg w-full h-32 relative">
                        <h1 className="bg-sky-50 px-2 rounded-sm absolute -top-3 left-0">informações</h1>
                        <div className="flex flex-col intems-top justify-start">
                            <div className="w-100 h-20 flex items-center justify-around gap-4 ">
                                <div className="text-[14px] w-90 flex gap-8 items-center justify-center">
                                    <div className="flex flex-col items-center justify-center">
                                        <p>Composição 1</p>
                                        <p>30% Algodão</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <p>Composição 2</p>
                                        <p>70% Poliéster</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <p>Composição 3</p>
                                        <p>100% Algodão </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 flex flex-col items-start justify-start p-4 rounded-lg w-full h-32 relative">
                        <h1 className="bg-sky-50 px-2 rounded-sm absolute -top-3 left-0">Matricula</h1>
                        <div className="flex flex-col intems-top justify-start">
                            <div className="w-100 h-20 flex items-center justify-around gap-4 ">
                                <div className="w-90 text-[14px] flex gap-8 items-center justify-center">
                                    <div className="flex flex-col items-center justify-center">
                                        <p>mat-001:</p>
                                        <p>Corte</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <p>mat-002:</p>
                                        <p>fechamento de ombro</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <p>mat-003:</p>
                                        <p>para-suor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}