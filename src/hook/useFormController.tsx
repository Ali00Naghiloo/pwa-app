import { useFormik } from "formik";
import * as yup from "yup";

const useFormController = () => {
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
      console.log(values);
      localStorage.setItem("gender", values.gender);
      localStorage.setItem("lang", values.lang);
      window.location.replace("http://localhost:5173/menu");
    },
  });

  const exports = {
    formik,
  };
  return exports;
};

export default useFormController;
