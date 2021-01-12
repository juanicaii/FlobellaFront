import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import axios from "axios";
import "./contacto.css";
import Swal from "sweetalert2";
import ReactGA from "react-ga";

const Contacto = (props) => {
  const [open, setOpen] = useState(props.open);
  const schema = yup.object().shape({
    nombre: yup.string().required("No puedes dejar el campo vacio"),
    apellido: yup.string().required("No puedes dejar el campo vacio"),
    email: yup
      .string()
      .email("Ingresa un Correo valido")
      .required("No puedes dejar el campo vacio"),
    telefono: yup
      .number()
      .min(8, "Ingrese un telefono valido")
      .typeError("Ingrese un telefono valido"),
    razon: yup.string(),
    web: yup.string(),
  });

  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const inputs = [
    { placeholder: "Nombre", name: "nombre" },
    { placeholder: "Apellido", name: "apellido" },
    { placeholder: "Email", name: "email" },
    { placeholder: "Telefono", name: "telefono" },
    { placeholder: "Razon Social (Opcional)", name: "razon" },
    { placeholder: "Pagina Web (Opcional)", name: "web" },
  ];
  const submit = (data) => {
    ReactGA.event({
      category: "Contacto",
      action: "Envio de Informacion via contacto",
    });
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("apellido", data.apellido);
    formData.append("email", data.email);
    formData.append("telefono", data.telefono);
    formData.append("razon", data.razon);
    formData.append("web", data.web);
    formData.append("info", props.info);

    axios.post("/contacto", { data: data, info: props.info }).then((res) => {
      if (res.data.enviado == true) {
        Swal.fire({
          title: "Sistema",
          html:
            "<h5>Gracias por interesarte en nuestros servicios</h5>" +
            "Lo contactaremos en la brevedad",
          icon: "success",
          onClose: () => {
            window.location.reload();
          },
        });
      } else {
        Swal.fire({
          title: "Sistema",
          html:
            "<h5>No se pudo enviar el mensaje</h5>" +
            "Aguarde unos instantes y vuelva a intentar",
          icon: "success",
          onClose: () => {
            window.location.reload();
          },
        });
      }
    });
  };

  return (
    <div>
      <div>
        <Modal isOpen={props.open}>
          <ModalHeader toggle={props.close}>Contacto</ModalHeader>
          <ModalBody className="text-center">
            <form onSubmit={handleSubmit(submit)}>
              {inputs.map((input, i) => (
                <div key={i} className="form">
                  <input
                    className={`${errors[input.name] ? "errorInput" : ""}`}
                    id="inputs"
                    name={input.name}
                    placeholder={input.placeholder}
                    ref={register}
                  ></input>
                  <p className="error">{errors[input.name]?.message}</p>
                </div>
              ))}
              <br />
              <button
                type="submit"
                style={{
                  backgroundColor: "var(--azul)",
                  color: "#fff",
                }}
                className="boton hvr-grow"
              >
                Enviar
              </button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default Contacto;
