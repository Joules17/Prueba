import React from 'react';
import FormCard from './FormCard';

const Vault = ({ formularios, setSelectedForm, setOpenFormModal }) => {
    return (
        <div className="max-w-[1240px] w-full mx-auto bg-slate-300 p-4 overflow-y-auto rounded-lg border border-black" style={{ maxHeight: 'calc(100vh - 100px)' }}>
            <div className="grid grid-cols-3 gap-4">
                {formularios.map(formu => (
                    <FormCard key={formu.numIdentificacion} formu={formu} setSelectedForm={setSelectedForm} setOpenFormModal = {setOpenFormModal} />
                ))}
            </div>
        </div>
    );
};

export default Vault;