import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const useFormController = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    lang: yup.string().required("Name is required"),
    gender: yup.string().required("Gender is required"),
  });

  const formik = useFormik({
    initialValues: {
      lang: "",
      gender: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      localStorage.setItem("gender", values.gender);
      localStorage.setItem("lang", values.lang);
      // window.location.replace("http://localhost:5173/menu");
      navigate("/menu");
    },
  });

  const exports = {
    formik,
  };
  return exports;
};

export default useFormController;
