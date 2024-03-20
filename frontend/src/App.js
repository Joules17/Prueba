import React, {useState, useEffect} from 'react';
// hooks
import { useExternalApi as useFormResponse } from './hooks/formResponse'

// project imports
import Navbar from './components/Navbar'
import Vault from './components/Vault'
import Modal from './components/Modal'
import CreateFormModal from './components/CreateFormModal'
import ViewFormModal from './components/ViewFormModal'


function App() {
  // hooks
  const { getFormularios, createFormulario } = useFormResponse()

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [formularios, setFormularios] = useState([]);
  const [selectedForm, setSelectedForm] = useState({});
  const [openFormModal, setOpenFormModal] = useState(false);



  function onCloseModal () {
    setOpenCreateModal(false);
  }

  function onCloseFormModal () {
    setOpenFormModal(false);
  }

  const handleCreateForm = async (data) => {
    await createFormulario(data);
    await getFormularios(setFormularios);
  }

  useEffect(() => {
    const fetchForms = async () => {
        await getFormularios(setFormularios)
    };
    fetchForms()

    // eslint-disable-next-line
}, [])

  return (
    <div>
      <Navbar setOpenCreateModal={setOpenCreateModal}/>
      <Vault formularios = {formularios} setSelectedForm = {setSelectedForm} setOpenFormModal = {setOpenFormModal} />

      <Modal isOpen={openCreateModal} onClose={onCloseModal}>
        <CreateFormModal onSubmit={handleCreateForm} onClose={onCloseModal} />
      </Modal>

      <Modal isOpen={openFormModal} onClose={onCloseFormModal}>
        <ViewFormModal selectedForm = {selectedForm} onClose={onCloseFormModal} />
      </Modal>
    </div>
  );
}

export default App;
