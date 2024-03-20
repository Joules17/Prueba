import React, { useState } from 'react';

const CreateFormModal = ({ onSubmit, onClose }) => {
    const [numIdentificacion, setNumIdentificacion] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [tipoIdentificacion, setTipoIdentificacion] = useState('');
    const [estadoCivil, setEstadoCivil] = useState(0);
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [numBeneficiarios, setNumBeneficiarios] = useState(0);
    const [fechaIngreso, setFechaIngreso] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        var estadoCivilParsed = parseInt(estadoCivil)
        var numIdentificacionParsed = parseInt(numIdentificacion)
        onSubmit({
            numIdentificacion: numIdentificacionParsed,
            nombres: nombres,
            apellidos: apellidos,
            tipoIdentificacion: tipoIdentificacion,
            estadoCivil: estadoCivilParsed,
            fechaNacimiento: fechaNacimiento,
            numBeneficiarios: numBeneficiarios,
            fechaIngreso: fechaIngreso
        });
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full flex justify-center items-center">
            <div className="bg-gray-900 bg-opacity-50 fixed top-0 left-0 w-full h-full"></div>
            <div className="bg-white border border-black rounded-lg p-8 relative z-10 max-w-lg w-full overflow-y-auto max-h-[600px]">
                <div className="font-bold text-green-800 text-xl mb-4">Nuevo Formulario</div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Form Id.
                        </label>
                        <input
                            type="text"
                            value={numIdentificacion}
                            onChange={(e) => setNumIdentificacion(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingrese el numero de identificacion"
                            maxLength="20"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Nombres:
                        </label>
                        <input
                            type="text"
                            value={nombres}
                            onChange={(e) => setNombres(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingrese nombres aqui"
                            maxLength="20"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Apellidos:
                        </label>
                        <input
                            type="text"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingrese apellidos aqui"
                            maxLength="20"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoIdentificacion">
                            Tipo ID:
                        </label>
                        <select
                            id="tipoIdentificacion"
                            value={tipoIdentificacion}
                            onChange={(e) => setTipoIdentificacion(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
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
                            value={estadoCivil}
                            onChange={(e) => setEstadoCivil(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
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
                            value={fechaNacimiento}
                            onChange={(e) => setFechaNacimiento(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingrese aqui"
                            maxLength="20"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Fecha de ingreso:
                        </label>
                        <input
                            type="date"
                            value={fechaIngreso}
                            onChange={(e) => setFechaIngreso(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingrese aqui"
                            maxLength="20"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Num Beneficiarios:
                        </label>
                        <input
                            type="number"
                            value={numBeneficiarios}
                            onChange={(e) => setNumBeneficiarios(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingrese aqui"
                            maxLength="20"
                            min = "0"
                            required
                        />
                    </div>


                    <div className="flex justify-between space-x-2">
                        <button
                            type="button"
                            className="border border-red-600 text-red-600 hover:bg-red-100 hover:text-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            Create Form
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateFormModal;