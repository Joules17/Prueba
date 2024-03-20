const FormCard = ({ formu, setSelectedForm, setOpenFormModal }) => {
      const handleSelectForm = () => {
        setSelectedForm(formu);
        setOpenFormModal(true);
      }

    return (
      <div className="max-w-[300px] max-h-[350px] bg-white rounded-lg overflow-hidden m-4 border-2 border-black transition duration-300 ease-in-out transform hover:scale-105 hover:border-orange-500">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-orange-900">
            ID: {formu.numIdentificacion}
          </div>
          <p className="text-black text-base mb-10">Nombres: {formu.nombres} - Apellidos: {formu.apellidos}</p>
          <hr className="border-gray-500 my-4" />
          <button onClick = {handleSelectForm} className="text-orange-900 text-center font-bold w-full">VIEW FORM</button>
        </div>
      </div>
    );
  };

  export default FormCard;