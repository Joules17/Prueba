import React from "react";
import { FaRegNoteSticky } from "react-icons/fa6";
import { PiArchiveDuotone } from "react-icons/pi";

const Navbar = ({setOpenFormModal, setOpenCreateModal}) => {


    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <div className="flex items-center">
                <FaRegNoteSticky
                    style={{ color: "orange" }}
                    className="mr-2 text-3xl mt-1"
                />
                <h1 className="w-full text-3xl font-bold">Celsia</h1>
            </div>
            <ul className="flex">
                <li className="p-4">
                    <button
                        type="button"
                        data-twe-toggle="tooltip"
                        data-twe-placement="bottom"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        title= "View Forms"
                        className="flex items-center underline px-4"
                    >
                        <PiArchiveDuotone className="mr-2 text-2xl" /> Imagenes

                    </button>
                </li>
                <li className="p-4">
                    <button
                        type="button"
                        data-twe-toggle="tooltip"
                        data-twe-placement="bottom"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        title="Create a Note"
                        className="flex items-center underline px-4"
                        onClick = {() => setOpenCreateModal(true)}
                    >
                        Crear Formulario
                    </button>
                </li>

            </ul>
        </div>
    );
};

export default Navbar;