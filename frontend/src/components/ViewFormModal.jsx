import React from 'react';

const ViewFormModal = ({selectedForm, onClose }) => {

    const handleSubmit = () => {
        onClose();
    }

    console.log(selectedForm)
    return (
        <div className="fixed top-0 left-0 w-full flex justify-center items-center">
            <div className="bg-gray-900 bg-opacity-50 fixed top-0 left-0 w-full h-full"></div>
            <div className="bg-white border border-black rounded-lg p-8 relative z-10 max-w-lg w-full overflow-y-auto max-h-[600px]">
                <div className="font-bold text-green-800 text-xl mb-4">Formulario Id. {selectedForm.numIdentificacion}</div>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Nombres:
                        </label>
                        <input
                            type="text"
                            value={selectedForm.nombres}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingrese nombres aqui"
                            maxLength="20"
                            required
                            disabled= {true}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Apellidos:
                        </label>
                        <input
                            type="text"
                            value={selectedForm.apellidos}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingrese apellidos aqui"
                            maxLength="20"
                            required
                            disabled = {true}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoIdentificacion">
                            Tipo ID:
                        </label>
                        <select
                            id="tipoIdentificacion"
                            value={selectedForm.tipoIdentificacion}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            disabled= {true}
                        >
                            <option value="CC">Cédula de Ciudadanía</option>
                            <option value="TI">Tarjeta de Identidad</option>
                            <option value="CE">Cedula Extranjera</option>
                            <option value="RC">Registro Civil</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoIdentificacion">
                            Estado Civil:
                        </label>
                        <select
                            id="estadoCivil"
                            value={selectedForm.estadoCivil}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            disabled = {true}
                        >
                            <option value="1">Soltero</option>
                            <option value="2">Casado</option>
                            <option value="3">Union Libre</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Fecha de nacimiento:
                        </label>
                        <input
                            type="date"
                            value={selectedForm.fechaNacimiento.slice(0,10)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingrese aqui"
                            maxLength="20"
                            required
                            disabled = {true}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Fecha de ingreso:
                        </label>
                        <input
                            type="date"
                            value={selectedForm.fechaIngreso.slice(0,10)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingrese aqui"
                            maxLength="20"
                            required
                            disabled = {true}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Num Beneficiarios:
                        </label>
                        <input
                            type="number"
                            value={selectedForm.numBeneficiarios}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingrese aqui"
                            maxLength="20"
                            min = "0"
                            required
                            disabled = {true}
                        />
                    </div>


                    <div className="flex justify-between space-x-2">
                        <button
                            type="button"
                            className="border border-red-600 text-red-600 hover:bg-red-100 hover:text-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            onClick={onClose}
                        >
                            Cerrar Formulario
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ViewFormModal;