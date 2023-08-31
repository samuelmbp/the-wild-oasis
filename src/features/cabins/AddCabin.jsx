import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "../cabins/CreateCabinForm";
import Modal from "../../ui/Modal";

const AddCabin = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpenModel((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModel && (
        <Modal onClose={() => setIsOpenModel(false)}>
          <CreateCabinForm onCloseModel={() => setIsOpenModel(false)} />
        </Modal>
      )}
    </>
  );
};

export default AddCabin;
